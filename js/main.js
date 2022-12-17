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
        <div class="city w-25  d-flex justify-content-center mb-4  mx-auto text-warning bg-white bg-opacity-25 rounded-3 p-3">${data.name} , ${data.sys.country}</div>
        <div class="data d-flex justify-content-center gap-2 text-aligin-center mx-auto">
         <p class=" d-flex justify-content-center   ps-5 pe-5 rounded-4 bg-white bg-opacity-50" >${Math.round(data.main.temp - 273.15)} C</p>
        <p class=" d-flex justify-content-center   ps-5 pe-5 rounded-4 bg-white bg-opacity-50"> ${data.weather[0].main}</p>
        </div>    
        <div class = "d-flex justify-content-center mx-auto  w-25 mt-4 p-2   bg-white bg-opacity-50 rounded-4">  ${location}da harorat ${Math.round(data.main.temp - 273.15)} C </div>
        `

            if (data.name === "Tashkent") {
                document.body.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/2/22/Tashkent-City_name_statue.jpg)";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundSize = 'cover';
            }
            else if (data.weather[0].main == "Clouds") {
                document.body.style.backgroundImage = "url(https://wallpaperaccess.com/full/122935.jpg)";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundSize = 'cover';
            }
            else if (data.weather[0].main == "Clear") {
                document.body.style.backgroundImage = "url(https://thumbs.dreamstime.com/b/green-field-beautiful-day-2936128.jpg)";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundSize = 'cover';
            }
            else if (data.weather[0].main == "Rain") {
                document.body.style.backgroundImage = "url( https://en.shafaqna.com/wp-content/uploads/2015/10/16665fc353f93c955a95d886d9698521.jpg)";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundSize = 'cover';
            }
            else if (data.weather[0].main == "Snow") {
                document.body.style.backgroundImage = "url(https://d.newsweek.com/en/full/2153980/heavy-snow-weighs-down-tree-branches.jpg   )";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundSize = 'cover';
            } else if (data.weather[0].main == "Mist") {
                document.body.style.backgroundImage = "url(https://img4.goodfon.com/wallpaper/nbig/c/eb/burjkhalikfa-dubai-fog-mist.jpg)";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundSize = 'cover';
                document.body.style.backgroundPosition = 'center';
            }
            else {
                document.body.style.backgroundImage = "url(https://www.pixelstalk.net/wp-content/uploads/images6/Nature-HD-Wallpaper-Free-download.jpg)";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundSize = 'cover';
                document.body.style.backgroundPosition = 'center';
            }

        })
    elInput.value = "";
}) 