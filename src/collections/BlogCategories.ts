import { CollectionConfig } from 'payload/types';

const BlogCategories: CollectionConfig = {
  slug: 'blogCategories',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  labels: {
    singular: 'Blog Category',
    plural: 'Blog Categories'
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
  
  timestamps: false,
};

export default BlogCategories;
