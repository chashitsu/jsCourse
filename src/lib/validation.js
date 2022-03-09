
function validate(schema, values) {
    
    let validationResults = [];
    
      // todo - is it possible to use dinamic property names in here? This is pretty ugly...
      if(!schema.name(values.name)){ validationResults.push("name"); }
      if(!schema.age(values.age)){ validationResults.push("age"); }
      if(!schema.extra(values.extra)){ validationResults.push("extra"); }

    return validationResults;
}
  
module.exports = {
    validate: validate,
};

