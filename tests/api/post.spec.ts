import { test, expect } from "@playwright/test";

test("Validation character length of API Response body", async ({
  request,
}) => {
  const response = await request.post(
    "https://jsonplaceholder.typicode.com/posts",
    {
      data: {
        title: "foo",
        body: "bar",
        userId: 1,
      },
    }
  );

  expect(response.status()).toBe(201);

  const responseBody = await response.json();

  expect(responseBody).toHaveProperty("title");
  // ตรวจสอบความยาวของค่าแต่ละฟิลด์
  expect(responseBody.title.length).toBeLessThanOrEqual(100);
  expect(responseBody.body.length).toBeLessThanOrEqual(500);
  expect(responseBody.userId.toString().length).toBeLessThanOrEqual(5);
  expect(responseBody.id.toString().length).toBeLessThanOrEqual(5);

  console.log(responseBody);
});
