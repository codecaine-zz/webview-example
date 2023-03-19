        async function callPythonFunction() {
            const inputValue = document.getElementById('inputBox').value;
            try {
                const result = await pywebview.api.my_function(inputValue);
                alert(result);
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred while calling the Python function.');
            }
        }