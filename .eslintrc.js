module.exports = {
    'parser': '@typescript-eslint/parser',
    'env': {
        'es6': true,
        'node': true
    },
    'plugins': [
        '@typescript-eslint'
    ],
    'extends': [
        'standart',
        'plugin:@typescript-eslint/recommended'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharredArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'rules': {

    }
}
