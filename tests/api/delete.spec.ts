import { test, expect } from "@playwright/test";

test("DELETE /posts/1", async ({ request }) => {
  // ส่งคำขอ DELETE ไปที่ API
  const response = await request.delete(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  // ตรวจสอบสถานะการตอบกลับจาก API
  expect(response.status()).toBe(200); // คำขอ DELETE ควรได้รับสถานะ 200 (OK) หรือ 204 (No Content)

  // ตรวจสอบว่า response body ว่างเปล่า (เพราะ JSONPlaceholder API คืนค่าเป็นว่างหลังจากลบ)
  const responseBody = await response.json();
  expect(responseBody).toEqual({}); // ข้อมูลควรเป็น object ว่าง
});
