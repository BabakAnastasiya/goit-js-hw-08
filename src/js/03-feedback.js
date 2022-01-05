import throttle from 'lodash/throttle';

const ref = {
  form: document.querySelector('.feedback-form'),
};

const email = ref.form.elements.email;
const message = ref.form.elements.message;

ref.form.addEventListener('input', throttle(onFormInput, 500));
ref.form.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
  const formData = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

populateData();

function populateData() {
  const parsedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (!parsedData) return;
  email.value = parsedData.email;
  message.value = parsedData.message;
}

function onFormSubmit(e) {
  e.preventDefault();
  if (!email.value || !message.value) {
    return alert('All feels must be fell out!');
  }
  console.log({ email: email.value, message: message.value });
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}