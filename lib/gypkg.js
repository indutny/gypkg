'use strict';

exports.CommandSocket = require('gypkg-cmd-socket');
exports.Client = require('./gypkg/client');
exports.Server = require('./gypkg/server');

exports.commands = {};
exports.commands.init = require('./gypkg/commands/init');
