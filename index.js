// Write your code in this file!

function scuberGreetingForFeet(someValue) {
    let result;     
    let feet = someValue;
    if (feet <= 400) {
            result = "This one is on me!";
        }
    else if (feet > 2000 && feet <= 2500) {
            result = "I will gladly take your thirty bucks.";
        }
    else if (feet > 2500) {
            result = "No can do.";
        }
    return result;

}

function ternaryCheckCity(someValue) {
        let city = someValue;
        let result;
        
        if (city == "NYC") {
        result = "Ok, sounds good.";
        }
        else {
            result = "No go."
        }
        return result;
}

function switchOnCharmFromTip(someValue){
    let tip = someValue;
    let result 
    switch(tip) {
        case "generous":
            return "Thank you so much."
            break;
        case "not as generous":
            return "Thank you."
            break;
        default: 
            return "Bye."
            break;
    }
    result;   
}