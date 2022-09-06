let name = prompt("Adinizi Giriniz:")

let myName = document.querySelector("#myName")

    myName.innerHTML = `
        ${myName.innerHTML} ${name}
    `

function date() {

    let momentary = new Date()
    let saat = momentary.getHours()
    let dakika = momentary.getMinutes()
    let saniye = momentary.getSeconds()
    let _date = new Date()
    let days = ["Pazar","Pazartesi","Sali","Carsamba","Persembe","Cuma","Cumartesi"]
    let yigittn = document.querySelector("#myClock")
    yigittn.innerHTML = saat + ":" + dakika + ":" + saniye + " " + days[_date.getDay()]

}

setInterval(date,100)
