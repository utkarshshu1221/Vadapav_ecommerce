export default {
  name: 'instagramPost',
  title: 'Instagram Post',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
    },
    {
      name: 'url',
      title: 'Instagram URL',
      type: 'url',
    },
    {
      name: 'postedAt',
      title: 'Posted At',
      type: 'datetime',
    },
  ],
};
