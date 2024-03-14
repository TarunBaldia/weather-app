const getWeatherBtn = document.querySelector("button")
const city = document.querySelector("#city")

const api_key = "8d063cb634d0160d2e410c152c3ebc41"
const head = document.querySelector(".head")
const icon = document.querySelector(".icon")
const temp_head = document.querySelector(".temperature")
const desc_head = document.querySelector(".description")

async function fetchWeather() {
    console.log("fetching",city.value);
    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=8d063cb634d0160d2e410c152c3ebc41&units=metric`
    const response = await fetch(url)
    const weatherData = await response.json()

    console.log(weatherData);
    const description = weatherData.weather[0].description
    const temperature = weatherData.main.temp
    const iconURL = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    console.log(description, temperature, iconURL)
    head.innerText = city.value
    icon.setAttribute("src",iconURL)
    temp_head.innerText = temperature
    desc_head.innerText = description
};

getWeatherBtn.addEventListener("click", (e) => {
    e.preventDefault()
    fetchWeather()
})
    
// // // const fetchWeather = async () => {
// // //     try {
// // //         const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=8d063cb634d0160d2e410c152c3ebc41&units=metric`
// // //         const response = await fetch(url)
// // //         const weatherData = await response.json()
// // //         console.log(weatherData.main.temp);
// // //     } catch (err) {
// // //         console.log(err);
// // //     }
// // // }

// // fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=8d063cb634d0160d2e410c152c3ebc41&units=metric`)

// // .then((response)=>{
// //     response.json().then((data)=>{
// //         console.log(data)
// //     })
// // })
// // .catch((error)=>{
// //     console.log(error );
// // }) 












 


// const sendRequest = (url) => {
//     return new Promise((resolve, reject) => {
//  const request = new XMLHttpRequest()
//         request.addEventListener("readystatechange", () => {
//             if (request.readyState === 4) {
//                 if(request.status===200){
//                     resolve(request.responseText)
//                 }
//                 else{reject("something went wrong")}
//             }
//         })
//         request.open("GET", url)
//         request.send()
//     })
// }
// sendRequest("https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=8d063cb634d0160d2e410c152c3ebc41&units=metric")
// .then((data)=>{
// console.log(data);
// })
// .catch((err)=>{
// console.log(err);
// })





// const request = (url)=>{
//     return new Promise((resolve,reject)=>{
//         const request = new XMLHttpRequest()
//         request.addEventListener("readystatechange",()=>{
//             if(request.readyState===4){
//                 if(request.status===200){
//                     resolve(request.responseText)
//                 }
//                 else{
//                     reject("something went wrong")
//                 }
//             }
        
//         })

//         request.open("GET",url)4
//         request.send()
//     })
// }
// request("https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=8d063cb634d0160d2e410c152c3ebc41&units=metric")
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })












