# Hugo theme

## Installation

In your Hugo project root,

```shell
$ git clone https://github.com/nukosuke/hugo-framework.git theme/framework
```

## Setup

- `config.toml`
  ```toml
  theme = "framework"
  
  [module]
    [[module.mounts]]
      source = "assets/stylesheets"
      target = "assets/stylesheets"
    [[module.mounts]]
      source = "node_modules/bulma"
      target = "assets/stylesheets/bulma"
  ```
- `package.json`
  ```json
  {
    "workspaces": ["themes/framework"],
    "scripts": {
      "build": "yarn workspace hugo-framework run build"
    }
  }
  ```

And then install dependencies.

```shell
$ yarn
```

## Build

```shell
$ yarn run build
$ hugo
```

At writing, `hugo serve` is broken by Turbolinks. The workaround is to add `--disableLiveReload`.

## Stack

- [Bulma](https://bulma.io/)
- [Turbolinks](https://github.com/turbolinks/turbolinks)
- [Stimulus](https://stimulusjs.org/)
- [Webpack](https://webpack.js.org/)
- [TypeScript](https://www.typescriptlang.org/)

## License

MIT License

See the file [LICENSE](./LICENSE).
