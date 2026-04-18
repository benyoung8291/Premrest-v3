import { defineType, defineField } from 'sanity';

export const contentType = defineType({
  name: 'contentType',
  title: 'Content Type',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'sortOrder', type: 'number' }),
  ],
});
