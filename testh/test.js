document.getElementById('testForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const inputValue = document.getElementById('inputField').value;

    fetch('http://localhost:5000/write-to-file', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ inputValue: inputValue })
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
});
