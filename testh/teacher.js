document.addEventListener("DOMContentLoaded", function() {
    const tableBody = document.querySelector("#attendance-table tbody");

    fetch("/attendance")
        .then(response => {
            if (!response.ok) {
                console.log(response)
                throw new Error("Failed to fetch attendance data: " + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            if (data.length === 0) {
                const emptyRow = document.createElement("tr");
                const emptyCell = document.createElement("td");
                emptyCell.colSpan = 1; // Assuming there is at least one column
                emptyCell.textContent = 'No attendance data available';
                emptyRow.appendChild(emptyCell);
                tableBody.appendChild(emptyRow);
            } else {
                data.forEach(studentData => {
                    const row = document.createElement("tr");
                    for (const key in studentData) {
                        const cell = document.createElement("td");
                        cell.textContent = studentData[key];
                        row.appendChild(cell);
                    }
                    tableBody.appendChild(row);
                });
            }
        })
        .catch(error => {
            console.error("Error fetching attendance data:", error);
            const errorMessage = document.createElement("p");
            errorMessage.textContent = "Error fetching attendance data. Please try again later.";
            tableBody.appendChild(errorMessage);
        });
});
