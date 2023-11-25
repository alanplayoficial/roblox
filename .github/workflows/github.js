let elem = document.getElementById('escribe-aqui');

elem.addEventListener("keydown", function (event) {
    // El parámetro del evento es del tipo KeyboardEvent
  	addRow(event);
});
<input type="text" id="escribe-aqui" onkeyup="hazAlgo(event)">
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
