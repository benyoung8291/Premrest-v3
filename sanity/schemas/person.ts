import { defineType, defineField } from 'sanity';

export const person = defineType({
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'photo', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'bio',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({ name: 'department', type: 'string' }),
    defineField({ name: 'sortOrder', type: 'number' }),
    defineField({ name: 'phone', type: 'string' }),
    defineField({ name: 'email', type: 'string' }),
    defineField({ name: 'linkedin', type: 'url' }),
    defineField({ name: 'displayContactInfo', type: 'boolean', initialValue: true }),
    defineField({ name: 'displayResources', type: 'boolean', initialValue: true }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'title', media: 'photo' },
  },
});
