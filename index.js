const button = document.getElementById('submit');
button.addEventListener('click', callPythonFunction);

async function callPythonFunction() {
    const inputValue = document.getElementById('inputBox').value;
    const resultParagraph = document.getElementById('result');
    try {
        const result = await pywebview.api.my_function(inputValue);
        resultParagraph.textContent = result.msg;
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while calling the Python function.');
    }
}