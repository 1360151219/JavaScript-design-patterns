import RequestBuilder from "./builder.js";
const request = new RequestBuilder()
request.forUrl('hahaha')
const r1 = request.build()
request.payload({ data: 1 })
const r2 = request.build()
console.log(r1 === r2)// true
