function abs(x) {
    if (x>=0) {
        return x
    }
    else if (x<0) {
        return -x
    }
}

function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return true;
  }

function egd(x) {
}

function rozklad(x) {
    var zbior1 = []
    var zbior2 = []
    function twojastara(y) {
        var array = []
        var a = false
        for(var i = 1; i <= 100; i++) {
            for(var h = 2; h < i; h++) {
                if(i % h === 0) {a = true}
            }
            if(a===false,i!==1) {
                if(y%i===0) {
                    array.push(y+"|"+i)
                    array.push(y/i)
                    return array
                }
            }
        }
    }
    zbior1.push(twojastara(x)[0])
    zbior2.push(twojastara(x)[1])
    while (zbior2[(zbior2.length)-1]>1) {
        zbior1.push(twojastara(zbior2[(zbior2.length)-1])[0])
        zbior2.push(twojastara(zbior2[(zbior2.length)-1])[1])
    }
    if(zbior2[(zbior2.length)-1]==1) {
        zbior1.push("1")
    }
    console.log(zbior1)
    console.log(zbior2)

    zbior1.forEach(element => {
        let newElement = document.createElement("p")
        newElement.innerHTML = element
        document.body.appendChild(newElement)
    })
}