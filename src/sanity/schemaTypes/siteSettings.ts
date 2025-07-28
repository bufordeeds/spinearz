import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'businessName',
      title: 'Business Name',
      type: 'string',
      initialValue: 'SpinEarz'
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      initialValue: 'Hook the Look'
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      validation: Rule => Rule.email()
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string'
    }),
    defineField({
      name: 'aboutText',
      title: 'About Us Text',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' }
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' }
            ]
          }
        }
      ]
    }),
    defineField({
      name: 'careInstructions',
      title: 'Care Instructions',
      type: 'text',
      rows: 5,
      description: 'How to care for the earrings'
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        defineField({
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url'
        }),
        defineField({
          name: 'facebook',
          title: 'Facebook URL',
          type: 'url'
        }),
        defineField({
          name: 'etsy',
          title: 'Etsy Shop URL',
          type: 'url'
        })
      ]
    })
  ],
  preview: {
    select: {
      title: 'businessName'
    }
  }
})