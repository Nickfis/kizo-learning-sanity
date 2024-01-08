export default {
  name: 'email',
  type: 'document',
  title: 'Email Newsletter',
  fields: [
    {
      name: 'email',
      type: 'email',
      title: 'Email',
      validation: (Rule) =>
        Rule.required()
          .regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, {
            name: 'email',
            invert: false, // match everything that does not match the regex
          })
          .error('Please enter a valid email address'),
    },
  ],
}
