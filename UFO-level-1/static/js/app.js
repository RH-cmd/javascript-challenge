// from data.js
var tableData = data;

// View the data from the data.js file 
console.log(data);

// Reference the table body 
var tbody = d3.select("tbody");

// Create a function that will use the data to populate the table
function UFOtable() {tableData.map (data => {
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

// Add event listener for button on Filter Search that works on both click and pressing enter
var inputFilter = d3.select('#filter-btn');
var inputFilter2 = d3.select('form')

inputFilter.on("click", filterTable)
inputFilter2.on("submit", filterTable)

// Create a function to take the input from the Filter Search and recreate table
function filterTable() {

    // Stop page from refreshing
    d3.event.preventDefault();

    // Select the user input value from Filter Search 
    var input = d3.select('#datetime').property('value');
    console.log(input);

    // Filter the data 
    var filteredData = tableData.filter(data => data.datetime === input);
    console.log(filteredData);

    // Clear the table data
    tbody.html("");

    // Loop through the data to append rows 
    filteredData.forEach(ufo => {

        // Create a new row
        var newRow = tbody.append('tr');

        // Append each row with populated data
        newRow.append('td').text(ufo.datetime);
        newRow.append('td').text(ufo.city);
        newRow.append('td').text(ufo.state);
        newRow.append('td').text(ufo.country);
        newRow.append('td').text(ufo.shape);
        newRow.append('td').text(ufo.durationMinutes);
        newRow.append('td').text(ufo.comments);
    });
};