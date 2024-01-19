const HighlightIcon = () => (
  <span
    style={{
      fontSize: '10px',
      fontWeight: 'bold',
      marginBottom: '.1em',
      color: 'blue',
    }}
  >
    Blue
  </span>
)

const HighlightDecorator = (props) => (
  // eslint-disable-next-line react/prop-types
  <span style={{color: 'blue'}}>{props.children}</span>
)

export default {
  title: 'Paragraph Rich Text with Extras',
  name: 'paragraphRichTextExtra',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'Sub-heading', value: 'h4'},
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {
            title: 'Blue',
            value: 'blue',
            icon: HighlightIcon,
            component: HighlightDecorator,
          },
        ],
        // annotations: [...linkAnnotations],
      },
      // lists: customLists,
    },
    // {type: 'cta', title: 'CTA'},
    // {type: 'pdfBlock', title: 'PDF'},
    // {type: 'quote'},
    // {type: 'inlineIcon'},
  ],
  // validation: blockValidator,
}
