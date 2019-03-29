function myFunction() {
    var inputNumber = document.getElementById("number").value;
    var outputNumber = 0;

    function check(variable) {
        if (variable != 1) {
            if (variable % 2 === 0) {
                outputNumber = variable/2;
                let newElement = document.createElement("p");
                newElement.className = "outputs";
                newElement.innerHTML = outputNumber;
                document.body.appendChild(newElement);
                check(outputNumber);
            }
            else if(variable % 3 === 0) {
                outputNumber = variable/3;
                let newElement = document.createElement("p");
                newElement.className = "outputs";
                newElement.innerHTML = outputNumber;
                document.body.appendChild(newElement);
                check(outputNumber);
            }
        
            else if(variable % 5 === 0) {
                outputNumber = variable/5;
                let newElement = document.createElement("p");
                newElement.className = "outputs";
                newElement.innerHTML = outputNumber;
                document.body.appendChild(newElement);
                check(outputNumber);
            }
        
            else if(variable % 7 === 0) {
                outputNumber = variable/7;
                let newElement = document.createElement("p");
                newElement.className = "outputs";
                newElement.innerHTML = outputNumber;
                document.body.appendChild(newElement);
                check(outputNumber);
            }
        
            else if(variable % 11 === 0) {
                outputNumber = variable/11;
                let newElement = document.createElement("p");
                newElement.className = "outputs";
                newElement.innerHTML = outputNumber;
                document.body.appendChild(newElement);
                check(outputNumber);
            }
        
            else if(variable % 13 === 0) {
                outputNumber = variable/13;
                let newElement = document.createElement("p");
                newElement.className = "outputs";
                newElement.innerHTML = outputNumber;
                document.body.appendChild(newElement);
                check(outputNumber);
            }
        
            else if(variable % 17 === 0) {
                outputNumber = variable/17;
                let newElement = document.createElement("p");
                newElement.className = "outputs";
                newElement.innerHTML = outputNumber;
                document.body.appendChild(newElement);
                check(outputNumber);
            }
        
            else if(variable % 19 === 0) {
                outputNumber = variable/19;
                let newElement = document.createElement("p");
                newElement.className = "outputs";
                newElement.innerHTML = outputNumber;
                document.body.appendChild(newElement);
                check(outputNumber);
            }
        
            else if(variable % 23 === 0) {
                outputNumber = variable/23;
                let newElement = document.createElement("p");
                newElement.className = "outputs";
                newElement.innerHTML = outputNumber;
                document.body.appendChild(newElement);
                check(outputNumber);
            }

            else {
                let newElement = document.createElement("p");
                newElement.className = "outputs";
                newElement.innerHTML = 1
                document.body.appendChild(newElement);
            };
        };
    };

    if (inputNumber % 2 === 0) {
        outputNumber = inputNumber/2;
        let newElement1 = document.createElement("p");
        newElement1.innerHTML = inputNumber+" | 2";
        document.body.appendChild(newElement1);
        let newElement = document.createElement("p");
        newElement.className = "outputs";
        newElement.innerHTML = outputNumber;
        document.body.appendChild(newElement);
        check(outputNumber);
    }
    else if(inputNumber % 3 === 0) {
        outputNumber = inputNumber/3;
        let newElement1 = document.createElement("p");
        newElement1.innerHTML = inputNumber+" | 3";
        document.body.appendChild(newElement1);
        let newElement = document.createElement("p");
        newElement.className = "outputs";
        newElement.innerHTML = outputNumber;
        document.body.appendChild(newElement);
        check(outputNumber);
    }

    else if(inputNumber % 5 === 0) {
        outputNumber = inputNumber/5;
        let newElement1 = document.createElement("p");
        newElement1.innerHTML = inputNumber+" | 5";
        document.body.appendChild(newElement1);
        let newElement = document.createElement("p");
        newElement.className = "outputs";
        newElement.innerHTML = outputNumber;
        document.body.appendChild(newElement);
        check(outputNumber);
    }

    else if(inputNumber % 7 === 0) {
        outputNumber = inputNumber/7;
        let newElement1 = document.createElement("p");
        newElement1.innerHTML = inputNumber+" | 7";
        document.body.appendChild(newElement1);
        let newElement = document.createElement("p");
        newElement.className = "outputs";
        newElement.innerHTML = outputNumber;
        document.body.appendChild(newElement);
        check(outputNumber);
    }

    else if(inputNumber % 11 === 0) {
        outputNumber = inputNumber/11;
        let newElement1 = document.createElement("p");
        newElement1.innerHTML = inputNumber+" | 11";
        document.body.appendChild(newElement1);
        let newElement = document.createElement("p");
        newElement.className = "outputs";
        newElement.innerHTML = outputNumber;
        document.body.appendChild(newElement);
        check(outputNumber);
    }

    else if(inputNumber % 13 === 0) {
        outputNumber = inputNumber/13;
        let newElement1 = document.createElement("p");
        newElement1.innerHTML = inputNumber+" | 13";
        document.body.appendChild(newElement1);
        let newElement = document.createElement("p");
        newElement.className = "outputs";
        newElement.innerHTML = outputNumber;
        document.body.appendChild(newElement);
        check(outputNumber);
    }

    else if(inputNumber % 17 === 0) {
        outputNumber = inputNumber/17;
        let newElement1 = document.createElement("p");
        newElement1.innerHTML = inputNumber+" | 17";
        document.body.appendChild(newElement1);
        let newElement = document.createElement("p");
        newElement.className = "outputs";
        newElement.innerHTML = outputNumber;
        document.body.appendChild(newElement);
        check(outputNumber);
    }

    else if(inputNumber % 19 === 0) {
        outputNumber = inputNumber/19;
        let newElement1 = document.createElement("p");
        newElement1.innerHTML = inputNumber+" | 19";
        document.body.appendChild(newElement1);
        let newElement = document.createElement("p");
        newElement.className = "outputs";
        newElement.innerHTML = outputNumber;
        document.body.appendChild(newElement);
        check(outputNumber);
    }

    else if(inputNumber % 23 === 0) {
        outputNumber = inputNumber/23;
        let newElement1 = document.createElement("p");
        newElement1.innerHTML = inputNumber+" | 23";
        document.body.appendChild(newElement1);
        let newElement = document.createElement("p");
        newElement.className = "outputs";
        newElement.innerHTML = outputNumber;
        document.body.appendChild(newElement);
        check(outputNumber);
    };
    changer()
};
function changer() {
    var numbers = document.getElementsByClassName("outputs");
    var array = Array.from(numbers);
    Array.from(numbers).forEach(num => {
        console.log(num.innerHTML);
        if (num.innerHTML % 2 === 0) {
            num.id = "two";
        }
        else if (num.innerHTML % 3 === 0) {
            num.id = "three";
        }
        else if (num.innerHTML % 5 === 0) {
            num.id = "five";
        }
        else if (num.innerHTML % 7 === 0) {
            num.id = "seven";
        }
        else if (num.innerHTML % 11 === 0) {
            num.id = "eleven";
        }
        else if (num.innerHTML % 13 === 0) {
            num.id = "thirteen";
        }
        else if (num.innerHTML % 17 === 0) {
            num.id = "seventeen";
        }
        else if (num.innerHTML % 19 === 0) {
            num.id = "nineteen";
        }
        else if (num.innerHTML % 23 === 0) {
            num.id = "twentythree";
        };
    });
};