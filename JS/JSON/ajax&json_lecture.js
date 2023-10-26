// convert JSON string into a JavaScript object
var json = '{"person" : {"age":20, "name": "bob"}}';
var parsed = JSON.parse(json);

console.log(parsed.person);
console.log(parsed.person["age"]);
