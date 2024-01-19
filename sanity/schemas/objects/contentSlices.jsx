export const contentSliceTypes = [
  // {type: 'content', title: 'Content'},
  {type: 'twoColumnCopy', title: 'Two Column Copy'},
  // {type: 'textbox', title: 'Textbox'},
].sort((a, b) => a.title.localeCompare(b.title))

export default {
  name: 'contentSlices',
  title: 'Content Slices',
  type: 'array',
  of: contentSliceTypes,
}
