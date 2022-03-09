
function string(arg) {
    return (typeof arg === 'string');
}

function number(arg) {
    return (typeof arg === 'number');
}

function any(arg) {
    return true;
}
  
  module.exports = {
    string: string,
    number: number,
    any: any
  };




