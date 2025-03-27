import { test, expect } from '@playwright/test';
import validRequestData from '../requests/data.json';  // import ข้อมูลจากไฟล์ data.json

test('Validation character length of API Response body', async ({ request }) => {
  // ส่งคำขอ POST ไปที่ API
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
  expect(responseBody.title).toBe(validRequestData.title);
  expect(responseBody.body).toBe(validRequestData.body);

});
