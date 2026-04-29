import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({ name: 'heroSubtitle', title: 'Hero — Subtitle', type: 'text', rows: 3 }),
    defineField({ name: 'heroVideoUrl', title: 'Hero — Video URL', type: 'url' }),
    defineField({ name: 'heroPrimaryButtonText', title: 'Hero — Bouton principal (texte)', type: 'string' }),
    defineField({ name: 'heroPrimaryButtonUrl', title: 'Hero — Bouton principal (URL)', type: 'url' }),
    defineField({
      name: 'stats',
      title: 'Stats (bande chiffres clés)',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'number', title: 'Chiffre (ex: 2019, 10, 100)', type: 'string' }),
          defineField({ name: 'suffix', title: 'Suffixe (ex: –, +, %)', type: 'string' }),
          defineField({ name: 'label', title: 'Description', type: 'text', rows: 2 }),
        ],
        preview: { select: { title: 'number', subtitle: 'label' } },
      }],
    }),
    defineField({ name: 'ctaTitle', title: 'CTA — Titre', type: 'string' }),
    defineField({ name: 'ctaSubtitle', title: 'CTA — Sous-titre', type: 'text', rows: 2 }),
    defineField({ name: 'ctaLocation', title: 'CTA — Adresse', type: 'text', rows: 2 }),
    defineField({ name: 'ctaPlatformUrl', title: 'CTA — URL plateforme RCP', type: 'url' }),
    defineField({ name: 'ctaApiUrl', title: 'CTA — URL API publique', type: 'url' }),
  ],
  preview: { prepare: () => ({ title: 'Home Page' }) },
})
