// eslint-disable-next-line no-undef
module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'no-else-return': 'error',
        'no-multi-spaces': 'error',
        'no-whitespace-before-property': 'error',
        'react/prop-types': 'off',
        'camelcase': 'error',
        'no-console': 'error',
        'comma-dangle': 'error',
        'no-var': 'error',
        'indent': ['error', 4],
        'quotes': [
            'error',
            'single'
        ]
    }
};
