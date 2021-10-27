import './styles/style.scss';
import handleSubmit from "./js/index";


window.addEventListener('DOMContentLoaded', () => {
const submitButton = document.getElementById('submitBtn');
submitButton.addEventListener('click', handleSubmit);
})

export {handleSubmit}
