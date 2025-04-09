import { test, expect } from "@playwright/test";
import validRequestData from "../requests/data.json";

test("POST /posts", async ({
  request,
}) => {
  const response = await request.post(
    "https://jsonplaceholder.typicode.com/posts",
    {
      data: validRequestData,
    }
  );

  const responseBody = await response.json();

  expect(responseBody).toHaveProperty("userId");
  expect(responseBody).toHaveProperty("id");
  expect(responseBody).toHaveProperty("title");
  expect(responseBody).toHaveProperty("body");

  expect(responseBody.title).toBe(validRequestData.title);
  expect(responseBody.body).toBe(validRequestData.body);
});
