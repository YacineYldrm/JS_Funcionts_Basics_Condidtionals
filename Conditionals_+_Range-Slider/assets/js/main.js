//##################################
// 
//         Functions basics
//          if else scopes
// 
//##################################

//----------------------------------------------- 
//             Functions-Vertiefung
//          Conditionals + Range-Slider
//----------------------------------------------- 

// Air-Quality Bereiche nach AQI
// 0 - 50 GOOD
// 51 - 100 MODERATE
// 101 - 150 UNHEALTHY FOR SENSITIVE GROUPS
// 151 - 200 UHEALTHY

const rangeValueText = document.body.querySelector('#rangeValue');
const concernText = document.body.querySelector('#concern_text');
const effectText = document.body.querySelector('#effect_text');
const bgColor = document.body.classList;

// Funktion checkAirQuality() deklarieren
function checkAirQuality()
{
    let sliderPosition = Number(document.body.querySelector('form input').value);

    rangeValueText.textContent = sliderPosition;

    // Wertebereich prüfen, Ergebnis in HTML ausgeben und bg-color anpassen
    if (sliderPosition <= 50)
    {
        concernText.textContent = "Level of health concern: Good.";
        effectText.textContent = "Level of health effect: Little or no risk.";
        bgColor.remove('levelModerate', 'levelUnhealthy', 'levelGood');
        bgColor.add('levelGood');
    }
    else if (sliderPosition > 50 && sliderPosition <= 100)
    {
        concernText.textContent = "Level of health concern: Moderate.";
        effectText.textContent = "Level of health effect: Acceptable quality.";
        bgColor.remove('levelModerate', 'levelUnhealthy', 'levelGood');
        bgColor.add('levelModerate');
    } 
    else if (sliderPosition > 100 && sliderPosition <= 150)
    {
        concernText.textContent = "Level of health concern: Unhealthy for sensitive groups.";
        effectText.textContent = "Level of health effect: Generable publics not likely affected.";
        bgColor.remove('levelModerate', 'levelUnhealthy', 'levelGood');
        bgColor.add('levelUnhealthy');
    }
        
}

