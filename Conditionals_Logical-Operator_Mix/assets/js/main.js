//##################################
// 
//         Functions basics
//          if else scopes
// 
//##################################

// console.log("test");

//----------------------------------------------- 
//             Functions-Vertiefung
//             (Konsole anschauen)
//----------------------------------------------- 

// Mein Alter berechnen und den Wert zurückgeben:

console.log("%c Functions Level-1_8",  "color: blue; background-color: gold");

function ageCalc(yearBorn)
{
    const currentYear = 2023;

    if(yearBorn != 0 && yearBorn > 1900 && yearBorn < currentYear) // Geburtsjahr auf Gültigkeit prüfen.
    {
        return currentYear - yearBorn;
    } 
    else
    {
        return 0; // bei ungültigem Geburtsjahr mit return 0; Programm beenden. 
    } 
} 

// Falls Geburtsjahr gültig, den zurückgegebenen Wert zwischenspeichern. Ansonsten User auf ungültigen Wert hinweisen.

let myAge = ageCalc(1986)

if (myAge !== 0 )
{
    console.log(myAge);
}
else
{
    console.log("Ungültiges Geburtsjahr!")
}
    

// Mein Alter vergleichen und die Differenz zurückgeben

function diffCalc(AgePersonOne, AgePersonTwo)
{
    if(AgePersonOne > AgePersonTwo)
    {
        return AgePersonOne - AgePersonTwo;
    }
    else
    {
        return AgePersonTwo - AgePersonOne;
    }

}
// Differenz ausgeben
console.log(diffCalc(myAge, 37));

//----------------------------------------------- 
//                 Conditionals
//----------------------------------------------- 

console.log("%c Conditionals-Level-2_1",  "color: blue; background-color: gold");

function calcWinner()
{
    // Player Daten erfassen.
    const playerOne = document.body.querySelector('#name1').value;
    const playerTwo = document.body.querySelector('#name2').value;
    const playerOneHeight = Number(document.body.querySelector('#height1').value);
    const playerOneAge = Number(document.body.querySelector('#age1').value);
    const playerTwoHeight = Number(document.body.querySelector('#height2').value);
    const playerTwoAge = Number(document.body.querySelector('#age2').value);

    let gameResult = document.body.querySelector('#result');
    let pointsPlayerOne;
    let pointsPlayerTwo;

    // Prüfen, ob alle Daten eingegeben wurden. Falls ja, Punkte ermitteln. Ansonsten User um Eingabe auffordern.
    if(playerOne != 0 && playerTwo != 0 && playerOneAge != 0 && playerTwoAge != 0 && playerOneHeight != 0 && playerTwoHeight !=0)
    {
        pointsPlayerOne = playerOneAge + playerOneHeight * 5;
        pointsPlayerTwo = playerTwoAge + playerTwoHeight * 5;
    }
    else
    {
        gameResult.textContent = "Bitte Spieler Daten eingeben!"
        return 0;
    }
    
    // Gewinner:in ermitteln.
    if(pointsPlayerOne > pointsPlayerTwo)
    {
        gameResult.textContent = playerOne + " erreicht " + pointsPlayerOne + " Punkte. " + playerTwo + " erreicht " + pointsPlayerTwo + " Punkte. Somit gewinnt " + playerOne + "!";
    }
    else if(pointsPlayerTwo > pointsPlayerOne)
    {
        gameResult.textContent = playerOne + " erreicht " + pointsPlayerOne + " Punkte. " + playerTwo + " erreicht " + pointsPlayerTwo + " Punkte. Somit gewinnt " + playerTwo + "!";
    }
    else
    {
        gameResult.textContent = playerOne + " erreicht " + pointsPlayerOne + " Punkte. " + playerTwo + " erreicht ebenfalls " + pointsPlayerTwo + " Punkte. Es ist ein Unentschieden!";
    }
}
