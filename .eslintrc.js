module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ["import"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
	"import/resolver": {
      "typescript": {
        "alwaysTryTypes": true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`

        // Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default

        // use <root>/path/to/folder/tsconfig.json
        "project": "./",
  },
  }},
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint',
    allowImportExportEverywhere: false,
    ecmaVersion: 2020,
  },
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
	"plugin:import/typescript",
  ],
  rules: {
    'semi': ['error', 'never'],
    'indent': ['error', 2],
    'array-bracket-newline': ['off', 'consistent'],
    'array-element-newline': ['off', {
      multiline: true,
      minItems: 3, 
    }],
	"import/no-unresolved": [2, {commonjs: true, amd: true, caseSensitive: false}],
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'eol-last': ['error', 'always'],
    'function-call-argument-newline': ['off', 'consistent'],
    'func-call-spacing': ['error', 'never'],
    'newline-before-return': 'error',
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': ['error'],
    'no-multiple-empty-lines': ['error', {
      max: 2,
      maxBOF: 0,
      maxEOF: 0, 
    }],
    'no-spaced-func': 'error',
    'object-curly-spacing': ['error', 'always'],
    'object-curly-newline': ['error', {
      ObjectExpression: {
        minProperties: 4,
        multiline: true,
        consistent: true,
      },
      ObjectPattern: {
        minProperties: 4,
        multiline: true,
        consistent: true,
      },
      ImportDeclaration: {
        minProperties: 2,
        multiline: true,
        consistent: true,
      },
      ExportDeclaration: {
        minProperties: 2,
        multiline: true,
        consistent: true,
      },
    }],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],
    'object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: false,
    }],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'template-tag-spacing': ['error', 'always'],
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: "none",
        requireLast: true,
      },
      singleline: {
        delimiter: "comma",
        requireLast: false,
      },
    }],
    '@typescript-eslint/no-explicit-any': 0,
  }