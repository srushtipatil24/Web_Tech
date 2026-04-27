function convert(){

    let temp = document.getElementById("temp").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let result = document.getElementById("result");

    if(temp == ""){
        result.value = "Enter temperature";
        result.style.color = "red";
        return;
    }

    temp = Number(temp);

    let celsius;

    // Step 1: Convert to Celsius
    if(from === "C"){
        celsius = temp;
    }
    else if(from === "F"){
        celsius = (temp - 32) * 5/9;
    }
    else if(from === "K"){
        celsius = temp - 273.15;
    }

    let answer;

    // Step 2: Convert from Celsius to target
    if(to === "C"){
        answer = celsius;
    }
    else if(to === "F"){
        answer = (celsius * 9/5) + 32;
    }
    else if(to === "K"){
        answer = celsius + 273.15;
    }

    result.value = answer + " " + to;
    result.style.color = "green";
}