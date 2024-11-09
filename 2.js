document.getElementById("btn").onclick = function () {
  //   alert('Hello,World!');
  // confirm('Are you sure you want to proceed?');
//   prompt("Enter your name:");
  console.log(document.getElementById("x1"));

  var data = document.getElementById("x1").value;
  console.log(data);

  var msg = "";
//   if (data == "") {
//     msg = "please enter pincode!";
//   } else if (data.length != 6) {
//     msg = "pincode should be 6 digits!";
//   } else {
//     msg = "Pincode is valid!";
    //   }
    var msg =
        data == ""
            ? "Please enter pincode!"
            : data.length != 6
            ? "Pincode should be 6 digits!"
             : "Pincode is valid!";
    console.log(document.getElementById("result"));
    document.getElementById('result').innerHTML = msg;
};
