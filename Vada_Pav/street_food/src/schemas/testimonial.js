export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Testimonial Text',
      type: 'text',
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: Rule => Rule.min(1).max(5),
    },
    {
      name: 'image',
      title: 'Author Image',
      type: 'image',
      options: { hotspot: true },
    },
  ],
};
