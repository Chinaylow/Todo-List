

//creating the delete button
function creatDel(){
var list = document.getElementsByTagName('li');
for(let i = 0; i < list.length; i++ ){
    var span = document.createElement("SPAN");
    var close = document.createTextNode("\u00D7");
    span.classList.add('close');
    span.appendChild(close);
    list[i].appendChild(span);
    clearAll()
 }
}
creatDel();

//making the delete button functional
function clearAll(){
var clear = document.querySelectorAll('.close');
for(let j = 0; j < clear.length; j++){
    clear[j].addEventListener('click', function(){
        clear[j].parentElement.remove();
    

    })
}
}

//adding a new list and creating error message
var error = document.querySelector('.error')
var myUl = document.getElementById('list');
var btn = document.querySelector(".btn");
var inputItem = document.querySelector(".key-in");
function newList(){
    if(inputItem.value == 0){
        error.innerHTML = "Please write something";


    }
    else{
        var li = document.createElement("li");
        var txtNode = document.createTextNode(inputItem.value);
        var span = document.createElement("SPAN");
        var close = document.createTextNode("\u00D7");
        li.appendChild(txtNode);
        myUl.appendChild(li)
        error.innerHTML = "";
        inputItem.value = "";


    }
    clearAll();
    creatDel()
}
//make the add button execute the addition of new list
btn.addEventListener('click', newList);

//make the enter key add a new list
document.addEventListener('keydown', function(e){
if(e.key == "Enter"){
    newList();
}
})