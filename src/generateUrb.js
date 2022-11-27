const axios = require("axios");
function generateUrb(){
    const options = {
      method: 'GET',
      url: 'https://urban-dictionary7.p.rapidapi.com/v0/random',
      headers: {
        'X-RapidAPI-Key': '40d0d62ae9mshf2d3055c2aca626p13b218jsn6d52b7565a41',
        'X-RapidAPI-Host': 'urban-dictionary7.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
        document.getElementById('joke').innerHTML= response.data.list[0].word;
        document.getElementById('jokedef').innerHTML= response.data.list[0].definition;

    }).catch(function (error) {
        console.error(error);
    });
}
export default generateUrb;