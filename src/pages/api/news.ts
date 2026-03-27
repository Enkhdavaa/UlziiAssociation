import { APIRoute } from "astro";

export const GET: APIRoute = () => {
  console.log("reached right here");
  return new Response(JSON.stringify({ message: "123" }));
};
