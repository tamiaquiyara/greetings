function Greetings(list) {

    var localStorageNames = list || []


    function greet(personName, language) {

        if (language === "eng") {
            return "Hello, " + personName
        } else if (language === "ger") {
            return "Guten Tag, " + personName
        } else if (language === "esp") {
            return "Hola, " + personName
        }
    }

    function errorMessege(name) {
        if (localStorageNames.includes(name)) {
            return true
        }
        return false
    }

    function setNames(personName) {
        if (errorMessege(personName) === false) {
            localStorageNames.push(personName)
            return true
        }
        else {
            return false;
        }

    }

    function getNames() {
        return localStorageNames
    }

    function nameCount() {
        return localStorageNames.length
    }

    return {
        greet,
        setNames,
        getNames,
        nameCount,
        errorMessege,
    }
}