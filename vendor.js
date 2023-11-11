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
    alert('Sum af kolonne 1:'+sum1+'\nSum af kolonne 2:'+sum2+'\nSum af kolonne 3:'+sum3+'\nSum af kolonne 4:'+sum4+'\nSum af kolonne 5:'+sum5);
  }