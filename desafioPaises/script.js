function getCountryInfo() {
  var select = document.getElementById("country-select");
  var countryName = select.value;
  if (countryName === "") {
    // Oculta as informações se nenhum país for selecionado
    document.getElementById("country-info").style.display = "none";
    return;
  }

  // Faz a requisição para a API
  var url = "https://restcountries.com/v3.1/name/" + countryName + "?fullText=true";
  fetch(url)
    .then(response => response.json())
    .then(data => {
      var country = data[0];
      console.log(country);

      var name = country.name.common;
      var capital = country.capital?.[0] ;
      var population = country.population?.toLocaleString() ;
      var urlbandeira = country.flags?.png;
      var moeda = country.currencies?.[Object.keys(country.currencies)[0]]?.name ;
      var languages = Object.values(country.languages || {}).join(", ") ;
      var continente = country.region ;

      document.getElementById("country-name").textContent = name;
      document.getElementById("country-capital").textContent = "Capital: " + capital;
      document.getElementById("country-population").textContent = "População: " + population;
      document.getElementById("country-bandeira").src = urlbandeira;
      document.getElementById("country-moeda").textContent = "Moeda: " + moeda;
      document.getElementById("country-idioma").textContent = "Idioma(s): " + languages;
      document.getElementById("country-continente").textContent = "Continente: " + continente;

      // Exibe as informações
      document.getElementById("country-info").style.display = "block";
    })
    .catch(error => {
      console.log("Erro ao buscar informações do país:", error);
    });
}