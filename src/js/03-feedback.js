import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

const STORAGE_KEY = 'feedback-form-state';
const formData ={
    email: "",
    message: "",
};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', onFormInput);

populateMessage();

function onFormInput(event){
    formData.email = email.value;
    formData.message = message.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(event){
    event.preventDefault();

    console.log(formData);

    form.reset();
    localStorage.removeItem(STORAGE_KEY);

}

function populateMessage(){
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if(savedData){
        console.log(savedData);
        form.email.value = savedData.email;
        form.message.value = savedData.message;
    }
}
