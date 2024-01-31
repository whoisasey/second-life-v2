module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["standard-with-typescript", "plugin:react/recommended"],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {
		"@typescript-eslint/quotes": 1,
		"@typescript-eslint/semi": "warn",
		"@typescript-eslint/explicit-function-return-type": "off",
		"no-tabs": "warn",
		"react/react-in-jsx-scope": "off",
	},
};
