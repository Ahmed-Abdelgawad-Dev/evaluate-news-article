
import validatingURL from "./validatingURL";
// importing axios like this for more autocomplete support
const axios = require("axios").default;

// an async function uses axios to post.
const postingData = async (url = "nothing", data = {}) => {
    // Parameters to succeed in talking to HTTP protocol. 
    const params = {
        mod: "cors",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    }
    try {
        // Try to post the data
        const response = await axios.post(url, data, params)
        // Testing data that came back by axios
        console.log(response.data)
        return response.data    
        // If not show me the error in the console
    } catch (error) {
        console.log(err)
    }
}

// Handling submit function 
export default async function handleSubmit(e) {
    //Preventing default refreshing by browser's nature
    e.preventDefault();
    // Get the value of the article to evaluate.
    const articleURL = document.getElementById("article-url").value;
    // If the article is valid
    if (validatingURL(articleURL)) {
        //Invoking & using postingData func in case of having a valid URL link. 
        const data = await postingData("http://localhost:8081/apiPost", {
            url: articleURL,
        });
        // Injecting the data into the DOM to see the result in the starting page.
        usingData({ data });
    } else {
        // Alerting the user in case of wrong URL.
        alert("The Url you entered is not valid. Please enter a valid one!");
    }
}
const usingData = ({ data }) => {
    // Injecting the result one by one using innerHTML 
    // After targeting every element by id
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
    // Adding the status as an extra option.
    document.getElementById(
        "status-msg"
    ).innerHTML = `Status: ${data.status.msg}`;
};

//Exporting both functions except handleSubmit
// as it's already exported by default
export { postingData, usingData };