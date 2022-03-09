function addString(previous, current){
    setTimeout(
        () =>
        {
            return (previous + " " + current)
        },
        Math.floor(Math.random()*100) + 1 
    );
}

function addAll() {
    let result = addString("", "A");
    
    setTimeout(() => {
        result = addString(result, "B");
    }, 1000);
    
    setTimeout(() => {
        result = addString(result, "C");
    }, 2000);
        
    console.log(result);
}

addAll();