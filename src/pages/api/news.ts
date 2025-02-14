import { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  console.log("reached right here");
  return new Response(JSON.stringify({ message: "123" }));
};
