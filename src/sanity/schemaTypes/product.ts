import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'price',
      title: 'Price (USD)',
      type: 'number',
      validation: Rule => Rule.required().positive()
    }),
    defineField({
      name: 'originalLure',
      title: 'Original Lure Name',
      type: 'string',
      description: 'Name of the original fishing lure used'
    }),
    defineField({
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              description: 'Important for SEO and accessibility'
            }
          ]
        }
      ],
      validation: Rule => Rule.required().min(1)
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'available',
      title: 'Available',
      type: 'boolean',
      initialValue: true,
      description: 'Is this product currently available?'
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
      description: 'Show this product on the homepage?'
    }),
    defineField({
      name: 'colors',
      title: 'Available Colors',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'weight',
      title: 'Weight Category',
      type: 'string',
      options: {
        list: [
          { title: 'Lightweight', value: 'lightweight' },
          { title: 'Medium', value: 'medium' },
          { title: 'Statement', value: 'statement' }
        ],
        layout: 'radio'
      }
    })
  ],
  preview: {
    select: {
      title: 'name',
      media: 'images.0',
      subtitle: 'price'
    },
    prepare(selection) {
      const { title, media, subtitle } = selection
      return {
        title,
        media,
        subtitle: subtitle ? `$${subtitle}` : 'No price set'
      }
    }
  }
})