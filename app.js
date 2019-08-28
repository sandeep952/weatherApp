
document.getElementById('city').addEventListener('change' , getAsyncWeather)

//using async await
async function getAsyncWeather(){

  var city =document.getElementById('city').value;
  var tempDOM=document.getElementById('temp');
  var humidityDOM=document.getElementById('humidity');
  var descDOM=document.getElementById('description');
  var videoDiv=document.getElementById('videoDiv');
  var request=`https://api.apixu.com/v1/current.json?key=28cfb531d99948bc8e6172719191607&q=${city}`;
  const response= await fetch(request);
  const myJson= await response.json();

  current=myJson.current;
  tempDOM.textContent=current.temp_c;
  humidityDOM.textContent=current.humidity;
  descDOM.textContent=current.condition.text;
  document.getElementById('imgg').src=current.condition.icon;
  console.log(current.condition.icon);
  videoDiv.innerHTML=`<video id="bgVideo" autoplay="true" loop="true" src="${descDOM.textContent}.mov"></video>`
  document.getElementById('bgVideo').play();
  




}



//with promises only 

// function getWeather(){

// var city =document.getElementById('city').value;
// var tempDOM=document.getElementById('temp');
// var humidityDOM=document.getElementById('humidity');
// var descDOM=document.getElementById('description');
// var videoDiv=document.getElementById('videoDiv');
// var request=`https://api.apixu.com/v1/current.json?key=28cfb531d99948bc8e6172719191607&q=${city}`;

// fetch(request)
//     .then(function(response){
//       //console.log(response.json());
//       return response.json();
//     })
//     .then(function(myJson){
//       console.log(myJson);
//         current=myJson.current;
//         tempDOM.textContent=current.temp_c;
//         humidityDOM.textContent=current.humidity;
//         descDOM.textContent=current.condition.text;
//         document.getElementById('imgg').src=current.condition.icon;
//         videoDiv.innerHTML=`<video id="bgVideo" autoplay="true" loop="true" src="${descDOM.textContent}.mov"></video>`
//         document.getElementById('bgVideo').play();

//         })

// }
