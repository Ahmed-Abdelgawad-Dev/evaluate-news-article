import {handleSubmit} from "./js/handleSubmit";
import checkURL from "./js/checkURL";
import {fetchingData} from "./js/fetchingData";
import './styles/style.scss'

window.addEventListener('DOMContentLoaded', () => {
const submitButton = document.getElementById('submitBtn');
submitButton.addEventListener('click', handleSubmit);
})

export {handleSubmit, checkURL, fetchingData}
