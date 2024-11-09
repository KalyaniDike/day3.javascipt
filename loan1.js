"use strict";

document.getElementById("btn").onclick = function () {
  alert = "Hello, World!";
  var data1 = document.getElementById("x1").value;
  var data2 = document.getElementById("x2").value;
  var data3 = document.getElementById("x3").value;
  console.log(typeof data1);
  console.log(isNaN(data1));

  console.log(data1);
  console.log(data2);
  console.log(data3);

  var msg = "";
  if (data1 == "" || data2 == "" || data3 == "") {
    msg = "Please enter all fields!";
  } else if (isNaN(data1) || isNaN(data2) || isNaN(data3)) {
    msg = "All fields should contain numeric values!";
  } else if (data1 < 0 || data2 < 0 || data3 < 0) {
    msg = "all fields should contain positive numeric values!";
  } else {
    var p = Number(data1);
    var r = parseFloat(data2);
    var n = parseInt(data3);
    var si;

    r = r / 10 / 100;
    n = n * 12;

    var totalamt = p + r;
    //var totalamt = p + r;
    //var paidinterest = totalpaid - p;
     si = P * R * n/ 100;

    totalamt = Math.round(totalamt);
    
    document.getElementById("y1").innerHTML = p;
    document.getElementById("y2").innerHTML = r;
    document.getElementById("y3").innerHTML = totalamt;
    document.getElementById("y4").innerHTML = si;

    Highcharts.chart("container", {
      chart: {
        type: "pie",
      },
      title: {
        text: "Egg Yolk Composition",
      },
      tooltip: {
        valueSuffix: "%",
      },
      subtitle: {
        text: 'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>',
      },
      plotOptions: {
        series: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: [
            {
              enabled: true,
              distance: 20,
            },
            {
              enabled: true,
              distance: -40,
              format: "{point.percentage:.1f}%",
              style: {
                fontSize: "1.2em",
                textOutline: "none",
                opacity: 0.7,
              },
              filter: {
                operator: ">",
                property: "percentage",
                value: 10,
              },
            },
          ],
        },
      },
      series: [
        {
          name: "Percentage",
          colorByPoint: true,
          data: [
            {
              name: "interest",
              y: paidinterest,
            },
            {
              name: "Loan amount",
              sliced: true,
              selected: true,
              y: p,
            },
          ],
        },
      ],
    });
  }
  document.getElementById("result").innerHTML = msg;
};
