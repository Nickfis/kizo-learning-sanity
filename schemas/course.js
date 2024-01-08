export default {
  name: 'course',
  type: 'document',
  title: 'Course Voucher',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'code',
      type: 'string',
      title: 'Voucher Code',
    },
    {
      name: 'link',
      type: 'string',
      title: 'Course link',
    },
    {name: 'thumbnail', type: 'image', title: 'Course Thumbnail'},
    {name: 'discountedPrice', type: 'number', title: 'Discounted Price'},
    {name: 'originalPrice', type: 'number', title: 'Original Price'},
  ],
}
