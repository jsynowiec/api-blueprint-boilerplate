const validator = require('api-blueprint-validator-module');
const argv = require('yargs')
        .usage('Usage: $0 --files [str]')
        .demand(['files'])
        .argv;

(({ files, failOnWarnings = true} = {}) => validator.parseAndValidateFiles(files, failOnWarnings))(argv);
