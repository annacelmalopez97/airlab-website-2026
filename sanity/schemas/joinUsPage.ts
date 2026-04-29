import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'joinUsPage',
  title: 'Join Us Page',
  type: 'document',
  fields: [
    defineField({ name: 'heroSubtitle', title: 'Hero — Sous-titre', type: 'text', rows: 2 }),
    defineField({ name: 'missionPara1', title: 'Mission — Paragraphe 1', type: 'text', rows: 3 }),
    defineField({ name: 'missionPara2', title: 'Mission — Paragraphe 2', type: 'text', rows: 3 }),
    defineField({
      name: 'stats',
      title: 'Chiffres clés',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'label', title: 'Chiffre (ex: 56+)', type: 'string' }),
          defineField({ name: 'desc', title: 'Description', type: 'string' }),
        ],
        preview: { select: { title: 'label', subtitle: 'desc' } },
      }],
    }),
    defineField({ name: 'careersDescription', title: 'Postes ouverts — Description', type: 'text', rows: 3 }),
    defineField({ name: 'careersUrl', title: 'Postes ouverts — URL portail carrières', type: 'url' }),
    defineField({ name: 'address', title: 'Adresse du bureau', type: 'text', rows: 3 }),
  ],
  preview: { prepare: () => ({ title: 'Join Us Page' }) },
})
