function printString(time, callback){
    setTimeout(
        ()=>{
            callback();
        },
        time
    )
}

function printAll(){
    printString( 100, () => { console.log("A") });
    printString( 200, () => { console.log("B") });
    printString( 300, () => { console.log("C") });
    
}


printAll();