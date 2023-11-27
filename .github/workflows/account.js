function estableceNombreUsuario() {
  let miNombre = prompt("Introduzca su nombre.");
  if (!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem("nombre", miNombre);
    miTitulo.innerHTML = "Mozilla is genial, " + miNombre;
  }
}
let elem = document.getElementById('escribe-aqui');

elem.addEventListener("keydown", function (event) {
    // El parámetro del evento es del tipo KeyboardEvent
  	addRow(event);
});
<input type="text" id="escribe-aqui" onkeyup="hazAlgo(event)">
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="./sources/style.css">
</head>

<body>
    <h2>Mira la consola también...</h2>
    <h5>Traducido de <a href="https://stackblitz.com/edit/js-key-down-up-test?file=style.css">A Tapas</a></h5>
    <div id="app" class="app">
        <div class="down">
            <label for="keyDownTest">Prueba keyDown</label>
            <input type="text" id="keyDownTest" placeholder="Escribe acá" name="keyDownTest">
        </div>
        <div class="up">
            <label for="keyUpTest">Prueba KeyUp</label>
            <input type="text" id="keyUpTest" placeholder="Escribe acá" name="keyUpTest">
        </div>
    </div>

    <script src="./sources/index.js"></script>
</body>
window.addEventListener("keydown", function(event) {

    if(event.key !== undefined) {
        // Manipula el evento con KeyboardEvent.key
    } else if (event.wich !== undefined) {
        // Manipula el evento con KeyboardEvent.wich
    }
});
document
    .getElementById("to_focus")
    .addEventListener("keydown", function(event) {
    	if(event.ctrlKey && event.key === "z"){
    		// Hacer algo, tal vez deshacer
    	}
    }
});
var $myObj = {
 "name":"John",
 "age":30,
 "cars": {
   "car1":"Ford",
   "car2":"BMW",
   "car3":"Fiat"
   }
 };
$mycar = $myObj["cars"]["coche3"];
var response="Hello World";

response += "\r\nProject name: " + Jitterbit.GetVar("$jitterbit.operation.project_name");
response += "\r\nOperation Name: " + Jitterbit.GetVar("$jitterbit.operation.name");
response += "\r\ntest_var: " + Jitterbit.GetVar("$jitterbit.api.request.parameters.test_var");

Jitterbit.SetVar("$jitterbit.api.response.headers.content_type","text/plain");
Jitterbit.SetVar("$jitterbit.api.response.headers.test_header", "This is a header test");
Jitterbit.SetVar("$jitterbit.api.response",response);
var MyVariable = "Hello World";
WriteToOperationLog(MyVariable);
SetScriptResult(MyVariable);
// This script will:
// * Generate some random numbers
// * Write them to a target file
// * Then read them back in
// * Write output to the Operation Log
//

// Get 200 random numbers between 1 and 10000
var mystring = getRandomNumbers(200,1,10000);

// Write the data to a file
Jitterbit.WriteFile("<TAG>Targets/tmpdata</TAG>", mystring);

// Read the data back in from the file
var filedata = Jitterbit.ReadFile("<TAG>Sources/tmpdata</TAG>");

// Output to the Operation Log
WriteToOperationLog("Read file, output: " + filedata);

// Displays the data in the result of the Studio test script tab
SetScriptResult(filedata);

/////////////////

function getRandomNumbers(howMany,min,max) {
  var output = "";

  for (var i=0; i<howMany; i++) {
    output = output + getRandomNumber(min,max) + " \n";
  }

  return output;
}

function getRandomNumber(min,max) {
  return Math.floor((Math.random() * max) + min);
}

/////////////////
// Create 200 random numbers
var $output = getRandomNumbers(200);

WriteToOperationLog($output);
SetScriptResult($output);

/////////////////

function getRandomNumbers(howMany) {
  var output = "";

  for (var i=0; i<howMany; i++) {
    output = output + Math.floor((Math.random() * 10000) + 1) + " \n";
  }

  return output;
}

/////////////////
// Create 100 random numbers

var $output = "";

for (var i=0; i<100; i++) {
  $output = $output + Math.floor((Math.random() * 10000) + 1) + " \n";
}

SetScriptResult($output);
WriteToOperationLog("\n\n Parsing JSON...");

var jsonData = Jitterbit.ReadFile("<TAG>Sources/JSON_Data</TAG>");
var $jsonObj = JSON.parse(jsonData);

WriteToOperationLog("Value of 'status' is: " + $jsonObj.status);
WriteToOperationLog("Value of 'operation' is: " + $jsonObj.operation);
WriteToOperationLog("Value of 'serverUrl' is: " + $jsonObj.serverUrl);

var $firstOrg = $jsonObj.orgAttrs[0];

WriteToOperationLog("First Org ID is: " + $firstOrg.orgId);
WriteToOperationLog("First Org Name is: " + $firstOrg.orgName);
WriteToOperationLog("\n\n Parsing JSON...");

var jsonData = Jitterbit.ReadFile("<TAG>Sources/JSON_Data</TAG>");
var $jsonObj = JSON.parse(jsonData);

WriteToOperationLog("Status: " + $jsonObj.status);
WriteToOperationLog("Operation: " + $jsonObj.operation);

var orgs = "";
var needComma = false;

for (var i=0; i<$jsonObj.orgAttrs.length; i++) {
  if (needComma) orgs = orgs + ",";
  orgs = orgs + $jsonObj.orgAttrs[i].orgId;
  needComma = true;
}

WriteToOperationLog("Org IDs: " + orgs);

// You can modify existing JSON values
// Any changes will be reflected in the Jitterbit system as a map variable
// Here we'll insert a random number as an authentication token
var randomNumber = Math.floor((Math.random() * 10000) + 1);
$jsonObj.authenticationToken = randomNumber;
// This script uses JSON stringify
// to create a property value structure
// and then pushes it to an API

var $complexAPI = {
  "properties": [
    {
      "property": "email",
      "value": $email
      function xxxx{  
 }
}
return"" + dato_a_devolver;
Escribiremos:
function xxxx{  
 }
}
"" + dato_a_devolver;
console.group('Cursos');

   console.log('TreinaWeb')
   console.groupCollapsed('Categorias')
      console.log('Front-End');
      console.log('Back-End');
      console.log('Mobile');
   console.groupEnd()

   console.log('AvMakers')
   console.groupCollapsed('Categorias')
      console.log('Edição de Vídeo');
      console.log('Modelagem 3D');
      console.log('Motion Design');
   console.groupEnd()

console.groupEnd()
function cadastrar() {
  enviarDados();
}

function enviarDados(){
   console.trace();
}

cadastrar()

    },
    {
      "property": "firstname",
      "value": $firstname
    },
    {
      "property": "lastname",
      "value": $lastname
    },
    {
      "property": "website",
      "value": $website
    },
    {
      "property": "phone",
      "value": $phone
    }
  ]
}

var $outputJSON = JSON.stringify($complexAPI);
Jitterbit.WriteFile("<TAG>Targets/Example HTTP Post</TAG>", $outputJSON);
WriteToOperationLog($outputJSON);
SetScriptResult($outputJSON);
