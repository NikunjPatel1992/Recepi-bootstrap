//DOM node as target

let target = document.getElementById("plot");

//Lists Data

let data = {
  carbs: 0.1,
  protein: 0.2,
  fat: 0.3
};

//Make a function call 
  
createNutritionChart(target, data);

function createNutritionChart(target, nutrition)
{
  let keys = Object.keys(nutrition);
  let values = keys.map(k => nutrition[k]);
  let values2 = values.map(dv => 1-dv);

  let data = [

    {
      type: 'bar',
      x: keys,
      y: values,
      name: "Daily Values",
      marker: {
        color: ["#66c2a5", "#fc8d62", "#8da0cb"]
      }
    },
    {
      type: 'bar',
      x: keys,
      y: values2,
      name: "Total",
      marker: {
        color: "#e0e0e0"
      }
    }
  ];

  let layout = {
    barmode: 'stack',
  };

  Plotly.plot(target, data, layout);
}
