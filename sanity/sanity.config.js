import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {visualOptions} from 'sanity-plugin-visual-options'
import {iconPicker} from 'sanity-plugin-icon-picker'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Second Life',

  projectId: 'lqwr3lgt',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), iconPicker(), visualOptions()],

  schema: {
    types: schemaTypes,
  },
})
