// let num=document.getElementById("num");
let value=0;

let x =document.querySelector(".dec");
let y=document.querySelector(".inc");
let z=document.querySelector(".reset");

 x.addEventListener("click",()=>
{
  if (value>0)
    {value--;
    num.textContent=value;
    }
}
);
 y.addEventListener("click",()=>
{
    value++;
    num.textContent=value;
}
);
 z.addEventListener("click",()=>
{
    value=0;
    num.textContent=value;
}
);

// let num = document.getElementById("num");
// let value = 0;
// let x = document.querySelector(".inc");
// let btnDec = document.querySelector(".dec");
// let btnReset = document.querySelector(".reset");
// x.addEventListener("click", () => {
//   value++;
//   num.textContent = value;
// });
// btnDec.addEventListener("click", () => {
//   value--;
//   num.textContent = value;
// });
// btnReset.addEventListener("click", () => {
//   value = 0;
//   num.textContent = value;
// });