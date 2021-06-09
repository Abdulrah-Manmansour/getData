


var data=[];
var ajax= new XMLHttpRequest();
ajax.open("GET","https://api.github.com/users");
ajax.send(); 
var rs='';

ajax.onreadystatechange= function(){
    if(ajax.readyState == 4 && ajax.status == 200){
        data= JSON.parse(ajax.response);
        for(var i =0; i< data.length; i++){
console.log(data[i] );
rs+=`<div class="item">
<img src="${data[i].avatar_url}" id="img-${i}">
<h1 onclick=show(${data[i].id})>${data[i].login}</h1>
<h2> ${data[i].type}</h2>

</div>`
        }
        document.getElementById("row").innerHTML=rs;
    }
}
var popup= document.getElementById("showBOX");

function show(x){
 x = x - 1 ;
 var name = data[x].login;

 var ajax= new XMLHttpRequest();
 ajax.onreadystatechange= function(){
    
    if(ajax.readyState == 4 && ajax.status == 200){
        data= JSON.parse(ajax.response);
        popup.innerHTML = `
        <img src= "${data.avatar_url}" class="img-box">
        <h1>${data.login}</h1>
        <h2>${data.type}</h2>
        <h2>${data.id}</h2>
      
        `
        popup.style.display="block";
    }
  
}

ajax.open("GET" , "https://api.github.com/users/" + name);
ajax.send();   
console.log(data[x].avatar_url);
}










