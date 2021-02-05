import sanityClient from '@sanity/client';
import sanityImage from '@sanity/image-url';

const options = {
  // Find your project ID and dataset in `sanity.json` in your studio project
  dataset: 'production',
  // NEXT_PUBLIC_ prefix necessary to let nextJS expose the project_id to the browser to build sanity image urls
  projectId: 'xw7asbwj',
  useCdn: process.env.NODE_ENV === 'production',
  // useCdn == true gives fast, cheap responses using a globally distributed cache.
  // Set this to false if your application require the freshest possible
  // data always (potentially slightly slower and a bit more expensive).
};

export const client = sanityClient(options);
export const imageBuilder = sanityImage(client);
