import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import newsArticle from './sanity/schemas/newsArticle'
import teamMember from './sanity/schemas/teamMember'
import partner from './sanity/schemas/partner'
import homePage from './sanity/schemas/homePage'
import contactPage from './sanity/schemas/contactPage'
import joinUsPage from './sanity/schemas/joinUsPage'

export default defineConfig({
  name: 'airlab-website',
  title: 'AIR Lab Website',
  projectId: 'x0ftpq7o',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [newsArticle, teamMember, partner, homePage, contactPage, joinUsPage],
  },
})
