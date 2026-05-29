console.log("Welcome to the Community Portal");

window.onload = function(){
    alert("Page Loaded Successfully");
};

const eventName = "Music Festival";
const eventDate = "20-Aug-2026";
let seats = 50;

console.log(`${eventName} on ${eventDate}`);

function registerSeat(){
    seats--;
    console.log("Seats Left:", seats);
}

/* Event Class */

class Event{

    constructor(name,category,seats){
        this.name=name;
        this.category=category;
        this.seats=seats;
    }

    checkAvailability(){
        return this.seats > 0;
    }

}

const events=[

new Event("Music Festival","Music",20),
new Event("Food Fair","Food",10),
new Event("Sports Meet","Sports",0)

];

/* Loop */

events.forEach(event=>{

if(event.checkAvailability()){

console.log(event.name);

}

});

/* Array Methods */

events.push(
new Event("Art Show","Art",15)
);

const musicEvents=
events.filter(
e=>e.category==="Music"
);

console.log(musicEvents);

const display=
events.map(
e=>`Workshop on ${e.name}`
);

console.log(display);

/* DOM */

document.addEventListener(
"DOMContentLoaded",
()=>{

const container=
document.querySelector("#eventContainer");

if(container){

events.forEach(event=>{

const card=
document.createElement("div");

card.className="eventCard";

card.innerHTML=
`<h3>${event.name}</h3>
<p>${event.category}</p>
<button onclick="registerUser('${event.name}')">
Register
</button>`;

container.appendChild(card);

});

}

}
);

/* Functions */

function addEvent(event){
events.push(event);
}

function registerUser(name){

try{

alert(
`Registered for ${name}`
);

}
catch(error){

console.log(error);

}

}

function filterEventsByCategory(category){

return events.filter(
event=>event.category===category
);

}

/* Closure */

function registrationTracker(){

let count=0;

return function(){

count++;

return count;

}

}

const musicTracker=
registrationTracker();

/* Local Storage */

function savePreference(category){

localStorage.setItem(
"preferredCategory",
category
);

}

/* Async */

fetch(
"https://jsonplaceholder.typicode.com/users"
)
.then(response=>response.json())
.then(data=>console.log(data))
.catch(error=>console.log(error));

async function getEvents(){

try{

const response=
await fetch(
"https://jsonplaceholder.typicode.com/users"
);

const data=
await response.json();

console.log(data);

}
catch(error){

console.log(error);

}

}

getEvents();

/* Form */

function submitForm(event){

event.preventDefault();

const form=
event.target;

const name=
form.elements["name"].value;

const email=
form.elements["email"].value;

if(name==="" || email===""){

alert("Please fill all fields");

return;

}

alert("Form Submitted");

}

/* AJAX */

function sendRegistration(){

setTimeout(()=>{

alert("Registration Sent Successfully");

},2000);

}
function createRegistrationCounter(){

    let count = 0;

    return function(){

        count++;
        return count;

    };
}

const musicCounter =
createRegistrationCounter();

const container =
document.querySelector("#eventContainer");

events.forEach(event=>{

const card =
document.createElement("div");

card.innerHTML =
`<h3>${event.name}</h3>`;

container.appendChild(card);

});

document
.getElementById("searchBox")
.addEventListener(
"keydown",
function(event){

console.log(event.key);

}
);

document
.getElementById("registerForm")
.addEventListener(
"submit",
function(event){

event.preventDefault();

const form =
event.target;

const name =
form.elements["name"].value;

const email =
form.elements["email"].value;

}
);

fetch(
"https://jsonplaceholder.typicode.com/posts",
{
method:"POST",

headers:{
"Content-Type":
"application/json"
},

body:JSON.stringify({
name:"Srividya",
event:"Music Festival"
})

}
)
.then(response=>response.json())
.then(data=>console.log(data))
.catch(error=>console.log(error));