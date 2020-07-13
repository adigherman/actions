# Retrieve repository name from the GitHub slug

This action retrieved the repo name from the GitHub slug and sets up the `repo_name` environment variable. This is needed because the GitHub Actions default environment variables does not have a dedicated variable to hold the repository name and something was needed to properly extract this for windows/ubuntu/macOS. 

## Inputs

### `github_slug`

**Required** The repo slug (eg. `adigherman/Rxnat`). 

## Outputs

### `repo_name`

The repository name.

## Example usage
```yaml
- uses: actions/checkout@master
- name: Get repo name
  uses: adigherman/actions/get-repo-name@v1
  id: get-name
  with:
    github_repository: ${{ github.repository }}
- name: Echo repo name
  run: echo "Repo name is ${{ steps.get-name.outputs.repo_name }}"
```