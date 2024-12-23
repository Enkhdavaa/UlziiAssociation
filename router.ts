import { Router } from "@oak/oak";

export const router = new Router();

// Getting the news from API
router.get("/api/getNews", (context) => {
  console.log("Hello, world!");
});

router.get("/api/getNews/:id", (context) => {
  console.log("Hello, world! with id");
});

// Getting the events from API
router.get("/api/getEvent", (context) => {
  console.log("Hello, world Event! without id");
});

router.get("/api/getEvent/:id", (context) => {
  console.log("Hello, world Event! with id");
});

// Posting the question request to API
router.post("/api/postRequest", (context) => {
  console.log("Hello, world Request!");
});
