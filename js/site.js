// Get the values from the page
// Start or controller function(s)
function getValues(){
    //get values from the page
    let fizzValue = document.getElementById("startValue").value;
    let buzzValue = document.getElementById("endValue").value;

    //parse into integers
    fizzValue = parseInt(fizzValue);
    buzzValue= parseInt(buzzValue);

    //validate inputs
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        //call generateNumbers
        let sequence = generateValues(fizzValue,buzzValue);
        
        //call displayNumbers
        displayData(sequence);
    }
    else {
        alert("You must enter integers!")
    }
}

// Generate number from the start value to the end value
// Logic function(s)
function generateValues( fizzValue, buzzValue){
    let sequence = [];
    let valueToPush = 0;

    for (let i = 1; i <= 100; i++) {
        if (i % fizzValue === 0 && i % buzzValue === 0) {
            valueToPush = "FizzBuzz";
        } 
        else if (i % fizzValue === 0) {
            valueToPush = "Fizz";
        }
        else if (i % buzzValue === 0) {
            valueToPush = "Buzz";
        }
        else {
            valueToPush = i;
        }
        sequence.push(valueToPush);   
    }

    return sequence;
}

// Display the numbers and mark even numbers BOLD
// Display or view functions
function displayNumbers(sequence){

    let templateRows = "";
    let templateHTML = "";

    for (let index = 0; index < sequence.length; index++) {
        let value = sequence[index];
        if (index % 5 === 0) {
            templateHTML = `<tr><td>${value}</td>`;
        } 
        else if (index % 5 === 4) {
            templateHTML = `<td>${value}</td></tr>`;
        }
        else {
            templateHTML = `<td>${value}</td>`
        }

        templateRows += templateHTML;
    }

    document.getElementById("results").innerHTML = templateRows;
}

// Alt display method 
function  displayData(sequence) {
    //get the table body element from the page
    let tableBody = document.getElementById("results");

    //get the template row
    let templateRow = document.getElementById("tableTemplate");

    //clear the table first
    tableBody.innerHTML = "";

    for (let i = 0; i < sequence.length; i += 5) {
        
        let tableRow = document.importNode(templateRow.content, true);

        //grab just the td's put into array
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].textContent = sequence[i];
        rowCols[1].textContent = sequence[i+1];
        rowCols[2].textContent = sequence[i+2];
        rowCols[3].textContent = sequence[i+3];
        rowCols[4].textContent = sequence[i+4];

        tableBody.appendChild(tableRow);
        
    }

}