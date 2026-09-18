const display = document.getElementById("display");

const buttons = document.querySelectorAll("[data-value]");

const clearButton = document.getElementById("clear");

const deleteButton = document.getElementById("delete");

const equalsButton = document.getElementById("equals");


let angka = "";


/* =====================================================
   TOMBOL ANGKA DAN OPERATOR
===================================================== */

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        angka += button.dataset.value;

        display.textContent = angka;

    });

});


/* =====================================================
   CLEAR
===================================================== */

clearButton.addEventListener("click", function() {

    angka = "";

    display.textContent = "0";

});


/* =====================================================
   HAPUS SATU ANGKA
===================================================== */

deleteButton.addEventListener("click", function() {

    angka = angka.slice(0, -1);

    if (angka === "") {

        display.textContent = "0";

    } else {

        display.textContent = angka;

    }

});


/* =====================================================
   HASIL
===================================================== */

equalsButton.addEventListener("click", function() {

    if (angka === "") {
        return;
    }

    try {

        let ekspresi = angka
            .replace(/×/g, "*")
            .replace(/÷/g, "/")
            .replace(/−/g, "-");


        let hasil = eval(ekspresi);


        display.textContent = hasil;

        angka = hasil.toString();


    } catch (error) {

        display.textContent = "Error";

        angka = "";

    }

});