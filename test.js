var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("temps-paris").innerHTML = response.current_condition.condition;
    }
};
request.open("GET", "https://www.prevision-meteo.ch/services/json/paris");
request.send();