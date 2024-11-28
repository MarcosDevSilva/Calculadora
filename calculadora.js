const somar = (a, b) => {
    return a + b
}

const sub = (a, b) => {
    return a - b
}

const multiply = (a, b) => {
    return a * b
}

const divide = (a, b) => {
    return a / b
}

const calc = () => {
    if (cal === 1) {
        return somar(c1 , c2)

    }if (cal ===2) {
        return sub(c1, c2)  

    }if (cal === 3) {
        return multiply(c1, c2)
        
    }if (cal === 4) {
        return divide(c1, c2)
        
    } 
}



let cal = 3
let c1 = 8
let c2 = 2


console.log(calc())
