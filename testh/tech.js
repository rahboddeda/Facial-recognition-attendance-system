document.addEventListener("DOMContentLoaded", function() {
    const tableBody = document.querySelector("#attendance-table tbody");

    // Fetch the content of op.txt file
    fetch('op.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch file');
            }
            return response.text();
        })
        .then(fileContent => {
            // Split the file content by lines
            const lines = fileContent.trim().split('\n');
            
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
});
