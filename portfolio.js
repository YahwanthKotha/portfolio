
function clearInput() {
        document.getElementById('message').value = '';
    var inputFields = document.getElementsByClassName('input'); // Get all elements with class 'input'
    for (var i = 0; i < inputFields.length; i++) {
        inputFields[i].value = ''; // Clear the value of each input field
    } 
    }
