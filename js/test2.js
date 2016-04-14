(function() {
    var win = typeof window === 'undefined' ? null : window;

    if (!win) {
        console.log('Invalid window object');
        return;
    }

    console.log('Injected script...');

    win.psu_inj = {};

    win.psu_inj.f = function(a) {
        console.log('Inj: ', a);
    };
})();
