const RSS_FEEDS = [
  {
    url: 'https://techcrunch.com/feed/',
    source: 'TechCrunch',
  },
  {
    url: 'https://www.theverge.com/rss/index.xml',
    source: 'The Verge',
  },
  {
    url: 'https://www.kompas.com/tekno/rss',
    source: 'Kompas Tekno',
  },
]

const stripHtml = (value: string) => {
  return value.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim()
}

const extractText = (content: string, tag: string) => {
  const regex = new RegExp(`<${tag}[^>]*>([\s\S]*?)<\/${tag}>`, 'i')
  const match = content.match(regex)
  return match?.[1]?.trim() ?? ''
}

const extractLink = (content: string) => {
  const alternateLink = content.match(/<link[^>]+rel=["']alternate["'][^>]+href=["']([^"']+)["'][^>]*>/i)
  if (alternateLink?.[1]) return alternateLink[1]

  const hrefLink = content.match(/<link[^>]+href=["']([^"']+)["'][^>]*>/i)
  if (hrefLink?.[1]) return hrefLink[1]

  const tagLink = content.match(/<link[^>]*>(.*?)<\/link>/i)
  return tagLink?.[1]?.trim() ?? ''
}

const extractImage = (content: string) => {
  const mediaContent = content.match(/<media:content[^>]+url=["']([^"']+)["'][^>]*>/i)
  if (mediaContent) return mediaContent[1]

  const enclosure = content.match(/<enclosure[^>]+url=["']([^"']+)["'][^>]*>/i)
  if (enclosure) return enclosure[1]

  const imgTag = content.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i)
  if (imgTag) return imgTag[1]

  return ''
}

const parseItems = (xml: string, source: string) => {
  const entries = xml.split(/<item|<entry/i).slice(1)
  return entries
    .map((entry) => {
      const raw = `<item${entry}`
      const title = stripHtml(extractText(raw, 'title'))
      const link = extractLink(raw)
      const description = stripHtml(extractText(raw, 'description')) || stripHtml(extractText(raw, 'summary'))
      const pubDateText = extractText(raw, 'pubDate') || extractText(raw, 'updated') || extractText(raw, 'published')
      const pubDate = pubDateText ? new Date(pubDateText) : new Date()
      const image = extractImage(raw)
      return {
        title,
        slug: title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, ''),
        link,
        summary: description?.slice(0, 170).trim() || 'Berita terbaru seputar teknologi dan website.',
        date: pubDate,
        formattedDate: pubDate.toLocaleDateString('id-ID', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        }),
        image: image || 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
        source,
        isExternal: true,
      }
    })
    .filter((item) => item.title && item.link)
}

let cachedPosts: any[] = []
let cacheTimestamp = 0

export default defineEventHandler(async (event) => {
  const now = Date.now()
  const cacheAge = now - cacheTimestamp
  const CACHE_TTL = 1000 * 60 * 15 // 15 menit

  if (cachedPosts.length && cacheAge < CACHE_TTL) {
    return cachedPosts
  }

  const allPosts: Array<any> = []

  await Promise.all(
    RSS_FEEDS.map(async (feed) => {
      try {
        const rss = await $fetch(feed.url, {
          responseType: 'text',
          headers: {
            'User-Agent': 'Mozilla/5.0 (compatible; DigitalSanjaya/1.0; +https://digitalsanjaya.com)',
          },
        }) as string
        const items = parseItems(rss, feed.source)
        allPosts.push(...items.slice(0, 4))
      } catch (err) {
        // ignore fetch failures for one feed
      }
    })
  )

  cachedPosts = allPosts
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .slice(0, 8)
    .map((item) => ({
      ...item,
      date: item.formattedDate,
    }))

  cacheTimestamp = now
  return cachedPosts
})
