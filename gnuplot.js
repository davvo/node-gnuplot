var fs = require('fs'),
    util = require('util'),
    spawn = require('child_process').spawn,
    exec = require('child_process').exec,
    EventEmitter = require('events').EventEmitter;

var GnuPlot = function (options) {
    EventEmitter.call(this);
    this.commands = [];
    this.options = options || {};
}

util.inherits(GnuPlot, EventEmitter);

GnuPlot.prototype._cmd = function (name, args) {
    Array.prototype.slice.call(args).forEach(function (arg) {
        this.commands.push(name + ' ' + arg);
    }, this);
    return this;
}

GnuPlot.prototype._plot = function (name, args) {
    var self = this;
    var gnuplot = spawn('gnuplot');

    gnuplot.on('exit', function (code) {
        if (code !== 0) {
            self.emit('error', new Error(code));
        }
    });

    gnuplot.on('error', function (err) {
        self.emit('error', err);
    });

    gnuplot.stderr.pipe(process.stderr);

    process.nextTick(function () {
        self.commands.forEach(function (cmd) {
            gnuplot.stdin.write(cmd + '\n');
        });
        gnuplot.stdin.end(name + ' ' + [].slice.call(args).join(', ') + '\n');
    });

    return gnuplot.stdout;
}

GnuPlot.prototype.set = function () {
    return this._cmd('set', arguments);
}

GnuPlot.prototype.unset = function () {
    return this._cmd('unset', arguments);
}

GnuPlot.prototype.plot = function () {
    return this._plot('plot', arguments);
}

GnuPlot.prototype.splot = function () {
    return this._plot('splot', arguments);
}

module.exports = function () {
    return new GnuPlot();
};