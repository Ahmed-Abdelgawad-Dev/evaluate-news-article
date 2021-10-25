const fetchingData = async(url='', data={url:''}) => {
	try {
    const resp = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    return await resp.json()
  } catch (error) {
    alert('Something went wrong, Please try again!');
		console.log('Error =>', error)
    return error;
  }
};
module.exports = {fetchingData};