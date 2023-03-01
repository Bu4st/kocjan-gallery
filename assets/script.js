let btn = document.getElementById('btn')
let logo = document.getElementById('logo')

// wersja mobile
// <!-- Gdy kliknie sie w logo odpala sie specjalne okno!
//             haslo: kocjan
//             kolory: niebieski , zielony , czerwony -->
btn.addEventListener('click', () => {

let first_password = prompt("Wpisz hasło , aby kontynuować")
if (first_password == "kocjan") {
let query = prompt("Na jaki odcień zmienić stronę?")
if (query == "niebieski") {
    document.body.style.filter = "hue-rotate(320deg)"
} else if (query == "czerwony") {
    document.body.style.filter = "hue-rotate(90deg)"
} else if (query == "zielony") {
    document.body.style.filter = "hue-rotate(200deg)"
} else {
    alert("Nie mamy takiego koloru :(")
}
} else {
    alert("Nieprawidłowe haslo")
} 
})


// wersja desktop
logo.addEventListener('click', () => {

    let first_password = prompt("Wpisz hasło , aby kontynuować")
    if (first_password == "kocjan") {
    let query = prompt("Na jaki odcień zmienić stronę?")
    if (query == "niebieski") {
        document.body.style.filter = "hue-rotate(320deg)"
    } else if (query == "czerwony") {
        document.body.style.filter = "hue-rotate(90deg)"
    } else if (query == "zielony") {
        document.body.style.filter = "hue-rotate(250deg)"
    } else {
        alert("Nie mamy takiego koloru :(")
    }
    } else {
        alert("Nieprawidłowe haslo")
    } 
    })

