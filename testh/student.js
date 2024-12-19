document.addEventListener("DOMContentLoaded", function() {
    const tableBody = document.querySelector("#attendance-table tbody");
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");

    // Function to fetch and populate the table from a given file
    function populateTableFromFile(fileName) {
        return fetch(fileName)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch ${fileName}`);
                }
                return response.text();
            })
            .then(fileContent => {
                // Split the file content by lines
                const lines = fileContent.trim().split('\n');

                // Clear the table body
                tableBody.innerHTML = "";

                // Loop through each line
                lines.forEach(line => {
                    // Split the line by commas to get individual values
                    const data = line.split(',');

                    // Create a new row in the table
                    const row = document.createElement("tr");

                    // Loop through each value and create a new cell in the row
                    data.forEach((value, index) => {
                        const cell = document.createElement("td");
                        cell.textContent = value.trim(); // Trim whitespace

                        // Check if the value represents the percentage (assuming it's the last column)
                        if (index === data.length - 1) {
                            // Convert the value to a number for comparison
                            const percentage = parseFloat(value.trim());

                            // Set the background color based on the percentage
                            if (percentage > 80.0) {
                                cell.style.backgroundColor = '#ccffcc'; // Green
                            } else {
                                cell.style.backgroundColor = '#ffcccc'; // Red
                            }
                        }

                        // Append the cell to the row
                        row.appendChild(cell);
                    });

                    // Append the row to the table body
                    tableBody.appendChild(row);
                });
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    // Call the function to initially populate the table from 'op.txt'
    populateTableFromFile('op.txt');

    // Event listener for search button click
    searchButton.addEventListener("click", function() {
        const searchValue = searchInput.value.trim();
        if (searchValue !== "") {
            // Send the search value to the Python file using a fetch request
            fetch('http://localhost:5000/write-to-file', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ inputValue: searchValue })
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to write to file');
                    }
                    return response.text();
                })
                .then(result => {
                    console.log(result);
                    alert('Number written to file successfully!');
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        } else {
            alert("Please enter a search value.");
        }
    });

    // Function to populate the table from 'rln.txt' after a delay
    function populateFromRlnTxtAfterDelay() {
        setTimeout(() => {
            populateTableFromFile('rln.txt');
        }, 1);
    }

    // Call the function to populate the table from 'rln.txt' after a delay
    populateFromRlnTxtAfterDelay();
});
