// Create an array of date objects with date, status, and URL for each date
const datesData = [
    { date: '1st January 2022', status: 'Marked', url: 'attendance1.html' },
    { date: '2nd January 2022', status: 'Unmarked', url: 'attendance2.html' },
    { date: '3rd January 2022', status: 'Unmarked', url: 'attendance3.html' },
    { date: '4th January 2022', status: 'Unmarked', url: 'attendance4.html' },
    { date: '5th January 2022', status: 'Unmarked', url: 'attendance5.html' },
    { date: '6th January 2022', status: 'Unmarked', url: 'attendance6.html' },
    { date: '7th January 2022', status: 'Unmarked', url: 'attendance7.html' },
    { date: '8th January 2022', status: 'Unmarked', url: 'attendance8.html' },
    { date: '9th January 2022', status: 'Unmarked', url: 'attendance9.html' },
    { date: '10th January 2022', status: 'Unmarked', url: 'attendance10.html' },
    // Add more dates as needed
  ];
  
  function generateDashboard() {
    const dateStatus = document.getElementById('date-status');
  
    datesData.forEach((date, index) => {
      const dateElement = document.createElement('div');
      dateElement.innerHTML = `
        <div>
          <p>Date: ${date.date}</p>
          <p id="status${index}">Status: ${date.status}</p>
          <a href="${date.url}" id="statusLink${index}" class="status-link">View Details</a>
        </div>
      `;
  
      dateStatus.appendChild(dateElement);
  
      // Add click event listener to each status link
      const statusLink = document.getElementById(`statusLink${index}`);
      statusLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = statusLink.href;
      });
    });
  }
  
  window.onload = generateDashboard;