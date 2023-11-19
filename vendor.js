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
  }

  // Opret et talegenkendelsesobjekt
var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

// Lyt efter resultater fra talegenkendelse
recognition.onresult = function(event) {
  var transcript = event.results[0][0].transcript.toLowerCase();

  // Tjek for specifikke kommandoer
  if (transcript.includes('hi')){// && transcript.includes('tur')) {
    // Implementer logik for at skifte tur til Britta
   // console.log('Britta, det er din tur!');
    // ... (implementer den nødvendige logik her)
    tilføjRunde();
  }
};

// Start talegenkendelse
recognition.start();
