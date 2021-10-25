import './styles/style.scss'
import {handleSubmit} from "./js/handleSubmit";

window.addEventListener('DOMContentLoaded', () => {
const submitButton = document.getElementById('submitBtn');
submitButton.addEventListener('click', handleSubmit);
})

export {handleSubmit}