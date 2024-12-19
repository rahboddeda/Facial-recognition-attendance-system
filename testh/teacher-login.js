document.addEventListener("DOMContentLoaded", function() {
  const table = document.querySelector("#attendanceTable");
  const tableBody = table.querySelector("tbody");
  
  // Add the extra row at the beginning
  const extraRow = document.createElement("tr");
  extraRow.innerHTML = "<td></td>"; // Empty cell for roll number
  for (let i = 1; i <= 31; i++) {
    extraRow.innerHTML += `<td>${i}</td>`;
  }
  extraRow.innerHTML += "<td>Total</td>"; // Total column
  extraRow.innerHTML += "<td>Percentage</td>"; // Percentage column
  tableBody.appendChild(extraRow);

  // Add rows with roll numbers from 1 to 80
  for (let i = 1; i <= 80; i++) {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${i}</td>`;
    for (let j = 0; j < 31; j++) {
      row.innerHTML += `<td><input type="number" min="0" max="1" value="NULL"></td>`;
    }
    row.innerHTML += `<td class="totalChecks">0</td>`;
    row.innerHTML += `<td class="percentage">0%</td>`;
    tableBody.appendChild(row);
  }
});
