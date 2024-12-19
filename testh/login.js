document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    var role = document.getElementById('role').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Make AJAX request to backend service
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'your-backend-url/login', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {//
            //xhr.status=200
            if (xhr.status === 200) {
                // Successful login
                if(role=="Teacher"){
                    window.location.href = 'teacher.html';
                }
                if(role=="Student"){
                    window.location.href = 'student.html';    
                }
                
            } else {
                // Failed login
                document.getElementById('error').innerText = 'Invalid username or password';
            }
        }
    };
    var data = JSON.stringify({ username: username, password: password });
    xhr.send(data);
});
