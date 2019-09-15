# Hugo theme

## Installation

In your Hugo project root,

```shell
$ git clone git@github.com:nukosuke/hugo-framework.git theme/framework
```

## Setup

- `config.toml`
  ```toml
  [module]

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

## Stack

- [Bulma](https://bulma.io/)
- [Turbolinks](https://github.com/turbolinks/turbolinks)
- [Stimulus](https://stimulusjs.org/)
- [Webpack](https://webpack.js.org/)
- [TypeScript](https://www.typescriptlang.org/)

## License

MIT License

See the file [LICENSE](./LICENSE).
