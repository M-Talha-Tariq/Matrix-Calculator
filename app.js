// const finalResult = document.querySelector('#result')
// const form = document.querySelector('#form-input');
// const sumBtn = document.querySelector("#sum");
// const box1 = document.querySelector('#input-box1');
// const box2 = document.querySelector('#input-box2');
// let matrixLength;
// let operation = "add";
// form.addEventListener('submit' , (event)=>{
//     event.preventDefault();

//     const matrixLength = Number (event.target.children[0].value);

//   box1.innerHTML = "";
//   box2.innerHTML = "";

//     for(i=0; i<matrixLength; i++){
//       for(j=0; j<matrixLength; j++){
//       box1.innerHTML += `<input type="number" id="talha-${i}${j}" style="width:30px" value="0">`;
//       box2.innerHTML += `<input type="number" id="bilal-${i}${j}" style="width:30px" value="0">`;
//     }
//     box1.innerHTML += "<br>";
//     box2.innerHTML += "<br>";
//   }
// })


// sumBtn.addEventListener('click' ,()=>{

//     if(operation === 'add'){
//         addMatrix()
//     }
//     else{
//         minusMatrix()
//     }
// })
  
// const addMatrix = () => {
//     finalResult.innerHTML = "";
  
//     for (let i = 0; i < matrixLength; i++) {
//       for (let j = 0; j < matrixLength; j++) {
//         const valueOfMatrix1 = document.querySelector(`#talha-${i}${j}`).value;
//         const valueOfMatrix2 = document.querySelector(`#bilal-${i}${j}`).value;
  
//         const result = Number(valueOfMatrix1) + Number(valueOfMatrix2);
  
//         finalResult.innerHTML += `<input disabled type="number" style="width: 30px;" value="${result}">`;
//       }
//       finalResult.innerHTML += "<br/>";
//     }
//   };

//   const minusMatrix = () => {
//     finalResult.innerHTML = "";
  
//     for (let i = 0; i < matrixLength; i++) {
//       for (let j = 0; j < matrixLength; j++) {
//         const valueOfMatrix1 = document.querySelector(`#talha-${i}${j}`).value;
//         const valueOfMatrix2 = document.querySelector(`#bilal-${i}${j}`).value;
  
//         const result = Number(valueOfMatrix1) - Number(valueOfMatrix2);
  
//         finalResult.innerHTML += `<input disabled type="number" style="width: 30px;" value="${result}">`;
//       }
//       finalResult.innerHTML += "<br/>";
//     }
//   };
  


const finalResult = document.querySelector('#result');
const form = document.querySelector('#form-input');
const sumBtn = document.querySelector("#sum");
const box1 = document.querySelector('#input-box1');
const box2 = document.querySelector('#input-box2');
const addBtn = document.querySelector('#add'); 
const subtractBtn = document.querySelector('#subtract');

let matrixLength;
//let operation = "add";

// Event listener for form submission to get the matrix size
form.addEventListener('submit', (event) => {
    event.preventDefault();

    matrixLength = Number(event.target.children[0].value); 

    box1.innerHTML = "";
    box2.innerHTML = "";

    for (let i = 0; i < matrixLength; i++) {
        for (let j = 0; j < matrixLength; j++) {
            box1.innerHTML += `<input type="number" id="talha-${i}${j}" style="width:30px" value="0">`;
            box2.innerHTML += `<input type="number" id="bilal-${i}${j}" style="width:30px" value="0">`;
        }
        box1.innerHTML += "<br>";
        box2.innerHTML += "<br>";
    }
});

addBtn.addEventListener('click', () => {
  operation = 'add'; 
   
});

subtractBtn.addEventListener('click', () => {
  operation = 'subtract'; 
});

sumBtn.addEventListener('click', () => {
  if (operation === "add") {
      addMatrix();
  } else {
      minusMatrix();
  }
        
});

const addMatrix = () => {
    finalResult.innerHTML = "";

    for (let i = 0; i < matrixLength; i++) {
        for (let j = 0; j < matrixLength; j++) {
            const valueOfMatrix1 = document.querySelector(`#talha-${i}${j}`).value;
            const valueOfMatrix2 = document.querySelector(`#bilal-${i}${j}`).value;

            const result = Number(valueOfMatrix1) + Number(valueOfMatrix2);

            finalResult.innerHTML += `<input disabled type="number" style="width: 30px;" value="${result}">`;
        }
        finalResult.innerHTML += "<br/>";
    }
};

const minusMatrix = () => {
    finalResult.innerHTML = "";

    for (let i = 0; i < matrixLength; i++) {
        for (let j = 0; j < matrixLength; j++) {
            const valueOfMatrix1 = document.querySelector(`#talha-${i}${j}`).value;
            const valueOfMatrix2 = document.querySelector(`#bilal-${i}${j}`).value;

            const result = Number(valueOfMatrix1) - Number(valueOfMatrix2);

            finalResult.innerHTML += `<input disabled type="number" style="width: 30px;" value="${result}">`;
        }
        finalResult.innerHTML += "<br/>";
    }
};
