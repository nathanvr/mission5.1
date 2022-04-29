//Ejercicio 1
const factura = [
    {id_bill:1,
    client: "jefry",
    date: "25/12/2020",
    items:[{
        id_item:"0004345",
        price: 234,
        qty: 3
    },
    {
        id_item:"0004334",
        price: 24,
        qty: 10
    }]
},
{id_bill:2,
    client: "jefry",
    date: "26/12/2020",
    items:[{
        id_item:"0004345",
        price: 234,
        qty: 3
    },
    {
        id_item:"0004334",
        price: 24,
        qty: 10
    }]
}
]
// //items de la primer factura
// console.log(factura[0].items)

// Ejercicio 2
// Solucuin #1
const createContador1 = () =>{
    let acum = 0;
    const incrementar= () => {
        return acum +=1;
    }
    return incrementar
};

// Solucuin #2
const createContador2 = () =>{
    let acum = 0;
    return ()=>{
        return acum +=1
    }
};

// const contar = createContador1()

// console.log(contar()) // 1
// console.log(contar()) // 2
// console.log(contar()) // 3



//Ejercicio 3
const createGame = () =>{
    const secretNumber = 5;
    return (num) =>{
        if (num === secretNumber) return "Lo adivinaste, felicitaciones!"
        if (num > secretNumber) return "Muy alto!"
        if (num < secretNumber) return "Muy Bajo"

    }
}

//------------------------------------------------------------------------------------------------------
const createGame2 = () =>{
    const secretNumber = 5;
    return (num) =>{
        if (num === secretNumber) return "Lo adivinaste, felicitaciones!"
        if (num > secretNumber) return "Muy alto!"
        if (num < secretNumber) return "Muy Bajo"

    }
}


// const guess = createGame() // numero secreto: 5
// console.log(guess(8)) // "Muy alto!"
// console.log(guess(4)) // "Muy bajo!"
// console.log(guess(5)) // "Lo adivinaste, felicitaciones!"

//Bonus

const createGameE = () => {
    const secretNumber = 5;
    const guessNumber = () => {
      process.stdin.on("data", (data) => {
        let userNumber = parseInt(data);
        if (userNumber === secretNumber) {
          console.log("adivinaste");
          process.exit();
        }
        if (userNumber <= secretNumber) {
          console.log("Muy bajo");
        }
        if (userNumber >= secretNumber) {
          console.log("Muy Alto");
        }
      });
    };
    return guessNumber;
  };
  