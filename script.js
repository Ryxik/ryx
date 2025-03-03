// Zobrazí uvítací zprávu při načtení stránky
window.onload = function() {
    alert("Vítej na mé webové stránce!");
};

// Funkce na změnu barvy nadpisu po kliknutí
function zmenBarvu() {
    let nadpis = document.getElementById("hlavni-nadpis");
    
    // Přepínání mezi barvami modrá a červená
    if (nadpis.style.color === "blue") {
        nadpis.style.color = "red";
    } else {
        nadpis.style.color = "blue";
    }
}
