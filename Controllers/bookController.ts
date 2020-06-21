import { Context } from "https://deno.land/x/abc@v1.0.0-rc8/mod.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";
import { Book } from "../models/bookModel.ts";

let books: Book[] = [
  {
    id: "1",
    title: "Da Vinci Code",
    author: "Dan Brown",
    pages: 689,
  },
  {
    id: "2",
    title: "Deception Point",
    author: "Dan Brown",
    pages: 372,
  },
  { id: "3", title: "Lowland", author: "Jhumpa Lahiri", pages: 340 },
  { id: "4", title: "Hotel", author: "Arthur Hailey", pages: 421 },
  { id: "5", title: "Eye of the Needle", author: "Ken Follett", pages: 340 },
];

export const get_all_books = (ctx: Context) => {
  return ctx.json(books.sort((a, b) => a.id > b.id ? 1 : -1), 200);
};

export const get_book = (ctx: Context) => {
  const { id } = ctx.params;
  const book = books.find((b: Book) => b.id === id);
  if (book) {
    return ctx.json(book, 200);
  }
  return ctx.string("no book with that id", 404);
};

export const create_book = async (ctx: Context) => {
  const { title, author, pages } = await ctx.body();

  // validate data & types of data
  const id = v4.generate();
  const book = { id, title, author, pages };
  books.push(book);

  return ctx.json(book, 201);
};

export const delete_book = (ctx: Context) => {
  const { id } = ctx.params;
  const book = books.find((b: Book) => b.id === id);

  if (book) {
    books = books.filter((b: Book) => b.id !== id);
    return ctx.json(book, 200);
  }
  return ctx.string("no book with that id", 404);
};
export const edit_book = async (ctx: Context) => {
  const { id } = ctx.params;
  const { title, author, pages } = await ctx.body();
  const newbook = { id, title, author, pages };
  const book = books.find((b: Book) => b.id === id);

  if (book) {
    books = books.filter((b: Book) => b.id !== id);
    books.push(newbook);
    books.sort();
    return ctx.json(newbook, 200);
  }

  return ctx.string("no book with that id", 404);
};
