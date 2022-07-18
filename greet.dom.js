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

    var languageRadioBtn = document.querySelector("input[name='TheLanguage']:checked");
    let nameWithoutChar = /^[A-z]+$/.test(nameEntered.value);
    // alert(languageRadioBtn);
    // alert(nameEntered);

    if (nameWithoutChar == true || !nameEntered.value) {

        greetMessage.classList.remove('error');

        if (languageRadioBtn && nameEntered.value) {
            var lang = languageRadioBtn.value
            let copies = Greet.setNames(nameEntered.value)
            greetMessage.classList.remove('error');


            if (copies === true) {
                greetMessage.classList.remove('error');
                document.querySelector(".message").innerHTML = Greet.greet(nameEntered.value, lang)
                document.querySelector(".counter").innerHTML = Greet.nameCount()
                localStorage.setItem("Names", JSON.stringify(Greet.getNames()));
                
            }
            else {
                greetMessage.classList.remove('error');
                document.querySelector(".message").innerHTML = "This name is has already been used, please enter a different name"
                greetMessage.classList.add('error');
                
            }
        }
        else {

            greetMessage.classList.remove('error');

            if (nameEntered.value == '' && languageRadioBtn == undefined) {
                greetMessage.innerHTML = "Enter name and select a language"
                greetMessage.classList.add('error');

            } else if (nameEntered.value == '') {
                greetMessage.innerHTML = "Enter you name"
                greetMessage.classList.add('error');
                return;
            } else if (languageRadioBtn == undefined) {
                greetMessage.innerHTML = "Select a Language";
                greetMessage.classList.add('error');
                return;
            }
        }
    }
    else {
        greetMessage.innerHTML = "Use letters only";
        greetMessage.classList.add('error');
    }

    setTimeout(Greet.errorMessage, 1000);
})


resetBtn.addEventListener("click", () => {
    localStorage.clear();
    location.reload()
    document.querySelector("greetMessage") = "";

})