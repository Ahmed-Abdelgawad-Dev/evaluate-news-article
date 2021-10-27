import checkURL from "./validatingURL";


async function fetchingData (url='', data={url:''}) {
	try {
    const resp = await fetch(url, {
      method: 'POST', credentials: 'same-origin', mode: 'cors',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify(data)
    });
    const newData = await resp.json();
    console.log(" newData  => ", newData)
    return newData;
  } catch (error) {
    alert('Something went wrong, Please try again!');
		console.log('Error =>', error)
    return error;
  }
}

export default async function handleSubmit (e) {
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


const useData = ({ data }) => {
    document.getElementById("agreement").innerHTML = `Agreement Type: ${data.agreement.toLowerCase()}`;

    document.getElementById("subjectivity").innerHTML = `Subjectivity Ego: ${data.subjectivity}`;

    document.getElementById("confidence").innerHTML = `Confidence Degree: ${data.confidence}`;

    document.getElementById("irony").innerHTML = `Irony Type: ${data.irony}`;

    document.getElementById("score_tag").innerHTML = `Score Tag: ${data.score_tag.toLowerCase()}`;
  }




export {fetchingData, useData};