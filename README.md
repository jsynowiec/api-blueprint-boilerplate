[![devDependency Status](https://david-dm.org/jsynowiec/api-blueprint-boilerplate/dev-status.svg)](https://david-dm.org/jsynowiec/api-blueprint-boilerplate?type=dev)

[![Required Node.js](https://img.shields.io/badge/node->=%206.2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![Required Node.js](https://img.shields.io/badge/npm->=%203.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![Required Ruby](https://img.shields.io/badge/ruby->=%202.x-blue.svg)](http://ruby-doc.org/)
[![Required Bundler](https://img.shields.io/badge/bundler-latest-blue.svg)](http://bundler.io/docs.html)

# api-blueprint-boilerplate

Minimalistic boilerplate to quick-start API specification using [API Blueprint](https://apiblueprint.org/) description language.

Provides a basic template for REST API documentation that contains some best practices for a pragmatic RESTful API and a set of tools to validate API Blueprint schema or export specification to HTML files.

## Quick start

This project requires [Node.js](https://nodejs.org/) 6.2+, [NPM](https://www.npmjs.com/), [Ruby](https://www.ruby-lang.org) and [Bundler](http://bundler.io/). So just make sure you have those installed. Then just type following commands:

```
git clone https://github.com/jsynowiec/api-blueprint-boilerplate
cd api-blueprint-boilerplate
npm install
bundle install
npm start
```

You now have a local preview server available at [http://localhost:8080](http://localhost:8080) that is validating and rendering your blueprint using [Apiary CLI](https://apiary.io/).

## Testing against specification

To test the blueprint run `npm test` command. This will validate the schema using Drafter.js library.

## Export HTML files

To compile the blueprint run `npm run build`. Files will be written to the `build` directory.

## Publishing to Apiary

To publish your blueprint to [Apiary.io](http://apiary.io) you have to set two environment variables:

```
export APIARY_API_KEY="<token>"
export APIARY_API_NAME="<apiary project name>"
```

After that, you can run `npm run publish` command to upload your blueprint to Apiary project. You can also provide those two values before the command, like `APIARY_API_KEY="<token>" APIARY_API_NAME="<apiary project name>" npm run publish`

## Resources

* [API Blueprint](https://apiblueprint.org/),
* [Apiary.io](https://apiary.io/),
* [Drafter.js](https://github.com/apiaryio/drafter.js),

## License
MIT License. See the [LICENSE](https://github.com/jsynowiec/api-blueprint-boilerplate/blob/master/LICENSE)
file.
