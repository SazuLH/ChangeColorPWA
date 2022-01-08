/*Nuestro codigo principal*/

if("ServiceWorker" in navigator)
{
    navigator.serviceWorker.register("sw.js").then(registration =>{
        console.log("SW Registered!");
        console.log(registration);

    }).catch(error =>{
        console.log("SW Registration failed!");
        console.log(error);
    })
}

function ChangeColor(value) 
{
    var color = document.body.style.backgroundColor;

    switch (value) {
        case "y":
            color = "#FFE400"
            break;
        case "r":
            color = "#FF1700"
            break;
        case "p":
            color = "#9A0680"
            break;
        case "b":
            color = "#548CFF"
            break;
        default:
            color = "#F7F7F7";
            break;
    }
    document.body.style.backgroundColor = color;
}