const app = document.getElementById('root');

const form = document.createElement('form');
form.setAttribute('class', '');


var request = new XMLHttpRequest();

request.open('GET', 'https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple', true);

// retrieve session token
// https://opentdb.com/api_token.php?command=request

// reset session token
//https://opentdb.com/api_token.php?command=reset

request.onload = function () {
    let data = JSON.parse(this.response);
    console.log(Object.values(data));
    console.log(data);

    if (data.response_code == 0) {
        data.results.forEach((results) => {
            const card = document.createElement('div')
            card.setAttribute('class', 'form')

            const p = document.createElement('p')
            p.textContent = `${results.question}`;

            
            const label = document.createElement('label');
            label.setAttribute('for', results.correct_answer);
            label.textContent = `${results.correct_answer}`;

            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.setAttribute('name', results.correct_answer);
            checkbox.setAttribute('value', results.correct_answer);

            form.appendChild(card);
            card.appendChild(p);

            results.incorrect_answers.forEach((incorrect_answers) => {
                const label = document.createElement('label');
                label.setAttribute('for', incorrect_answers);
                label.textContent = `${incorrect_answers}`;

                const checkbox = document.createElement('input');
                checkbox.setAttribute('type', 'checkbox');
                checkbox.setAttribute('name', incorrect_answers);
                checkbox.setAttribute('value', incorrect_answers);

                card.appendChild(checkbox);
                card.appendChild(label);
            });

            card.appendChild(checkbox);
            card.appendChild(label);
        });
    } else {
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `Not working`

        app.appendChild(errorMessage)
    }

};
const submitButton = document.createElement('button')
submitButton.setAttribute('type', 'submit')
submitButton.textContent = 'Submit'
form.appendChild(submitButton)
app.appendChild(form);


request.send();