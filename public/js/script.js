// console.log("Hello world");
// var equipas = ["Marco", "Marcela", "Vasco", "Antonio"];

// var random = Math.random();
//#region post
function Get(host, controllerName, value)
{
    var request = new XMLHttpRequest();
    request.onreadystatechange = function()
    {
        alert(this.status)
        if(this.readyState == 4 && this.status == 200)
        {
            alert("Added");
        }
    };

    request.open("GET", host+"/api/"+controllerName+"/"+value)
    request.setRequestHeader("Content-type", "text/json");
    request.send(JSON.stringify(value));

}
//#endregionre

//#region post
function Post(host, controllerName, value)
{
    var request = new XMLHttpRequest();
    request.onreadystatechange = function()
    {
        alert(this.status)
        if(this.readyState == 4 && this.status == 200)
        {
            alert("Added");
        }
    };

    request.open("POST", host+"/api/"+controllerName)
    request.setRequestHeader("Content-type", "text/json");
    request.send(JSON.stringify(value));

}
//#endregion post

//#region post
function Put(host, controllerName, value)
{
    var request = new XMLHttpRequest();
    request.onreadystatechange = function()
    {
        alert(this.status)
        if(this.readyState == 4 && this.status == 200)
        {
            alert("Added");
        }
    };

    request.open("POST", host+"/api/"+controllerName)
    request.setRequestHeader("Content-type", "text/json");
    request.send(JSON.stringify(value));

}
//#endregion post


var btn = document.getElementById("btn");
var inputName = document.getElementById("name-input");
var nameSpan = document.getElementById("name-error-span");

console.log(btn);
console.log(inputName);
console.log(nameSpan);

btn.addEventListener("click", () =>
{
    var nameValue = inputName.value;
    if(nameValue == "")
    {
        alert("fail")
        nameSpan.style.setProperty("display", "block");
    }
    else
    {
        var value={"name" : nameValue}
        nameSpan.style.setProperty("display", "none");
        // alert("Hello"+nameValue);  
        Post("https://localhost:44351","dietaryrestriction", value)      
    }

});