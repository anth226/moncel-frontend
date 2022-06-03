This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, make sure your [environment variables](https://nextjs.org/docs/basic-features/environment-variables) are set up. If you believe you have set up environment variables, you are not seeing "required environment variables are missing" errors, but your environment variables seem to be incorrect (ie. retrieving data from APIs still fails), double check the quote characters in your files.

At the moment this app uses Storyblok as a CMS. So you need at minimum to set `STORYBLOK_TOKEN` and `STORYBLOK_SITE_NAME` in a file called `.env.local`. If you still run into errors related to environment variables, see the environment variables set for the site on Netlify, as those will be the source of truth for production.

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

