var run = require('comandante'),
    fs = require('fs');

function write(name, str, options) {
    this.write(name + ' ' + str + '\n');
    if (options && options.end) {
        this.end();
    }
    return this;
}

module.exports = function (options) {
    var plot = run('gnuplot', [], options);

    ['set', 'unset', 'plot', 'splot'].forEach(function (name) {
        plot[name] = write.bind(plot, name);
    });

    return plot;
};