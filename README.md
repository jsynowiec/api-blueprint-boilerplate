[![Dev dependencies][dependencies-badge]][dependencies]

[![Node.js version][nodejs-badge]][nodejs]
[![NPM version][npm-badge]][npm]
[![Ruby version][ruby-badge]][ruby]
[![Bundler version][bundler-badge]][bundler]

[![MIT License][license-badge]][LICENSE]
[![Roadmap][roadmap-badge]][roadmap]
[![PRs Welcome][prs-badge]][prs]
[![Donate][donate-badge]][donate]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

# api-blueprint-boilerplate

Minimalistic boilerplate to quick-start API specification using [API Blueprint][api-blueprint] description language.

Provides a basic template for REST API documentation that contains some best practices for a pragmatic RESTful API and a set of tools to validate API Blueprint schema or export specification to HTML files.

Sample project is available in Apary: http://docs.apiblueprintboilerplate.apiary.io/

## Quick start

This project requires [Node.js][nodejs] 6.2+, [NPM][npm], [Ruby][ruby] and [Bundler][bundler]. So just make sure you have those installed. Then just type following commands:

```
git clone https://github.com/jsynowiec/api-blueprint-boilerplate
cd api-blueprint-boilerplate
npm install
bundle install
npm start
```

You now have a local preview server available at [http://localhost:8080](http://localhost:8080) that is validating and rendering your blueprint using [Apiary CLI][apiaryio-cli].

## Testing against specification

To test the blueprint run `npm test` command. This will validate the schema using Drafter.js library.

## Export HTML files

To compile the blueprint run `npm run build`. Files will be written to the `build` directory.

## Publishing to Apiary

To publish your blueprint to [Apiary.io][apiaryio] you have to set two environment variables:

```
export APIARY_API_KEY="<token>"
export APIARY_API_NAME="<apiary project name>"
```

After that, you can run `npm run publish` command to upload your blueprint to Apiary project. You can also provide those two values before the command

```
APIARY_API_KEY="<token>" APIARY_API_NAME="<apiary project name>" npm run publish
```

## Resources

* [API Blueprint][api-blueprint],
* [API Blueprint Specification][api-blueprint-specification],
* [MSON Specification][mson-specification],
* [VS Code API Elements extension][vscode-apielements],
* [Apiary.io][apiaryio],
* [Drafter.js][drafterjs],

## License
MIT License. See the [LICENSE](https://github.com/jsynowiec/api-blueprint-boilerplate/blob/master/LICENSE)
file.

[dependencies-badge]: https://david-dm.org/jsynowiec/api-blueprint-boilerplate/dev-status.svg?style=flat-square
[dependencies]: https://david-dm.org/jsynowiec/api-blueprint-boilerplate?type=dev
[nodejs-badge]: https://img.shields.io/badge/node->=%206.2.x-blue.svg?style=flat-square
[nodejs]: https://nodejs.org/dist/latest-v6.x/docs/api/
[npm-badge]: https://img.shields.io/badge/npm->=%203.x-blue.svg?style=flat-square
[npm]: https://docs.npmjs.com/
[ruby-badge]: https://img.shields.io/badge/ruby->=%202.x-blue.svg?style=flat-square
[ruby]: http://ruby-doc.org/
[bundler-badge]: https://img.shields.io/badge/bundler-latest-blue.svg?style=flat-square
[bundler]: http://bundler.io/docs.html
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license]: https://github.com/jsynowiec/api-blueprint-boilerplate/blob/master/LICENSE
[roadmap-badge]: https://img.shields.io/badge/%F0%9F%93%94-roadmap-CD9523.svg?style=flat-square
[roadmap]: https://github.com/jsynowiec/api-blueprint-boilerplate/wiki/Roadmap
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[donate-badge]: https://img.shields.io/badge/$-support-green.svg?style=flat-square
[donate]: http://bit.ly/donate-js
[github-watch-badge]: https://img.shields.io/github/watchers/jsynowiec/api-blueprint-boilerplate.svg?style=social
[github-watch]: https://github.com/jsynowiec/api-blueprint-boilerplate/watchers
[github-star-badge]: https://img.shields.io/github/stars/jsynowiec/api-blueprint-boilerplate.svg?style=social
[github-star]: https://github.com/jsynowiec/api-blueprint-boilerplate/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20the%20%40apiblueprint%20boilerplate!%20https://github.com/jsynowiec/api-blueprint-boilerplate%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/jsynowiec/api-blueprint-boilerplate.svg?style=social
[api-blueprint]: https://apiblueprint.org/
[api-blueprint-specification]: https://github.com/apiaryio/api-blueprint/blob/master/API%20Blueprint%20Specification.md
[apiaryio]: http://apiary.io
[apiaryio-cli]: https://help.apiary.io/tools/apiary-cli/
[drafterjs]: https://github.com/apiaryio/drafter.js
[mson-specification]: https://github.com/apiaryio/mson/blob/master/MSON%20Specification.md
[vscode-apielements]: [https://github.com/XVincentX/vscode-apielements]
