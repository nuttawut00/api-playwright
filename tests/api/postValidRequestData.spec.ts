import { test, expect } from '@playwright/test';
import { validRequestData } from "../requests/validRequestData";

test('Validation character length of API Response body', async ({ request }) => {
  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: validRequestData,
  });

  const responseBody = await response.json();

  // ตรวจสอบว่า response มี property ที่ต้องการ
  expect(responseBody).toHaveProperty("userId");
  expect(responseBody).toHaveProperty("id");
  expect(responseBody).toHaveProperty("title");
  expect(responseBody).toHaveProperty("body");

  // ตรวจสอบค่าของ title และ body
  expect(responseBody.title).toBe("dolorem eum magni eos aperiam quia");
  expect(responseBody.body).toBe("ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae");

  // ตรวจสอบความยาวของ title
  expect(responseBody.title.length).toBeLessThanOrEqual(100);

  // ตรวจสอบความยาวของ body
  expect(responseBody.body.length).toBeLessThanOrEqual(500);

  // ตรวจสอบความยาวของ userId และ id
  expect(responseBody.userId.toString().length).toBeLessThanOrEqual(5);
  expect(responseBody.id.toString().length).toBeLessThanOrEqual(5);
});

