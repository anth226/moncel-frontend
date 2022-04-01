module.exports = {
  extends: ["next", "prettier", "eslint:recommended"],
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"],
    },
  },
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "react/react-in-jsx-scope": "off"
  },
  globals: {
    JSX: true
  }
};
