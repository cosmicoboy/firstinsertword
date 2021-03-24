let data=document.getElementById("data")
let text=document.getElementById("text")
let datanew=document.getElementById("newdata")
let newnewdata=document.getElementById("newnewdata")


const newdata=()=>{
    if(text.value === ""){
        alert("pone el texto wacho")
    }
    // así se hace un appenchild (encajar pibe):
    //console.log(text.value)
    // let newchild=document.createElement("h4")
    // newchild.innerText=text.value
    // datanew.appendChild(newchild)
    newnewdata.innerText= text.value

}