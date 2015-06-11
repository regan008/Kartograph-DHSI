$( document ).ready(function() {
    var map = kartograph.map('#map');
    map.loadMap('svg/satellite.svg', function(){
        map.addLayer('gyms', {
            styles: {
                stroke: '#aaa',
                fill: '#f6f4f2'
            }
        
        });
    });
});