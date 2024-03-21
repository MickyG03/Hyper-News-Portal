

const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");
const building1 = document.querySelector(".buildings1");
const building2 = document.querySelector(".buildings2");
const building3 = document.querySelector(".buildings3");
const nav = document.querySelector("nav");
const logo = document.querySelector(".logo");
const card = document.querySelector(".card");

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener('load', () => {
    const preload = document.querySelector(".preload");
    preload.classList.add("preload-finish");
});


ele = document.getElementById("NewsPage");



let homeBtn = document.querySelector(".HomeBtn");
homeBtn.addEventListener("click", ()=>{


                $("html, body").animate({ scrollTop: -0.01}, 2000);



 });


let newsBtn = document.querySelector(".NewsBtn");
newsBtn.addEventListener("click", ()=>{


                 var winHeight = $(window).height(),
                 topOffset = $("#NewsPage").offset().top,
                 elementHeight = $('#NewsPage').height()
                 var top = topOffset - winHeight + elementHeight;

                $("html, body").animate({
                    scrollTop: top
                }, 2000);

                console.log( $('section').scrollHeight );

 });


let createBtn = document.querySelector(".CreateBtn");
createBtn.addEventListener("click", ()=>{


                 var winHeight = $(window).height(),
                 topOffset = $("#CreateNews").offset().top,
                 elementHeight = $('#CreateNews').height()
                 var top = topOffset - winHeight + elementHeight;

                $("html, body").animate({
                    scrollTop: top
                }, 2000);

                console.log( $('section').scrollHeight );

 });






window.addEventListener('scroll', () => {



    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();

    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height);
    })

    card.style.opacity = - scroll / (header_height / 2) + 1;
    building1.style.opacity = - scroll / (header_height / 2) + 1;
    building2.style.opacity = - scroll / (header_height / 2) + 1;
    building3.style.opacity = - scroll / (header_height / 1) + 1;
    big_title.style.opacity = - scroll / (header_height / 2) + 1;

    logo.style.filter = `invert(${scroll/(header_height)})`;
    //console.log(`${scroll/(header_height)}`);

    shadow.style.height = `${scroll * 0.5 + 300}px`;

//    content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;

    nav.classList.toggle("sticky", window.scrollY > 0);

});

let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
closeBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("open");
    menuBtnChange();//calling the function(optional)
  });

  function menuBtnChange() {
   if(sidebar.classList.contains("open")){
     closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
   }else {
     closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
   }
  }


// function shrink()
//    {
//        var textDivs = document.getElementsByClassName("fp-item");
//        var textDivsLength = textDivs.length;
//
//        // Loop through all of the dynamic divs on the page
//        for(var i=0; i<textDivsLength; i++) {
//
//            var textDiv = textDivs[i];
//
//            // Loop through all of the dynamic spans within the div
//            var textSpan = textDiv.getElementsByClassName("dynamicSpan")[0];
//
//            // Use the same looping logic as before
//            textSpan.style.fontSize = 10+"px";
//
//            while(textSpan.offsetWidth > textDiv.offsetWidth)
//            {
//                textSpan.style.fontSize = parseInt(textSpan.style.fontSize) - 1;
//            }
//
//        }
//
//    }



var span1ele = document.getElementsByClassName("myspan1"); // <- this gives you  a HTMLCollection
for (var i = 0; i < span1ele.length; i++) {

            let span=span1ele[i];



            let fontsize=parseInt(span.style.fontSize);



            do{
                fontsize--;
                span.style.fontSize= fontsize.toString()+'px';

            }while(span.offsetHeight>=472);
}

var span2ele = document.getElementsByClassName("myspan2"); // <- this gives you  a HTMLCollection
for (var i = 0; i < span2ele.length; i++) {

            let span=span2ele[i];


            let fontsize=parseInt(span.style.fontSize);


            do{
                fontsize--;
                span.style.fontSize= fontsize.toString()+'px';

            }while(span.offsetHeight>=210);
}

var span3ele = document.getElementsByClassName("myspan3"); // <- this gives you  a HTMLCollection
for (var i = 0; i < span3ele.length; i++) {

            let span=span3ele[i];


            let fontsize=parseInt(span.style.fontSize);



            do{
                fontsize--;
                span.style.fontSize= fontsize.toString()+'px';

            }while(span.offsetHeight>=220);
}

var span4ele = document.getElementsByClassName("myspan4"); // <- this gives you  a HTMLCollection
for (var i = 0; i < span4ele.length; i++) {

            let span=span4ele[i];


            let fontsize=parseInt(span.style.fontSize);


            do{
                fontsize--;
                span.style.fontSize= fontsize.toString()+'px';

            }while(span.offsetHeight>=220);
}

var span5ele = document.getElementsByClassName("myspan5"); // <- this gives you  a HTMLCollection
for (var i = 0; i < span5ele.length; i++) {

            let span=span5ele[i];


            let fontsize=parseInt(span.style.fontSize);


            do{
                fontsize--;
                span.style.fontSize= fontsize.toString()+'px';

            }while(span.offsetHeight>=220);
}

var span6ele = document.getElementsByClassName("myspan6"); // <- this gives you  a HTMLCollection
for (var i = 0; i < span6ele.length; i++) {

            let span=span6ele[i];

            let fontsize=parseInt(span.style.fontSize);



            do{
                fontsize--;
                span.style.fontSize= fontsize.toString()+'px';

            }while(span.offsetHeight>=220);
}

var span8ele = document.getElementsByClassName("myspan8"); // <- this gives you  a HTMLCollection
for (var i = 0; i < span8ele.length; i++) {

            let span=span8ele[i];

            let fontsize=parseInt(span.style.fontSize);

            do{
                fontsize--;
                span.style.fontSize= fontsize.toString()+'px';

            }while(span.offsetHeight>=220);
}



///////////////////////////////////////////// weather


const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const timezone = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const API_KEY ='49cc8c821cd2aff9af04c9f98c36eb74';

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'

    timeEl.innerHTML = (hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes)+ ' ' + `<span id="am-pm">${ampm}</span>`

    dateEl.innerHTML = days[day] + ', ' + date+ ' ' + months[month]

}, 1000);

getWeatherData()
function getWeatherData () {
    navigator.geolocation.getCurrentPosition((success) => {

        let {latitude, longitude } = success.coords;

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {

        console.log(data)
        showWeatherData(data);
        })

    })
}

function showWeatherData (data){
    let {humidity, pressure, sunrise, sunset, wind_speed} = data.current;

    timezone.innerHTML = data.timezone;
    countryEl.innerHTML = data.lat + 'N ' + data.lon+'E'

    currentWeatherItemsEl.innerHTML =
    `<div class="weather-item">
        <div>Humidity</div>
        <div>${humidity}%</div>
    </div>
    <div class="weather-item">
        <div>Pressure</div>
        <div>${pressure}</div>
    </div>
    <div class="weather-item">
        <div>Wind Speed</div>
        <div>${wind_speed}</div>
    </div>
    `;

    let otherDayForcast = ''
    data.daily.forEach((day, idx) => {
        if(idx == 0){
            currentTempEl.innerHTML = `
            <img src="http://openweathermap.org/img/wn//${day.weather[0].icon}@4x.png" alt="weather icon" class="w-icon">
            <div class="other">
                <div class="day">${window.moment(day.dt*1000).format('ddd')}</div>
                <div class="temp">Night - ${day.temp.night}&#176;C</div>
                <div class="temp">Day - ${day.temp.day}&#176;C</div>
            </div>
            `
        }else{
            otherDayForcast += `
            <div class="weather-forecast-item">
                <div class="day">${window.moment(day.dt*1000).format('ddd')}</div>
                <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
                <div class="temp">Night - ${day.temp.night}&#176;C</div>
                <div class="temp">Day - ${day.temp.day}&#176;C</div>
            </div>
            `
        }
    })


    weatherForecastEl.innerHTML = otherDayForcast;
}


const labels = document.querySelectorAll("label");

labels.forEach((label)=>{
    label.innerHTML = label.innerText.split("").map((letter, index)=>{
        return `<span style="transition-delay:${index*100}ms">${letter}</span>`
    }).join("");
});


document.querySelector('.submitbtn').addEventListener('click',(evt)=>{
    evt.target.classList.add('loading')

    setTimeout(()=>{

        evt.target.classList.remove('loading')
    },6000);
})

