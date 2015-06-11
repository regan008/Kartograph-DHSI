$( document ).ready(function() {
    var map = kartograph.map('#map');
    map.loadMap('svg/boston.svg', function(){
        map.addLayer('Wards2', {
            styles: {
                stroke: '#aaa',
                fill: '#f6f4f2'
            }
        map.addLayer('Gyms', {
            styles: {
                stroke: '#aaa',
                fill: '#3300CC'
            }
        });
    });
});