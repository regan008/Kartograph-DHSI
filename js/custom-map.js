$( document ).ready(function() {
    var map = kartograph.map('#map');
    map.loadMap('svg/boston.svg', function(){
        map.addLayer('wards2', {
                    styles: {
                        'stroke-width': 0.2
                    }
                }).addLayer('Gyms', {
                    name: 'Gyms'
                });

        });
    });
