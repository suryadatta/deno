import {
  Context,
} from "https://deno.land/x/abc@v1.0.0-rc10/mod.ts";
import { Student } from "../Models/studentModel.ts";
import { readJson, writeJson } from "https://deno.land/std/fs/mod.ts";

const f = await readJson("../public/student.json");
let students:Student[] = JSON.stringify(f);

export const get_all_students = (ctx: Context) => {
  return ctx.json(students,200);
};
export const get_student = (ctx: Context) => {
};
export const add_student = (ctx: Context) => {
};
export const remove_student = (ctx: Context) => {
};
