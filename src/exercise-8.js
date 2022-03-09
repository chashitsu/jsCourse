
function printString(string) {
    console.log("Started: " + string);
    return new Promise(resolve => {
        setTimeout(() => { console.log(string); resolve() }, Math.floor(Math.random() * 100) + 1);
    })
}

function printAll() {
    printString("A")
        .then(() => printString("B")
                        .then(() => printString("C")))
}

printAll();

module.exports = printAll;