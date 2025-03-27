import { test, expect } from '@playwright/test';

test('GET /posts/1', async ({ request }) => {
  // ส่งคำขอ GET ไปที่ API
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

  // ตรวจสอบสถานะการตอบกลับจาก API
  expect(response.status()).toBe(200); // คำขอ GET ควรได้รับสถานะ 200 (OK)
  
  // ตรวจสอบข้อมูลใน body ของการตอบกลับ
  const responseBody = await response.json();
  
  // ตรวจสอบว่า response body มีค่าตามที่คาดหวัง
  expect(responseBody).toHaveProperty('userId');
  expect(responseBody).toHaveProperty('id');
  expect(responseBody).toHaveProperty('title');
  expect(responseBody).toHaveProperty('body');
  
  // ตรวจสอบค่าของ id เป็น 1
  expect(responseBody.id).toBe(1);
  expect(responseBody.title).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
});
