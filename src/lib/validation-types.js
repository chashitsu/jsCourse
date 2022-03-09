
function string(arg) {
    return (typeof arg === 'string');
}

function number(arg) {
    return (typeof arg === 'number');
}

function any(arg) {
    return true;//(typeof arg === 'any');
}
  
  module.exports = {
    string: string,
    number: number,
    any: any
  };




