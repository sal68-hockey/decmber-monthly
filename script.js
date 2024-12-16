// defined cool 
// Select form and elements
const form = document.getElementById('fantisyForm');
    const inputs = {
        firstname: document.getElementById('firstname'),
        middlename: document.getElementById('middlename'),
        lastname: document.getElementById('lastname'),
        roadtype: document.getElementById('roadtype'),
        position: document.getElementById('position'),
        grade: document.getElementById('grade'),
        favteam: document.getElementById('favteam'),
        favanimal: document.getElementById('favanimal')
    };

    // Create result display
    const resultDiv = document.createElement('div');
    resultDiv.id = 'result';
    resultDiv.className = 'mt-4 alert alert-info';
    resultDiv.style.display = 'none';
    document.querySelector('main .container').appendChild(resultDiv);

    // Add form submit event listener
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Extract and trim values
        const values = {};
        for (const key in inputs) {
            values[key] = inputs[key].value.trim();
        }

        // Validation
        if (!values.firstname || !values.lastname || !values.favteam || !values.favanimal) {
            resultDiv.textContent = 'Please fill out all required fields (First Name, Last Name, Favorite Team, Favorite Animal).';
            resultDiv.className = 'mt-4 alert alert-danger';
            resultDiv.style.display = 'block';
            return;
        }

        // Generate the fantasy name
        const fantasyName = `${values.firstname} "${values.favanimal} of the ${values.favteam}" ${values.lastname} (${values.grade} ${values.position} on ${values.roadtype})`;

        // Display the result
        resultDiv.textContent = fantasyName;
        resultDiv.className = 'mt-4 alert alert-success';
        resultDiv.style.display = 'block';
    });
