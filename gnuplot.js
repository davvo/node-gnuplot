var run = require('comandante'),
    fs = require('fs');

function write(name, str, options) {
    this.write(name + ' ' + str + '\n');
    if (options && options.end) {
        this.end();
    }
    return this;
}

module.exports = function () {
    var gnuplot = run('gnuplot', []);

    ['set', 'unset', 'plot', 'splot'].forEach(function (name) {
        gnuplot[name] = write.bind(plot, name);
    });

    return gnuplot;
};