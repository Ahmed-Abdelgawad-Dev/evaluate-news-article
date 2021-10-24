import './styles/style.scss'
import {handleSubmit} from "./js/handleSubmit";

// TODO: get the button for submit
// TODO: add event listener to it when the click to call handleSubmit function
/**
 * TODO: Get Value of the input for URL
 *  TODO: Check if it's URL or not
 *      yes
 *          send it to the backend
 *      no
 *          show user message it's not valid URL
 */
window.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submitBtn');
    submitButton.addEventListener('click', handleSubmit);
  })






export {
    handleSubmit,
}