import { type SchemaTypeDefinition } from 'sanity'
import blog from './blogs'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog],
}
