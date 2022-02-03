module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest/globals": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "eslint:recommended",
        "plugin:prettier/recommended"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "modules": true
        },
        "ecmaVersion": 6,
        "sourceType": "module",
        "allowImportExportEverywhere": true
    },
    "plugins": [
        "react",
        "jest"
    ],
    "rules": {
    }
}
