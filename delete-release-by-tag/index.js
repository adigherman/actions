const { Octokit } = require("@octokit/rest");
const core = require('@actions/core');
const {env} = require ("process");
const token = env.INPUT_GITHUB_TOKEN;
const repository = env.INPUT_REPOSITORY || env.GITHUB_REPOSITORY;
const tag = core.getInput('tag');
const [owner, repo] = repository.split("/");

const octokit = new Octokit({
    auth: token
});


octokit.repos.getReleaseByTag({
    owner,
    repo,
    tag
}).then(res => {
    if(!res.data){
        console.error("No release found for tag, skip delete.");
        return;
    }
    const release_id = res.data.id;
    octokit.repos.deleteRelease({
        owner,
        repo,
        release_id
    });
}).catch(
    err =>{
        if(err.status === 404){
            console.error("No release found, skip delete.");
            return; 
        }
        console.error("Can't get tag based Release");
        console.error(err);
    }
);
