import {FiType} from 'react-icons/fi'

export default {
  title: 'Two Column Copy',
  type: 'object',
  name: 'twoColumnCopy',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    {
      title: 'Copy',
      name: 'copy',
      type: 'paragraphRichTextExtra',
    },
    // {
    //   title: 'Has Background?',
    //   description: 'Set to true to display this slice as the variant with a grey background.',
    //   name: 'hasBackground',
    //   type: 'boolean',
    //   initialValue: false,
    // },
  ],
  preview: {
    select: {
      subtitle: 'copy.0.children.0.text',
    },
    prepare({text, subtitle}) {
      return {
        title: `Two Column Copy`,
        subtitle: subtitle,
        media: FiType,
      }
    },
  },
}
