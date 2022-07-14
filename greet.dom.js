// reference to the radio buttons
const languageRadioBtn = document.querySelector(".radio");
// reference to the greet me button
const greetMeBtn = document.querySelector(".greetButton");
// reference to reset button
const resetBtn = document.querySelector(".reset");
// reference to textbox
const nameEntered = document.querySelector(".nameEntered");
// reference to the message
const greetMessage = document.querySelector(".message");
// reference the the counter 
const counter = document.querySelector(".counter");

let greeted = localStorage.getItem("Names");
let greetNames = JSON.parse(greeted);

const Greet = Greetings(greetNames);

greetMeBtn.addEventListener("click", () => {

    var languageRadioBtn = document.querySelector("input[name='language']:checked");
    let nameWithoutChar = /^[A-z]+$/.test(nameEntered.value);
    alert(languageRadioBtn);
    alert(nameEntered);

    if (nameWithoutChar == true || !nameEntered.value) {

        if (languageRadioBtn && nameEntered.value) {
            var lang = languageRadioBtn.value
            let copies = Greet.setNames(nameEntered.value)


            if (copies === true) {
                document.querySelector(".message").innerHTML = Greet.greet(nameEntered.value, lang)
                document.querySelector(".counter").innerHTML = Greet.nameCount()
                localStorage.setItem("Names", JSON.stringify(Greet.getNames()));
                
            }
            else {
                document.querySelector(".message").innerHTML = "This name is has already been used, please enter a different name"
                
            }
        }
        else {

            if (nameEntered.value == '' && languageRadioBtn == undefined) {
                greetMessage.innerHTML = "Enter name and select a language"

            } else if (nameEntered.value == '') {
                greetMessage.innerHTML = "Enter you name"
                return;
            } else if (languageRadioBtn == undefined) {
                greetMessage.innerHTML = "Select a Language";
                return;
            }
        }
    }
    else {
        greetMessage.innerHTML = "Use letters only";

    }
})


resetBtn.addEventListener("click", () => {
    localStorage.clear();
    location.reload()
    document.querySelector("greetMessage") = "";

})