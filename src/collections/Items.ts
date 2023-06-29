import { CollectionConfig } from 'payload/types';

const Items: CollectionConfig = {
  slug: 'items',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'category',
      type: "relationship",
      relationTo: "portfolioCategories",
    },
    {
    name: 'thumbnail',
    type: 'upload',
    relationTo: 'media',
    filterOptions: {
    mimeType: { contains: 'image' },
    }
    },
  ],
  timestamps: false,
}

export default Items;