async function printString(string) {
    console.log("Started: " + string);
    return new Promise(resolve => {
        setTimeout(() => { console.log(string); resolve() }, Math.floor(Math.random() * 100) + 1);
    })
}

async function printAll() {
    await printString("1");
    await printString("2");
    await printString("3");
}

printAll();