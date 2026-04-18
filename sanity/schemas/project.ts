import { defineType, defineField } from 'sanity';

export const project = defineType({
  name: 'project',
  title: 'Project (Case Study)',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'featuredImage', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'projectManagers',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
    }),
    defineField({ name: 'summary', type: 'text', rows: 3 }),
    defineField({
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'photos',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
  ],
  preview: {
    select: { title: 'name', media: 'featuredImage' },
  },
});
