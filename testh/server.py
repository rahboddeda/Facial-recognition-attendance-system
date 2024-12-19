from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/write-to-file', methods=['POST'])
def write_to_file():
    # Handle the POST request here
    data = request.get_json()
    # Write data to file
    with open('roll.txt', 'w') as f:
        f.write(data['inputValue'])
    return 'Data written to file successfully'

if __name__ == '__main__':
    app.run(debug=True)
