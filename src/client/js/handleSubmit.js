import checkURL from "./checkURL";
const { fetchingData } = require("./fetchingData");
const { useData} = require("./useDate")

 async function handleSubmit (e) {
     e.preventDefault();
     const articleURL = document.getElementById("article-url");
     const {value} = articleURL
     if (checkURL(value)){
         const data = await fetchingData('http://localhost:8081/apiPost', { url: value });
         useData({data});
         }else{
            alert('The Url you entered is not valid. Please enter a valid one!');
          }
     }
export { handleSubmit }


