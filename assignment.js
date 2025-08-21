function myFunction() {
    let  voteable;
    let age = Number(document.getElementById("age").value);
    if(isNaN(age)){
        voteable = "Input i not a number";
    } else{
        voteable = (age < 18) ? "TOO YOUNG" : "Old enough";
    }
    document.getElementById("log").innerHTML = voteable + " " + "to vote!";
}