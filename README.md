# 🌟 Event App

> **แอปพลิเคชันสำหรับจัดการอีเวนต์ด้วย React, Redux, React Router, และ FullCalendar**

---

## 📖 รายละเอียดโปรเจค

Event App สร้างขึ้นเพื่อฝึกฝนทักษะการพัฒนา SPA (Single Page Application) ที่มีระบบจัดการสถานะและเส้นทางอย่างเป็นระบบ ด้วยเครื่องมือและไลบรารีที่ใช้จริงในโปรดักชัน

---

## 🚀 ฟีเจอร์หลัก

- 🗓️ ปฏิทินจัดการอีเวนต์ (FullCalendar)
- 🧠 Redux สำหรับจัดการ State ทั่วทั้งแอป
- 🔁 React Router DOM สำหรับการนำทางหน้าเพจ
- 🍃 TailwindCSS สำหรับการออกแบบ UI ที่สวยงาม
- 🛠️ Vite สำหรับการพัฒนาแบบรวดเร็วและทันสมัย
- 🔔 Toastify แจ้งเตือนสถานะหรือข้อความต่าง ๆ
- 🔄 โหลดข้อมูลแบบ Asynchronous ด้วย Axios

---

## 🛠️ เทคโนโลยีที่ใช้

| หมวดหมู่             | ไลบรารี / เทคโนโลยี                                          |
|------------------------|-------------------------------------------------------------|
| **Frontend Framework** | React, React DOM                                            |
| **State Management**   | Redux Toolkit, React Redux                                  |
| **Routing**            | React Router DOM v7                                         |
| **Styling**            | Tailwind CSS, Lucide Icons                                  |
| **Calendar**           | FullCalendar (DayGrid Plugin + React Adapter)               |
| **Utility**            | Axios, Date-fns, React Spinners, React Toastify             |
| **Build Tool**         | Vite                                                        |
| **Linting**            | ESLint, eslint-plugin-react-hooks, eslint-plugin-react-refresh |
| **Type Checking**      | TypeScript (ผ่าน @types)                                    |

---

## 📦 วิธีติดตั้งและเริ่มต้นใช้งาน

1. Clone โปรเจค:

```bash
git clone https://github.com/Theeraphat011/Event-App.git
เข้าไปในโฟลเดอร์โปรเจค:

bash
คัดลอก
แก้ไข
cd Event-App
ติดตั้ง dependencies:

bash
คัดลอก
แก้ไข
npm install
รันโปรเจคแบบ dev:

bash
คัดลอก
แก้ไข
npm run dev
เปิดเบราว์เซอร์และเข้าไปที่:

arduino
คัดลอก
แก้ไข
http://localhost:5173
📁 โครงสร้างโปรเจค
plaintext
คัดลอก
แก้ไข
Event-App/
├── public/                # Static assets
├── src/
│   ├── components/        # ส่วน UI แยกย่อย
│   ├── redux/             # Store, slice ต่าง ๆ
│   ├── routes/            # เส้นทางหน้าต่าง ๆ
│   ├── App.js             # ส่วนกลางของแอป
│   └── main.jsx           # Entry point หลัก
├── package.json           # Dependencies และ Scripts
└── README.md              # คำอธิบายโปรเจค
📈 ฟีเจอร์เสริม (แผนพัฒนา)
✅ Firebase Integration (Auth / Realtime DB)

✅ MQTT / Mosquitto สำหรับ IoT Event Trigger

✅ ระบบ Dashboard แสดง เปอร์เซ็นต์การใช้งาน (Usage Analytics)


👨‍💻 ผู้พัฒนา
Theeraphat Kannua
📧 67035011@kmitl.ac.th
🌐 GitHub - Theeraphat011

