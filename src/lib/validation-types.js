function string(value){
    return typeof(value) === "string";
}

function number (value){
    return typeof(value) === "number";
}

function any(value){
    return true;
}

module.exports = {
    string,
    number,
    any
}