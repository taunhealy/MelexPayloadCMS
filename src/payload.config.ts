import { buildConfig } from 'payload/config';
import path from 'path';
import BlogCategories from './collections/BlogCategories';
import PortfolioCategories from './collections/PortfolioCategories';
import Posts from './collections/Posts';
import Tags from './collections/Tags';
import Media from './collections/Media';
import Items from './collections/Items';
import { Footer } from './globals/Footer';
import { MainMenu } from './globals/MainMenu';
import { Pages } from './collections/Pages';
import Study from './collections/Study';
import Category from './collections/Category';

export default buildConfig({
  serverURL: 'http://localhost:4000',
  collections: [
        BlogCategories,
        PortfolioCategories,
        Posts,
        Tags,
        Media,
        Items,
        Pages,
        Study,
        Category,
     ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  globals: [Footer, MainMenu],
});
