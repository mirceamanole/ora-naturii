// Select DOM elements

const time = document.getElementById('time');
const greeting = document.getElementById("greeting");
const nume = document.getElementById('nume');
const task = document.getElementById('task');

// show time function and change background every 15 seconds

function showTime() {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    if (sec < 15) {
        document.body.style.backgroundImage = "url('./images/1.jpg')";
    } else if (sec < 30) {
        document.body.style.backgroundImage = "url('./images/3.jpg')";
    } else if (sec < 45) {
        document.body.style.backgroundImage = "url('./images/4.jpg')";
        document.body.style.color = "black";
    } else {
        document.body.style.backgroundImage = "url('./images/5.jpg')";
        document.body.style.color = "white";
    }

    time.innerHTML = `${addZero(hour)}:${addZero(min)}:${addZero(sec)}`;

    setTimeout(showTime, 1000);
}

//Add 0 for seconds <10
function addZero(n) {
    if (n < 10) {
        return ('0' + n)
    } else return n;
}

//Get Name in local stare
function getNume() {
    if (localStorage.getItem('nume') === null) {
        nume.textContent = '[Enter Name]';
    } else nume.textContent = localStorage.getItem('nume')
}

//Set Name on interface on enter and blur
function setNume(e) {
    if (e.type === 'keydown') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('nume', e.target.innerText)
            nume.blur();
        }
    } else {
        localStorage.setItem('nume', e.target.innerText)
    }
}

nume.addEventListener('keydown', setNume)
nume.addEventListener('blur', setNume)

//Get Task in local storage
function getTask() {
    if (localStorage.getItem('task') === null) {
        task.textContent = '[Enter Task]';
    } else task.textContent = localStorage.getItem('task')
}

//Set Task on interface on enter and blur
function setTask(e) {
    if (e.type === 'keydown') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('task', e.target.innerText)
            task.blur();
        }
    } else {
        localStorage.setItem('task', e.target.innerText)
    }
}
task.addEventListener('keydown', setTask)
task.addEventListener('blur', setTask)

//Run:

showTime();
getNume();
getTask();
setNume();
setTask();

