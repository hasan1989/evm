const buttonA = document.getElementById('ba');  
const buttonB = document.getElementById('bb'); 
const buttonC = document.getElementById('bc');
const buttonD = document.getElementById('bd');
const buttonE = document.getElementById('be');

buttonA.addEventListener('click', onClicka);
buttonB.addEventListener('click', onClickb);
buttonC.addEventListener('click', onClickc);
buttonD.addEventListener('click', onClickd);
buttonE.addEventListener('click', onClicke);

var clicka = 0;
function onClicka() {
  clicka += 1;
  document.getElementById("pa").innerHTML = clicka;
  return clicka
};
var clickb = 0; 
function onClickb() {
    clickb += 1;
    document.getElementById("pb").innerHTML = clickb;
  };
var clickc = 0; 
function onClickc() {
    clickc += 1;
    document.getElementById("pc").innerHTML = clickc;
};
var clickd = 0; 
function onClickd() {
    clickd += 1;
    document.getElementById("pd").innerHTML = clickd;
};

var clicke = 0; 
function onClicke() {
    clicke += 1;
    document.getElementById("pe").innerHTML = clicke;
};



// function onClick(i) {
//   clicka += 1;
//   clickb += 1;
//   document.getElementById("pa").innerHTML = clicka;
//   document.getElementById("pb").innerHTML = clickb;
// };
// const candidates = document.querySelectorAll('.candibtn');
// candidates.forEach((candidate) => {
//     candidate.addEventListener('click', (e) => {
//         const count = e.target;
//         const targetVar = count.innerHTML;
//         console.log(targetVar);
//         onClick()
//     })
// })

// function habijabi(i){
//     for (let i = 0; i < candidates.length; i++){
//  console.log(candidates[i]);
//  console.log(i);
//     }
// }

// let clicks = 0;

// function onClick() {
//   clicks += 1;
//   document.getElementById("demo").innerHTML = clicks;
// };


