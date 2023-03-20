const uperset="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerset="abcdefghijklmnopqrstuvwzyz";
const numberset="1234567890";
const symbolSet = "~!@#$%^&*()_+/";

// selctor
const passwordBox=document.getElementById("pass-box")
const totalchar=document.getElementById("total-char")
const uperInput=document.getElementById("upper-case")
const lowerInput=document.getElementById("lower-case")
const numberInput=document.getElementById("numbers")
const symbolInput=document.getElementById("symbols")

const getRandomData=(dataset)=>
{
  return dataset[Math.floor(Math.random()*dataset.length)]
}

const generatePassword=(password=" ")=>{
  if(uperInput.checked)
  {
    password+=getRandomData(uperset)
  }
  if(lowerInput.checked)
  {
    password+=getRandomData(lowerset)
  }
  if(numberInput.checked)
  {
    password+=getRandomData(numberset)
  }
  if(uperInput.checked)
  {
    password+=getRandomData(uperset)
  }
  if(symbolInput.checked)
  {
    password+=getRandomData(symbolSet)
  }
  if(password.length<=totalchar.value)
  {
    return generatePassword(password)
  }
 passwordBox.innerText=truncateString(password,totalchar.value)
}
generatePassword();
document.getElementById("btn").addEventListener(
  "click",
  function()
  {
    generatePassword();
  }
)
function truncateString(str, num) {
  if (str.length > num) {
      let subStr = str.substring(0, num);
      return subStr;
  } else {
      return str;
  }
}