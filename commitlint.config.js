export default {
  extends: ["@commitlint/config-conventional"],
  ignores: [
    (message) =>
      /^Merge (pull request|branch|remote-tracking branch) /.test(message),
  ],
};
