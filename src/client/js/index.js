import validatingURL from "./validatingURL";
// importing axios like this for more autocomplete support
const axios = require("axios").default;

const postingData = async (url = "", data = {}) => {
    const params = {
        mod: "cors",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    }
    try {
        const response = await axios.post(url, data, params)
        console.log(response.data)
        return response.data    
    } catch (error) {
        console.log(err)
    }
}


export default async function handleSubmit(e) {
    e.preventDefault();
    const articleURL = document.getElementById("article-url").value;
    if (validatingURL(articleURL)) {
        const data = await postingData("http://localhost:8081/apiPost", {
            url: articleURL,
        });
        usingData({ data });
    } else {
        alert("The Url you entered is not valid. Please enter a valid one!");
    }
}
const usingData = ({ data }) => {
    document.getElementById(
        "agreement"
    ).innerHTML = `Agreement Type: ${data.agreement.toLowerCase()}`;

    document.getElementById(
        "subjectivity"
    ).innerHTML = `Subjectivity Ego: ${data.subjectivity}`;

    document.getElementById(
        "confidence"
    ).innerHTML = `Confidence Degree: ${data.confidence}`;

    document.getElementById("irony").innerHTML = `Irony Type: ${data.irony}`;

    document.getElementById(
        "score_tag"
    ).innerHTML = `Score Tag: ${data.score_tag.toLowerCase()}`;
    document.getElementById(
        "status-msg"
    ).innerHTML = `Status: ${data.status.msg}`;
};

export { postingData, usingData };

// const fetchingData = async (url='', data={}) => {
//     const resp  = await fetch(url, {
//         method: 'POST',
//         mod: 'cors',
//         credentials: 'same-origin',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(data)
//     })
//     try {
//         return await resp.json()
//     }
//     catch (e) {
//         console.log(e)
//     }
// }
