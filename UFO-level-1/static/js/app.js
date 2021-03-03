// from data.js
var tableData = data;

// View the data from the data.js file 
console.log(data);

// Reference the table body 
var tbody = d3.select("tbody");

// Create a function that will use the data to populate the table
function UFOtable () {tableData.map (data => {
    // Create a new row
    var newRow = tbody.append('tr');

    // Add new rows of data for each UFO sighting
    newRow.append('td').text(data.datetime);
    newRow.append('td').text(data.city);
    newRow.append('td').text(data.state);
    newRow.append('td').text(data.country);
    newRow.append('td').text(data.shape);
    newRow.append('td').text(data.durationMinutes);
    newRow.append('td').text(data.comments);
    });
}

// Show the table
UFOtable();

// Add event listener for button on Filter Search
var inputFilter = d3.select('#filter-btn');

// Create a function to take the input from the Filter Search and recreate table
inputFilter.on('click', function () {

    // Stop page from refreshing
    d3.event.preventDefault();

    // Select the user input value from Filter Search 
    var input = d3.select('#datetime').node().value;
    console.log(input);

    // Filter the data 
    



}
)

