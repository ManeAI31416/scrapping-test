import { extract } from '@extractus/article-extractor'

async function getArticle() {
  try {
    const article = await extract('https://medium.com/@revivingvirtue/i-asked-generative-ai-music-platform-suno-to-write-a-podcast-theme-things-got-weird-a66820103f55')
    console.log(article.content)
  } catch (err) {
    console.error(err)
  }
}

getArticle()
