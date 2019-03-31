function myFunction() {
    var inputNumber = document.getElementById("number").value;
    var outputNumber = 0;
    var divider = 0;
    var limiter = document.getElementById("limiter").value;

    for (var limit = 1; limit <= limiter; limit++) {
        var a = false;
        for (var i = 2; i <= limit; i++) {
           if (limit%i===0 && i!==limit) {
              a = true;
           };
        };
        if (a === false, limit != 1) {
           divider = limit;

           if (inputNumber % divider === 0) {
            outputNumber = inputNumber/divider;
            let newElement1 = document.createElement("p");
            newElement1.innerHTML = inputNumber+" | "+divider;
            document.body.appendChild(newElement1);
            let newElement = document.createElement("p");
            newElement.className = "outputs";
            newElement.innerHTML = outputNumber;
            document.body.appendChild(newElement);
            checker(outputNumber)
            changer()
            break
        };
        };
    };
    function checker(number) {
        for (var limit = 1; limit <= limiter; limit++) {
            var a = false;
            for (var i = 2; i <= limit; i++) {
               if (limit%i===0 && i!==limit) {
                  a = true;
               };
            };
            if (a === false, limit != 1) {
               divider = limit;

               if (number % divider === 0) {
                outputNumber = number/divider;
                let newElement = document.createElement("p");
                newElement.className = "outputs";
                newElement.innerHTML = outputNumber;
                document.body.appendChild(newElement);
                checker(outputNumber)
                changer()
                break
            };
            };
        };
    };
    function changer() {
        var numbers = document.getElementsByClassName("outputs");
        var array = Array.from(numbers);
        Array.from(numbers).forEach(num => {
            for (var limit = 1; limit <= limiter; limit++) {
                var a = false;
                for (var i = 2; i <= limit; i++) {
                   if (limit%i===0 && i!==limit) {
                      a = true;
                   };
                };
                if (a === false, limit != 1) {
                   divider = limit;

                   if (num.innerHTML % divider === 0) {
                    num.innerHTML = num.innerHTML + " | " + divider;
                    break
                };
                };
            };
        });
    };
};