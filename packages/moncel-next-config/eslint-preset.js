module.exports = {
  extends: ["next", "prettier", "eslint:recommended", "plugin:@typescript-eslint/eslint-recommended", "plugin:@typescript-eslint/recommended", "next/core-web-vitals"],
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"],
    },
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "react/react-in-jsx-scope": "off"
  },
  globals: {
    JSX: true
  }
};
