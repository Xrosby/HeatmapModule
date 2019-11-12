import h337 from 'heatmap.js'


function initComponent() {


  var heatmap = h337.create({
    container: document.getElementById("map")
  });

  heatmap.setData({
    max: 5,
    data: [{
        x: 100,
        y: 550,
        value: 100
      },
      {
        x: 200,
        y: 65,
        value: 100
      },
      {
        x: 120,
        y: 315,
        value: 25
      },
      {
        x: 220,
        y: 65,
        value: 10
      }
    ]
  });

}

initComponent()