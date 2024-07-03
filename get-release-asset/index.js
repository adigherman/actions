const core = require('@actions/core@v1.10.0');

try {
  // `github_slug` input defined in action metadata file
  const repo_name = core.getInput('repo_name');
  const repo_version = core.getInput('repo_version');
  const runner_os = core.getInput('runner_os');
  const R_version = core.getInput('R_version');
  
  console.log(`Package:  ${repo_name}`);
  console.log(`Version:  ${repo_version}`);
  console.log(`OS:  ${runner_os}`);
  
  let asset_name = repo_name+'_'+repo_version;
  let asset_path = 'check/'+repo_name+'_'+repo_version;
  
  switch(runner_os){
    case 'macOS':
      asset_name += '_R' + R_version + '.tgz';
      core.setOutput("asset_name", asset_name);
      asset_path += '.tgz';
      core.setOutput("asset_path", asset_path);
      break;
    case 'Windows':
      asset_name += '_R' + R_version + '.zip';
      core.setOutput("asset_name", asset_name);
      asset_path += '.zip';
      core.setOutput("asset_path", asset_path);
      break;
    default:
      asset_name += '_R_x86_64-pc-linux-gnu_R' + R_version + '.tar.gz';
      core.setOutput("asset_name", asset_name);
      asset_path += '_R_x86_64-pc-linux-gnu.tar.gz';
      core.setOutput("asset_path", asset_path);
  }
} catch (error) {
  core.setFailed(error.message);
}
