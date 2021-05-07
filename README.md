# Tao release docker action

This action used to automatically release tao extension

## Inputs

### `github_token`

## Outputs

### `release_result`
release result message: success|skip|failure

## Example usage
```
name: Relese Tao extension
on:
  pull_request:
    branches:
      - develop
    types: [closed]
jobs:
  auto-release:
    if: github.event.pull_request.merged == true
    name: Automated Tao extension release
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Release
        uses: oat-sa/extension-release-action@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GH_TOKEN }}
        with:
          github_token: ${{ secrets.GH_TOKEN }}
```

