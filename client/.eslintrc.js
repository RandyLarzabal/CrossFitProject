module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["react", "@typescript-eslint", "prettier", "jest"],
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "plugin:jest/recommended",
    ],
    rules: {
        "no-console": 1,
        "prettier/prettier": 2,
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error",
    },
    settings: {
        react: {
            pragma: "React",
            version: "detect",
        },
        "import/extensions": [".js", ".jsx", ".ts", ".tsx", ".mjs", ".json", ".ttf"],
    },
    env: {
        "jest/globals": true,
    },
};
