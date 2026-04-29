import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({ name: 'heroSubtitle', title: 'Hero — Sous-titre', type: 'text', rows: 2 }),
    defineField({ name: 'address', title: 'Adresse complète', type: 'text', rows: 4 }),
    defineField({ name: 'apiUrl', title: 'URL — Documentation API publique', type: 'url' }),
    defineField({ name: 'rcpUrl', title: 'URL — Plateforme RCP', type: 'url' }),
  ],
  preview: { prepare: () => ({ title: 'Contact Page' }) },
})
