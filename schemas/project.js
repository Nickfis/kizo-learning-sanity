export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'videoLink',
      type: 'string',
      title: 'Video link',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'sourceCode',
      type: 'string',
      title: 'Source Code Link',
    },
    {
      name: 'releaseDate',
      type: 'date',
      title: 'Release Date',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'thumbnail',
      type: 'image',
      title: 'Course Thumbnail',
      validation: (Rule) => Rule.required(),
    },
  ],
}
