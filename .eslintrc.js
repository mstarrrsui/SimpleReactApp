module.exports = {
  plugins: [],
  extends: [
    "react-app",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true
    },
    project: "./tsconfig.json"
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "linebreak-style": 0,
    "lines-between-class-members": "off",
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
};
