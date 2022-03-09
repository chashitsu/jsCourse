/*
can't use Boolean(value)
consume any number of parameters
return array of objects
object per single param passed to the function
each object should contains:
   - isFalsy
   - type
   - stringLength
   - index
  [
        {
            "isFalsy": false,
            "type": "number",
            "StringLength": 1,
            "index": 0
        },
        ...
  ]
 */

function getInfo(...values) {
  var results = [];
  let i =0;
  values.forEach((value) => {
      results.push(
        {
          isFalsy: value ? false : true, 
          type: typeof(value), 
          StringLength: String(value).length, 
          index: i 
        });
      i++;
  });
  return results
}


module.exports = getInfo;

