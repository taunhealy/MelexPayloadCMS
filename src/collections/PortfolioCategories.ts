import { CollectionConfig } from 'payload/types';

const PortfolioCategories: CollectionConfig = {
  slug: 'portfolioCategories',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      label: 'Portfolio Categories',
      type: 'text',
    },
  ],
  timestamps: false,
}

export default PortfolioCategories;