const core = require('@actions/core@v1.10.0');

try {
  // `github_slug` input defined in action metadata file
  const slug = core.getInput('github_slug');
  console.log(`repo slug is:  ${slug}`);
  const slug_array = slug.split("/")
  core.setOutput("repo_name", slug_array[1]);

} catch (error) {
  core.setFailed(error.message);
}
