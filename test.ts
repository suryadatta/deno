let credit: string;
credit = "Made by surya";

//Reading files
const decoder = new TextDecoder("utf-8");
const output = await Deno.readFile("readfileexample.txt");
console.log(decoder.decode(output));

console.log(await Deno.readTextFile("readfileexample.txt"));

//Writing file
const encoder = new TextEncoder();
const input = encoder.encode(credit);
await Deno.writeFile("readfileexample.txt", input);

Deno.rename("denotxt.txt", "readfileexample.txt");
