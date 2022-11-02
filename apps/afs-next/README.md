# AFS Nextjs Site

This site was built with NextJS and turborepo. If you have cloned the monorepo, simply `yarn` and `yarn dev` to run a dev server.

### Regarding scroll behaviour

1. For internal pages the link need not open in new tab, if it’s simply navigating from one page to another.
2. However course checkout pages must always open in new tabs.
3. Any files to be downloaded or previewed must also open in new tab
4. For 'same page' links (anchor tags) we need to use javascript to smooth-scroll (for now we assume this applies to link on the checkout sidebar)
