const micromatch = require("micromatch");

module.exports = {
  "*.tsx": files => {
    // from `files` filter those _NOT_ matching `*test.ts`
    const match = micromatch.not(files, "*test.tsx");
    return `eslint ${match.join(" ")}`;
  }
};
