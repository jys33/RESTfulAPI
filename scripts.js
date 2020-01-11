const output = document.querySelector("#output");
const url = "https://restcountries.eu/rest/v2/all";
let myData = {};

fetch(url).then(function (res) {
    return res.json()
}).then(function (data) {
    myData = data;

    buildSelect(data);
})

function buildSelect(d) {
    let select = document.createElement('select');
    select.setAttribute("class", "custom-select");
    let option;
    d.forEach(function (item, index) {
        option = document.createElement('option');
        option.value = index;
        option.textContent = item.name;
        select.appendChild(option);
    })
    select.addEventListener("change", outputData);

    document.querySelector('main').appendChild(select);
}

function outputData(e) {
    // console.log(e);
    // console.log(e.target.value);
    // console.log(myData[e.target.value]);
    let obj = myData[e.target.value];
    document.querySelector('img').src = obj.flag;
    document.querySelector('img').alt = `Flag of ${obj.name}`;

    output.innerHTML = `<p class="mt-3 font-weight-bold">País: <span>${obj.nativeName}</span></p>
    <p class="font-weight-bold">Capital: <span>${obj.capital}</p>
    <p class="font-weight-bold">Población: <span>${obj.population.toLocaleString()} habitantes</span></p>
    <p class="font-weight-bold">Idioma: <span>${obj.languages[0].nativeName}</span></p>
    <p class="font-weight-bold">Región: <span>${obj.region}</span></p>
    <p class="font-weight-bold">Subregión: <span>${obj.subregion}</span></p>`;
}