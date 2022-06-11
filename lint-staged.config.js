module.exports = {
  './src/**/*.{js,jsx,ts,tsx}': () => ['yarn lint'],
  '*.+(js|jsx|ts|tsx|json|css|md|mdx)': ['yarn format'],
};
