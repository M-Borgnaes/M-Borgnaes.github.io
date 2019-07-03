var div = document.querySelector(".town-info");
var request = new XMLHttpRequest();
request.open("GET", "https://byui-cit230.github.io/weather/data/towndata.json");
request.responseType = "json";
request.send();
request.onload = function () {
    var townData = request.response;
    var townArray = townData["towns"];

    for (var i = 0; i < townArray.length; i++) {
        if (townArray[i].name == "Fish Haven"  || townArray[i].name == "Preston" || townArray[i].name == "Soda Springs") {
            var section = document.createElement("section");
            var article = document.createElement("article");
            var h3 = document.createElement("h2");
            var para1 = document.createElement("p");
            var para2 = document.createElement("p");
            var para3 = document.createElement("p");
            var para4 = document.createElement("p");
            var para5 = document.createElement("br");
            var image = document.createElement("img");

            h3.textContent = townArray[i].name;
            para1.textContent = townArray[i].motto;
            para2.textContent = "Year Founded: " + townArray[i].yearFounded;
            para3.textContent = "Population: " + townArray[i].currentPopulation;
            para4.textContent = "Average Rainfall: " + townArray[i].averageRainfall + "\"";

            section.setAttribute("class", "tres-boxes");
            h3.setAttribute("class", "townh2");
            para1.setAttribute("class", "town-motto");
            para2.setAttribute("class", "town-p");
            para3.setAttribute("class", "town-p");
            para4.setAttribute("class", "town-p");
            image.setAttribute("class", "town-img");

            if (townArray[i].name == "Fish Haven") {
                image.setAttribute("src", "images/bear-lake-anon-pxhere.jpg" );
                image.setAttribute("alt", "bear lake and mountains");
            } else if (townArray[i].name == "Preston") {
                image.setAttribute("src", "images/preston-ken-lund-flickr.jpg");
                image.setAttribute("alt", "Preston, Idaho");
            } else if (townArray[i].name == "Soda Springs") {
                image.setAttribute("src", "images/soda-springs-klaus-stebani-pixabay.jpg");
                image.setAttribute("alt", "Soda Springs Idaho fountain");
            }

            article.appendChild(h3);
            article.appendChild(para1);
            article.appendChild(para5);
            article.appendChild(para2);
            article.appendChild(para3);
            article.appendChild(para4);
            section.appendChild(article);
            section.appendChild(image);
            div.appendChild(section);
        }
    }

}