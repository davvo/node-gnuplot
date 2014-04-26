var run = require('comandante');

function write(name, str, options) {
    this.write(name + ' ' + str + '\n');
    if (options && options.end) {
        this.end();
    }
    return this;
}

module.exports = function () {
    var plot = run('gnuplot', []);

    ['set', 'unset', 'plot', 'splot'].forEach(function (name) {
        plot[name] = write.bind(plot, name);
    });

    return plot;
};