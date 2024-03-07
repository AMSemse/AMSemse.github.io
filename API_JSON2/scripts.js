const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');


var request = new XMLHttpRequest();

request.open('GET', 'https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple', true);

// retrieve session token
// https://opentdb.com/api_token.php?command=request

// reset session token
//https://opentdb.com/api_token.php?command=reset

request.onload = function () {
    var data = JSON.parse(this.response);
    
    if (data.response_code == 0) {
        data.forEach((results) => {
            const card = document.createElement('div')
            card.setAttribute('class', 'card')
/*
            const h4 = document.createElement('h4')
            h4.textContent = results.question
*/
            const p = document.createElement('p')
            p.textContent = `${results.question}...`

            results.forEach(correct_answer){
            const label = document.createElement('label')
            label.setAttribute('for', '')

            const checkbox = document.createElement('input')
            checkbox.setAttribute('type', 'checkbox')
            checkbox.setAttribute('name', '')
            checkbox.setAttribute('value', '')



            container.appendChild(card)
            //card.appendChild(h4)
            card.appendChild(p)
            card.appendChild(checkbox)
            card.appendChild(label)
            }
        });
    } else {
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `Not working`

        app.appendChild(errorMessage)
    }
    
};

//request.send();