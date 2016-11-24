var pack = require('../package.json');
var eventLoopStats = require('../' + [
    'build',
    'eventLoopStats',
    'v' + pack.version,
    ['node', 'v' + process.versions.modules, process.platform, process.arch].join('-'),
    'eventLoopStats.node'
  ].join('/'));

exports.sense = eventLoopStats.sense;
