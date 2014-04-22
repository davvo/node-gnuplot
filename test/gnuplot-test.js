var fs = require('fs'),
    gnuplot = require('../gnuplot');

gnuplot()
    .on('error', function (err) {
        console.error(err)
    })
    .set('term png')
    .set('title "Some Math Functions"')
    .set('xrange [-10:10]')
    .set('yrange [-2:2]')
    .set('zeroaxis')
    .plot('(x/4)**2, sin(x), 1/x')
    .pipe(fs.createWriteStream('out.png'));

gnuplot()
    .set('term png')
    .set('output "out2.png"')
    .set('ticslevel 0')
    .splot('(x**2)*(y**2)');

gnuplot()
    .set('term png')
    .plot('"force.dat" using 1:2 title "Column", "force.dat" using 1:3 title "Beam"')
    .pipe(fs.createWriteStream('out3.png'));

gnuplot()
    .set('term png')
    .set('termoption dash')
    .set('xrange [-0.5:3.5]')
    .set('yrange [-1:1.4]')
    .set('bmargin 7')
    .unset('ytics', 'xtics')
    .set('title "Independent colors and dot/dash styles"')
    .unset('colorbox')

    .set('style line 1 lt 2 lc rgb "red" lw 3')
    .set('style line 2 lt 2 lc rgb "orange" lw 2')
    .set('style line 3 lt 2 lc rgb "yellow" lw 3')
    .set('style line 4 lt 2 lc rgb "green" lw 2')

    .set('label 1 \'set style line 1 lt 2 lc rgb "red" lw 3\'    at -0.4, -0.25 tc rgb "red"')
    .set('label 2 \'set style line 2 lt 2 lc rgb "orange" lw 2\' at -0.4, -0.35 tc rgb "orange"')
    .set('label 3 \'set style line 3 lt 2 lc rgb "yellow" lw 3\' at -0.4, -0.45 tc rgb "yellow"')
    .set('label 4 \'set style line 4 lt 2 lc rgb "green" lw 2\'  at -0.4, -0.55 tc rgb "green"')
    .set('label 5 \'plot ... lt 1 lc 3 \' at -0.4, -0.65 tc lt 3')
    .set('label 6 \'plot ... lt 3 lc 3 \' at -0.4, -0.75 tc lt 3')
    .set('label 7 \'plot ... lt 5 lc 3 \' at -0.4, -0.85 tc lt 3')

    .set('xlabel "You will only see dashed lines if your current terminal setting permits it"')

    .set('output "out4.png')

    .plot(
        'cos(x)     ls 1 title "ls 1"',
        'cos(x-.2)  ls 2 title "ls 2"',
        'cos(x-.4)  ls 3 title "ls 3"',
        'cos(x-.6)  ls 4 title "ls 4"',
        'cos(x-.8)  lt 1 lc 3 title "lt 1 lc 3"',
        'cos(x-1.)  lt 3 lc 3 title "lt 3 lc 3"',
        'cos(x-1.2) lt 5 lc 3 title "lt 5 lc 3"'
    );