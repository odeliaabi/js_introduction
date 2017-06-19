
var priceHt = prompt("Enter your price without taxe:");
priceTtc= priceHt * 1.196;
alert("The product price all inclusive is :  " + priceTtc);

var number = Number(prompt("Enter un number :"));
if (number > 0) {
    alert(number + " is positive");
}
else
{
	alert(number+" is not positive");
}

var meteo = prompt("What the weather like ?");
switch (meteo) {
case "sunny":
    //console.log("Sortez en t-shirt.");
    alert("You should wear a t-shirt.");
    break;
case "windy":
    //console.log("Sortez en pull.");
    alert("You should wear a pull.");
    break;
case "running":
    //console.log("Sortez en blouson.");
    alert("You should wear a jacket.");
    break;
case "snowing":
    //console.log("Restez au chaud à la maison.");
    alert("You should stay at home.");
    break;
default:
    //console.log("Je n'ai pas compris !");
    alert("I dont understand what you have write!");
}