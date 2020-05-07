## Setup Dev Environment
- Fork `geek-source` to your personal GitHub and clone locally
- Setup either Angular or React
- Setup Prettier, include appropriate lint rules
- Add additional lint rulesets for Angular/React/JSX/Styled Components
- Extend lint rules with additional rules included below
- Install recommended and/or helpful VS Code plugins
    - VS Code will prompt you to install the plugins we recommend, which can be found in the `.vscode` folder in `extensions.json`

If using React
- Use Create React App, do not eject
- Setup ESLint, extend using React ESLint Configuration from below
- Setup Styled Components
- Setup React Router
- Setup Jest and React Testing Library

---

**Additional ESLint Rules for Angular & React**
<details>
<summaryClick to expand</summary>
<p>

```json
"rules": {
    "prettier/prettier": "error",
    "object-shorthand": [
    "error",
    "always"
    ],
    "prefer-const": [
    "error",
    {
        "destructuring": "any",
        "ignoreReadBeforeAssign": false
    }
    ],
    "prefer-destructuring": [
    "error",
    {
        "array": true,
        "object": true
    },
    {
        "enforceForRenamedProperties": false
    }
    ],
    "no-use-before-define": [
    "error",
    {
        "functions": true,
        "classes": true
    }
    ],
    "no-undefined": "error",
    "no-undef-init": "error",
    "dot-notation": "error",
    "no-else-return": [
    "error",
    {
        "allowElseIf": false
    }
    ],
    "eqeqeq": [
    "error",
    "smart"
    ],
    "no-implicit-coercion": "error",
    "no-multi-spaces": "error",
    "no-return-assign": "error",
    "no-return-await": "error",
    "require-await": "error",
    "no-nested-ternary": "error",
    "block-scoped-var": "error",
    "no-duplicate-imports": "error",
    "no-var": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "padding-line-between-statements": [
    "error",
    {
        "blankLine": "always",
        "prev": "*",
        "next": "return"
    },
    {
        "blankLine": "always",
        "prev": "*",
        "next": "switch"
    },
    {
        "blankLine": "always",
        "prev": "*",
        "next": "if"
    },
    {
        "blankLine": "always",
        "prev": "*",
        "next": "export"
    },
    {
        "blankLine": "any",
        "prev": "export",
        "next": "export"
    },
    {
        "blankLine": "always",
        "prev": "*",
        "next": "try"
    },
    {
        "blankLine": "always",
        "prev": "*",
        "next": "while"
    },
    {
        "blankLine": "always",
        "prev": "import",
        "next": "*"
    },
    {
        "blankLine": "never",
        "prev": "import",
        "next": "import"
    },
    {
        "blankLine": "always",
        "prev": [
        "const",
        "let",
        "var"
        ],
        "next": "*"
    },
    {
        "blankLine": "any",
        "prev": [
        "const",
        "let",
        "var"
        ],
        "next": [
        "const",
        "let",
        "var"
        ]
    }
    ],
    "max-statements-per-line": [
    "error",
    {
        "max": 1
    }
    ],
    "max-params": [
    "error",
    3
    ],
    "max-depth": [
    "error",
    3
    ],
    "no-magic-numbers": [
    "error",
    {
        "enforceConst": true
    }
    ],
    "no-alert": "error",
    "max-classes-per-file": [
    "error",
    1
    ],
    "curly": "error",
    "no-console": "warn",
    "multiline-comment-style": [
    "error",
    "starred-block"
    ],
    "react/destructuring-assignment": [
    2
    ],
    "react/jsx-handler-names": [
    1
    ],
    "react/no-direct-mutation-state": [
    1
    ],
    "react/no-this-in-sfc": [
    1
    ],
    "react/no-unused-prop-types": [
    1
    ],
    "react/no-unused-state": [
    1
    ],
    "react/jsx-pascal-case": [
    1
    ],
    "react-hooks/exhaustive-deps": [
    0
    ]
}
```

</p>
</details>

---

**ESLint Configuration for React**
Include rules from above, as well.

<details>
<summary>Click to expand</summary>
<p>

```json
"extends": [
    "react-app",
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/react",
    "plugin:jsx-a11y/recommended",
    "plugin:mdx/recommended"
],
```

</p>
</details>
