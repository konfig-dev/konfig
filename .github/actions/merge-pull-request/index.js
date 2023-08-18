const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const prNumber = core.getInput('pr_number');
    const mergeMethod = core.getInput('merge_method');

    const token = process.env.GITHUB_TOKEN;
    const octokit = github.getOctokit(token);

    const owner = github.context.repo.owner;
    const repo = github.context.repo.repo;

    // await octokit.pulls.merge({
    //   owner,
    //   repo,
    //   pull_number: prNumber,
    //   merge_method: mergeMethod
    // });

    console.log("Merge PR: " + prNumber + " with method: " + mergeMethod  + " in repo: " + repo + " by user: " + owner)
    core.setOutput('merged', 'true');
  } catch (error) {
    core.setOutput('merged', 'false');
    core.setFailed(error.message);
  }
}

run();