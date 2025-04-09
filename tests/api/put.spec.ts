import { test, expect } from "@playwright/test";

test("PUT /posts/1", async ({ request }) => {
  // ข้อมูลที่ต้องการอัปเดต
  const updatedData = {
    title: "Updated title",
    body: "Updated body content",
    userId: 1,
  };

  const response = await request.put(
    "https://jsonplaceholder.typicode.com/posts/1",
    {
      data: updatedData,
    }
  );

  // ตรวจสอบสถานะการตอบกลับ
  expect(response.status()).toBe(200);

  // ตรวจสอบข้อมูลที่ได้รับจากการตอบกลับ
  const responseBody = await response.json();

  // ตรวจสอบว่า response body มีข้อมูลที่อัปเดต
  expect(responseBody).toHaveProperty("id", 1);
  expect(responseBody).toHaveProperty("title", "Updated title");
  expect(responseBody).toHaveProperty("body", "Updated body content");
  expect(responseBody).toHaveProperty("userId", 1);
});
