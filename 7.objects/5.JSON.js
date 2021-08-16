/*
? JSON - JavaScript Object Notation
?      - lightweight, flexible, easy to read
?      - Inspired from the object literal notation
?      - property names have to be wrapped in double quoted for JSON
?      - serialize - convert data to a stream of bytes
?      - deserialize - convert stream of bytes to data
*/

var obj = { name: 'peter', city: 'new york'}

var JSONObject = { "id": 1, "name": 'peter', "city": 'new york'}

console.log(JSONObject)

var person = { "id": 1, "name": 'peter', 'city': 'new york'}

var jsonStringify = JSON.stringify(person)
console.log(jsonStringify, typeof jsonStringify)

var jsonParser = JSON.parse(jsonStringify)
console.log(jsonParser, typeof jsonParser)