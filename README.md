# api-blueprint-boilerplate

Minimalistic boilerplate to quick-start API specification using [API Blueprint](https://apiblueprint.org/) description language.

Provides a basic template for REST API documentation that contains some best practices for a pragmatic RESTful API and a set of tools to validate API Blueprint schema or export specification to HTML files.

## Quick start

This project requires [Node.js](https://nodejs.org/) 6.2+, [NPM](https://www.npmjs.com/), [Ruby](https://www.ruby-lang.org) and [Bundler](http://bundler.io/). So just make sure you have those installed. Then just type following commands:

```
git clone https://github.com/jsynowiec/api-blueprint-boilerplate
cd api-blueprint-boilerplate
npm install
bundler install
npm start
```

You now have a local preview server available at [http://localhost:8080](http://localhost:8080) that is validating and rendering your blueprint using [Apiary CLI](https://apiary.io/).

## Testing against specification

To test the blueprint run `npm test` command. This will validate the schema using Drafter.js library.

## Export HTML files

To compile the blueprint run `npm run build`. Files will be written to the `build` directory.

## Publishing to Apiary

To publish your API Blueprint to [Apiary.io](http://apiary.io) you have to set two environment variables:

```
export APIARY_API_KEY="<token>"
export APIARY_API_KEY="<apiary project name>"
```

After that, you can run `npm run publish` command to upload your blueprint to Apiary project.

## Resources

* [API Blueprint](https://apiblueprint.org/),
* [Apiary.io](https://apiary.io/),
* [Drafter.js](https://github.com/apiaryio/drafter.js),

## License
MIT License. See the [LICENSE](https://github.com/jsynowiec/api-blueprint-boilerplate/blob/master/LICENSE)
file.
