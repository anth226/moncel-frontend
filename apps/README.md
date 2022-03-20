This directory contains apps for each site. 

The apps need the following environment variables to populate data from the CDN:
- `STORYBLOK_TOKEN`: the API token for your storyblok space
- `STORYBLOK_SITE_NAME`: the name of the folder in storyblok within which this site's stories reside

These can be set per app by placing a `.env.local` file in the root directory of each project.

Once this is done, the project can be built, but for the first time you will want to build from the root directory of the monorepo to ensure any dependencies are built in the correct order.
