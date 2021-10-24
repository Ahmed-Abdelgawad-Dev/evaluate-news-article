const { checkURL } = require("./checkURL");
const { fetchingData } = require("./fetchingData");
const { useData} = require("./useDate")

const handleSubmit = async (e) => {
     e.preventDefault();
     const articleURL = document.getElementById("article-url");
     const {value} = articleURL
     if (checkURL(value)){
       console.log("form value => ", value);
         const data = await fetchingData('http://localhost:8081/apiPost', { url: value });
         useData({data});
         }else{
            alert('Please enter a valid URL and try again.');
          }
     }
export { handleSubmit }