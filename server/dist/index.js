'use strict';

var _start = require('./start');

var _start2 = _interopRequireDefault(_start);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const notTest = process.env.NODE_ENV !== 'test'; // import logger from 'loglevel'

const isProduction = process.env.NODE_ENV !== 'production';
const logLevel = process.env.LOG_LEVEL || (notTest ? 'info' : 'warn');

// logger.setLevel(logLevel)

(0, _start2.default)({ port: isProduction ? process.env.PORT : undefined });