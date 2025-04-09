import { test, expect } from "@playwright/test";
// import validRequestData from "../requests/data.json";
test("PATCH /posts/1", async ({ request }) => {
  // ข้อมูลที่ต้องการอัปเดตบางส่วน
  const updatedData = {
    title: "aaa",
    // title: validRequestData.title, วิธีเรียกใช้ data จากไฟล์ data.json
  };

  // ส่งคำขอ PATCH ไปที่ API
  const response = await request.patch(
    "https://jsonplaceholder.typicode.com/posts/1",
    {
      data: updatedData,
    }
  );

  // ตรวจสอบสถานะการตอบกลับ
  expect(response.status()).toBe(200);

  // ตรวจสอบข้อมูลที่ได้รับจากการตอบกลับ
  const responseBody = await response.json();

  // ตรวจสอบว่า response body มีข้อมูลที่อัปเดตบางส่วน
  expect(responseBody).toHaveProperty("id", 1);
  expect(responseBody).toHaveProperty("title", "aaa");

  // ตรวจสอบว่า 'body' มีการเปลี่ยนแปลง
  expect(responseBody.body).toBe(
    "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  );
});
