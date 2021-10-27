import './styles/style.scss';
import handleSubmit from "./js/index";

// This is the starting file where webpack begins.
window.addEventListener('DOMContentLoaded', () => {
const submitButton = document.getElementById('submitBtn');
submitButton.addEventListener('click', handleSubmit);
})

export {handleSubmit}
