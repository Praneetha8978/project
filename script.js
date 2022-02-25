let btn = document.getElementById('btn');
btn.addEventListener("click",getdata);
function getdata(){
    let name = document.getElementById('name').value;
    if(name == ""){
        document.getElementById('name').value = "enter the name";
    }
    let check =document.getElementById('check');
    if(check.checked==false){
        document.getElementById('p').innerHTML = "check the checkbox";
    }
   let sel = document.getElementById('sel').value;
    if(sel ==='BRANCH'){
        document.getElementById('v').innerHTML="enter the data";
    }
}