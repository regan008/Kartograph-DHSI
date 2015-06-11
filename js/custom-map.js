$( document ).ready(function() {
    var map = kartograph.map('#map');
    map.loadMap('svg/boston.svg', function(){
        map.addLayer('gyms', {
            styles: {
                stroke: '#aaa'
            }
        });
 
        map.getLayer('gyms').style('fill', function(data) {
            console.log(data);
            return (data.name.charAt(0) === "A") ? '#5ED391' : '#f6f4f2';
        });
    });
});