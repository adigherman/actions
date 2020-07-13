const core = require('@actions/core');

try {
  // `slug` input defined in action metadata file
  const slug = core.getInput('github_slug');
  console.log(`Slug is  ${slug}!`);
  const slug_array = slug.split("/")
  core.setOutput("repo_name", slug_array[1]);

} catch (error) {
  core.setFailed(error.message);
}
