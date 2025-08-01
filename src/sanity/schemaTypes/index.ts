import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import category from './category'
import siteSettings from './siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, siteSettings],
}
