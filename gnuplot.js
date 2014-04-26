var run = require('comandante');

module.exports = function () {
    var plot = run('gnuplot', []);

    plot.print = function (data, options) {
        plot.write(data);
        if (options && options.end) {
            plot.end();
        }
        return plot;
    };

    ['set', 'unset', 'plot', 'splot'].forEach(function (name) {
        plot[name] = function (data, options) {
            return plot.print(name + ' ' + data + '\n', options);
        };
    });

    return plot;
};