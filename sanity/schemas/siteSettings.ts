import { defineType, defineField } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'siteTitle', type: 'string' }),
    defineField({ name: 'contactEmail', type: 'string' }),
    defineField({ name: 'contactPhone', type: 'string' }),
    defineField({
      name: 'socials',
      type: 'object',
      fields: [
        defineField({ name: 'linkedin', type: 'url' }),
        defineField({ name: 'instagram', type: 'url' }),
        defineField({ name: 'youtube', type: 'url' }),
      ],
    }),
  ],
});
