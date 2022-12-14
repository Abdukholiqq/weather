let elForm = document.querySelector("form");
let elInput = document.querySelector("#input");
let elMain = document.querySelector("main");


elForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let location = elInput.value;
    let API_KAY = "70ad0cd8c12d5b97fc22428279ca9d83";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KAY}`)
        .then(response => response.json()).then(data => {
            elMain.innerHTML = `
        <div class="city w-25  d-flex justify-content-center mb-4  mx-auto text-warning bg-success  rounded-3 p-3">${data.name}</div>
        <div class="data d-flex justify-content-center gap-2 text-aligin-center mx-auto">
         <p class="bg-info d-flex justify-content-center   ps-5 pe-5 rounded-4" >${Math.round(data.main.temp - 273.15)} C</p>
        <p class="bg-info d-flex justify-content-center   ps-5 pe-5 rounded-4"> ${data.weather[0].main}</p>
        </div>    
        <div class = "d-flex justify-content-center mx-auto  w-25 mt-4 p-2  bg-info rounded-4"> Hozir ${location}da harorat ${Math.round(data.main.temp - 273.15)} C </div>
        `
            let gradus = Math.round(data.main.temp - 273.15)
            if (gradus > 5 && gradus < 20) {
                document.body.style.background = "url(../images/dubay.jpg)";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundSize = 'cover';
            }
            else if (data.name == "Tashkent") {
                document.body.style.background = "url(../images/tashkent2.jpg)";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundSize = 'cover';
            } else if (data.weather[0].main = "rain") {
                document.body.style.background = "url( https://en.shafaqna.com/wp-content/uploads/2015/10/16665fc353f93c955a95d886d9698521.jpg)";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundSize = 'cover';
            }
                else if (data.weather[0].main == "clouds") {
                    document.body.style.background = "url(https://seasonsyear.com/sites/default/files/styles/large/public/field/image/Helsinki.jpg?itok=WWzDpPCl)";
                    document.body.style.backgroundRepeat = "no-repeat";
                    document.body.style.backgroundSize = 'cover';
                }
            else if (gradus == -20 ) {
                document.body.style.background = "url(../images/winter.jpg)";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundSize = 'cover';
            }
            
        })
        elInput.value = "";
    }) 