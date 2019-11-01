console.log('Client side javascript file is loaded!');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageSec = document.querySelector('#message-2');



weatherForm.addEventListener('submit', (event)=> {
    event.preventDefault();

    const location = search.value;
    messageOne.textContent = "Loading ....";
    messageSec.textContent = '';


        fetch(`/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error;
            } else  {
                messageOne.textContent = data.location;
                messageSec.textContent = data.forecast;
            }
        })
    });
})