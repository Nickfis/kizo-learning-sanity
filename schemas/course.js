export default {
  name: 'course',
  type: 'document',
  title: 'Course Voucher',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'code',
      type: 'string',
      title: 'Voucher Code',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'link',
      type: 'string',
      title: 'Course link',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'thumbnail',
      type: 'image',
      title: 'Course Thumbnail',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'discountedPrice',
      type: 'number',
      title: 'Discounted Price',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'originalPrice',
      type: 'number',
      title: 'Original Price',
      validation: (Rule) => Rule.required(),
    },
  ],
}
