function tilføjRunde() {
  var tabel = document.getElementById("minTabel");
  var række = tabel.insertRow();
  var celle1 = række.insertCell(0);
  var celle2 = række.insertCell(1);
  var celle3 = række.insertCell(2);
  var celle4 = række.insertCell(3);
  var celle5 = række.insertCell(4);

  var input1 = document.createElement("input");
  input1.type = "number";
  celle1.appendChild(input1);

  var input2 = document.createElement("input");
  input2.type = "number";
  celle2.appendChild(input2);

  var input3 = document.createElement("input");
  input3.type = "number";
  celle3.appendChild(input3);

  var input4 = document.createElement("input");
  input4.type = "number";
  celle4.appendChild(input4);

  var input5 = document.createElement("input");
  input5.type = "number";
  celle5.appendChild(input5);
}

function opsummere() {
  var tabel = document.getElementById("minTabel");
  var sum1 = 0;
  var sum2 = 0;
  var sum3 = 0;
  var sum4 = 0;
  var sum5 = 0;

  for (var i = 0; i < tabel.rows.length; i++) {
    sum1 += parseFloat(tabel.rows[i].cells[0].children[0].value)|| 0;
    sum2 += parseFloat(tabel.rows[i].cells[1].children[0].value)|| 0;  
    sum3 += parseFloat(tabel.rows[i].cells[2].children[0].value)|| 0;
    sum4 += parseFloat(tabel.rows[i].cells[3].children[0].value)|| 0;
    sum5 += parseFloat(tabel.rows[i].cells[4].children[0].value)|| 0;
  }
  alert('Point Britta:  '+sum1+'\nPoint Knud:  '+sum2+'\nPoint Maria:  '+sum3+'\nPoint Jonas:  '+sum4+'\nPoint Michael:  '+sum5);
  if (sum1 >= 500) {
    //alert('Congratulations, Britta! You have won!');  
    vinder("Britta",sum1)
   }

if (sum2 >= 500) {
    //alert('Congratulations, Knud! You have won!');
    vinder("Knud",sum2)
}

if (sum3 >= 500) {
    //alert('Congratulations, Maria! You have won!');
    vinder("Maria",sum3)
}

if (sum4 >= 500) {
    //alert('Congratulations, Jonas! You have won!');
    vinder("Jonas",sum4)
}

if (sum5 >= 500) {
    //alert('Congratulations, Michael! You have won!');
    vinder("Michael",sum5)
}
}

function vinder(navn,point){
var customDialog = document.getElementById("customDialog");

      // Opret et h1-element
      var h1Element = document.createElement("h1");
      h1Element.innerText = "Tillykke!  "+navn+"  du fik :"+point;
      h1Element.setAttribute("id", "customHeading");

      // Tilføj h1-elementet til .custom-dialog
      customDialog.appendChild(h1Element);

}








