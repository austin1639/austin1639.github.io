
function survey()  {
var text;
  var response = prompt("Do you like cars?");


switch(response) {
    case "yes":
        text = "Good job, continue to surf this webpage!";
        break;
    case "no":
        text = "How could you not like cars???";
        break;
    default:
        text = "Interesting.";
        break;

}
  
document.getElementById("demo").innerHTML = text;
}