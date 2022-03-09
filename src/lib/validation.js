function validate(schema, values) {
    let result = [];
    Object.keys(schema).forEach((key) => {
        if(!schema[key](values[key])){
            result.push(key);
        }
    });
    return result;
}

module.exports = {
    validate
}