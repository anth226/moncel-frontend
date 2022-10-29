import { defineConfig } from "cypress";
import {addMatchImageSnapshotPlugin} from 'cypress-image-snapshot/plugin';

export default defineConfig({
  e2e: {
    baseUrl: process.env.SITE_URL || 'http://localhost:3000',
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, config);
    },
  },
});
