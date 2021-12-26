/// <reference types="@sveltejs/kit" />

type Todo = {
  create_at: Date;
  update_at: Date;
  text: string;
  done: boolean;
}