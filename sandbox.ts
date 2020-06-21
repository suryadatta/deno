// // Generate a v4 uuid
// import { v4 } from "https://deno.land/std/uuid/mod.ts";

// const myUUID = v4.generate();
// console.log(myUUID);
// // Validate a v4 uuid
// const isValid = v4.validate(myUUID);
// console.log(isValid);
// //Reads and writes a JSON file and then parses it into an object

import { readJson, writeJson } from "https://deno.land/std/fs/mod.ts";
import { Student } from "./Models/studentModel.ts";
const f = await readJson("student.json");
let students: Student[] = f as Student[];
console.log(students);
// const fruits = [
//   { name: "Apple", quantity: "9" },
//   { name: "Banana", quantity: "6" },
// ];

// await writeJson("fruits.json", fruits);
// console.log("fruits.json created");
// //Http

// import { serve } from "https://deno.land/std/http/server.ts";
// const server = serve({ port: 3210 });

// for await (const req of server) {
//   console.log("request made");
//   req.respond({ body: `Hello world, you visited ${req.url}` });
// }
//Testing Case

// import { camelCase, pascalCase } from "https://deno.land/x/case/mod.ts";
// const text = "test string";
// console.log(camelCase(text));
// console.log(pascalCase(text));
