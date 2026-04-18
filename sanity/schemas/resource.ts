import { defineType, defineField } from 'sanity';

export const resource = defineType({
  name: 'resource',
  title: 'Resource',
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
    defineField({ name: 'summary', type: 'text', rows: 3 }),
    defineField({
      name: 'content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } },
      ],
    }),
    defineField({ name: 'video', type: 'url' }),
    defineField({ name: 'category', type: 'reference', to: [{ type: 'category' }] }),
    defineField({ name: 'contentType', type: 'reference', to: [{ type: 'contentType' }] }),
    defineField({ name: 'author', type: 'reference', to: [{ type: 'person' }] }),
    defineField({
      name: 'industries',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'industry' }] }],
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tag' }] }],
    }),
    defineField({ name: 'fileUpload', type: 'file' }),
    defineField({ name: 'fileCoverImage', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'publishedAt', type: 'datetime' }),
  ],
  preview: {
    select: { title: 'name', media: 'featuredImage', subtitle: 'contentType.name' },
  },
});
