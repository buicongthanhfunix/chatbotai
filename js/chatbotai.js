const Gemini_KEY = "AIzaSyCIBf4Uht9ApHrbXQqqZMkt7Ww7XqQma5Y";
const thongtinHuanluyen = `
1. Thông tin liên hệ

    509 Phan Đình Phùng, TP. Quảng Ngãi
    0839 509 509
    (0255) 3713123
    tuyensinh@pdu.edu.vn
    www.pdu.edu.vn


2. Ngành và chỉ tiêu xét tuyển
1. Ngành và chỉ tiêu tuyển sinh
TT 	Mã ngành 	Tên ngành 	Chỉ tiêu 	Tổ hợp môn xét tuyển
 1. 	7140202 	Giáo dục Tiểu học 	131 	A00; A01; C00; D01
2. 	7140209 	Sư phạm Toán học 	40 	A00; A01; X05; D01
3. 	7140210 	Sư phạm Tin học 	20 	A00; X05; X06; D01
4. 	7140211 	Sư phạm Vật lý 	20 	A00; X05; A01; C01
 5. 	7140212 	Sư phạm Hóa học 	20 	A00; C02; B00; D07
  6. 	7140217 	Sư phạm Ngữ văn 	40 	C00; X74; X70; X01
 7. 	7140231 	Sư phạm Tiếng Anh 	60 	D01; X25; X78; D15
 8. 	7140247 	Sư phạm Khoa học Tự nhiên 	30 	A00; C02; B00; C01
 9. 	7310105 	Kinh tế phát triển 	24 	C03; X74; X01; D01
10. 	7340101 	Quản trị kinh doanh 	60 	C03; X74; X01; D01
11. 	7340115 	Marketing 	50 	C03; X74; X01; D01
12. 	7480201 	Công nghệ thông tin 	90 	A00; X05; X06; D01
13. 	7510201 	Công nghệ kỹ thuật cơ khí 	70 	A00; A01; X05; D01
14. 	7520114 	Kỹ thuật cơ điện tử 	50 	A00; A01; X05; D01
15. 	51140201 	Giáo dục Mầm non (cao đẳng) 	85 	M01; M09

3. FAQs:
Danh sách ngành nghề đào tạo của trường gồm những ngành nào?
    -Công nghệ thông tin
    -Kinh tế phát triển
    -Quản trị kinh doanh
    -Công nghệ kỹ thuật Cơ khí
    -Kỹ thuật Cơ & Điện tử
    -Marketing
    -Sư phạm Khoa học tự nhiên
    -Sư phạm Tin học
    -Sư phạm Vật lý
    -Sư phạm Ngữ văn
    -Sư phạm Tiếng Anh
    -Sư phạm Toán
    -Sư phạm Giáo dục Tiểu học
    -Sư phạm Hóa học
    -Giáo dục Mầm non (CĐ)
    
Phương thức tuyển sinh của trường gồm những phương thức nào?
    Xét tuyển theo kết quả thi THPT năm 2025
    Xét tuyển theo kết quả học tập THPT:
    Kết quả học tập lớp 12 theo tổ hợp 3 môn
    Xét tuyển thẳng

Khu vực tuyển sinh của trường ở đâu?
Tuyển sinh trong cả nước.

Mức điểm ưu tiên theo khu vực được tính như thế nào?
Mức điểm ưu tiên áp dụng cho khu vực 1 (KV1) là 0,75 điểm, khu vực 2 nông thôn (KV2-NT) là 0,5 điểm, khu vực 2 (KV2) là 0,25 điểm; khu vực 3 (KV3) không được tính điểm ưu tiên;

Tone Instructions:

Tính súc tích: Trả lời bằng các câu ngắn gọn, đầy đủ thông tin.
Tính trang trọng: Sử dụng ngôn ngữ lịch sự, hơi trang trọng (ví dụ: "Xin vui lòng cho chúng tôi biết", "Chúng tôi rất hân hạnh được hỗ trợ").
Tính rõ ràng: Tránh sử dụng thuật ngữ chuyên môn nếu không cần thiết.
Tính nhất quán: Đảm bảo giọng điệu và phong cách trả lời đồng bộ trong tất cả các phản hồi.
Ví dụ: "Cảm ơn bạn đã liên hệ! Xin vui lòng cho chúng tôi biết nếu bạn cần thêm hỗ trợ."
.`;

//xu ly su kien
document
  .querySelector(".inputarea button")
  .addEventListener("click", sendMessage);
const conversations = [
  // {
  //   "role": "user",
  //   "parts": [
  //     {
  //       "text": "Hello"
  //     }
  //   ]
  // },
  // {
  //   "role": "model",
  //   "parts": [
  //     {
  //       "text": "Great to meet you. What would you like to know?"
  //     }
  //   ]
  // },
  // {
  //   "role": "user",
  //   "parts": [
  //     {
  //       "text": "I have two dogs in my house. How many paws are in my house?"
  //     }
  //   ]
  // }
];
function sendMessage() {
  //   alert("Hi");
  //lay du lieu trong input
  const userMessage = document.querySelector(".inputarea input").value;
  //neu co nhap du lieu thi moi dua du lieu len vung .chat
  if (userMessage.length) {
    //xoa du lieu trong input
    document.querySelector(".inputarea input").value = "";
    document.querySelector(".chatwindow .chat").insertAdjacentHTML(
      "beforeend",
      `
        <div class="user">
          <p>${userMessage}</p>
        </div>`
    );
    //them vao conversations
    conversations.push({
      role: "user",
      parts: [
        {
          text: userMessage,
        },
      ],
    });

    //tao ra vung trong de hien thi du lieu tra ve
    document.querySelector(".chatwindow .chat").insertAdjacentHTML(
      "beforeend",
      `
          <div class="model">
            <p></p>
          </div>`
    );
    //goi du lieu len model va ket qua tra ve
    goiDuLieu();
  }

  async function goiDuLieu() {
    console.log(conversations);

    const response = await fetch(
      // "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" +
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:streamGenerateContent?alt=sse&key=" +
        Gemini_KEY,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          system_instruction: {
            parts: [
              {
                text: thongtinHuanluyen,
              },
            ],
          },
          contents: conversations,
        }),
      }
    );

    // const data = await response.json();

    // console.log(data);
    //dien tung doan vao .model p
    const models = document.querySelectorAll(".chat .model");

    //xu ly tung doan ket qua tra ve
    const reader = response.body
      .pipeThrough(new TextDecoderStream("utf-8"))
      .getReader();
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      console.log(value);
      //tach theo chu "data:" ra mang
      const arr = value.split("data: ");
      arr.forEach((item, idx) => {
        if (idx > 0) {
          console.log(item);
          console.log(JSON.parse(item));

          //model cuoi de dien du lieu tu server tra ve - tung doan
          models[models.length - 1].querySelector("p").innerHTML +=
            JSON.parse(item).candidates[0].content.parts[0].text;
        }
      });
      // console.log(JSON.parse(arr[1]));

      // console.log(JSON.parse(value.substring(5)));
    }

    //them du lieu tra ve cua model vao conversations
    conversations.push({
      role: "model",
      parts: [
        {
          text: models[models.length - 1].querySelector("p").innerHTML,
        },
      ],
    });
    //in vao vung .chat
    // document.querySelector(".chatwindow .chat").insertAdjacentHTML(
    //   "beforeend",
    //   `
    //     <div class="model">
    //       <p>${data.candidates[0].content.parts[0].text}</p>
    //     </div>`
    // );

    //xu ly ket qua tra ve tung doan (chunk)
    // for await (const chunk of response) {
    //   console.log(chunk.text);
    //   console.log("_".repeat(80));
    // }

    //them du lieu tra ve cua model vao conversations
    // conversations.push({
    //   role: "model",
    //   parts: [
    //     {
    //       text: data.candidates[0].content.parts[0].text,
    //     },
    //   ],
    // });
  }
}
