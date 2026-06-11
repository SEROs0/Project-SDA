> ⚠️ โปรเจคนี้ยังอยู่ในขั้นตอน **Development** — Branch `developer` เป็น branch หลักสำหรับการพัฒนาซอร์สโค้ด ก่อนที่จะทำการ Merge หรือ Pull Request ขึ้นไปยัง branch `master`
 
---
 
# 📊Project SDA — Sales Dashboard Analytics
 
ระบบ Sales Dashboard วิเคราะห์ข้อมูลยอดขายเชิงลึกแบบ Real-time ช่วยให้ผู้บริหารเห็นภาพรวมและตัดสินใจได้อย่างแม่นยำ
 
---

## ภาพรวมระบบ
 
Project SDA เป็น Web Application ที่พัฒนาด้วย **React vite.js (Frontend)** และ **Node.js (Backend)** เชื่อมต่อกับระบบภายในของบริษัท เช่น Order System, Inventory, ERP และ CRM เพื่อรวบรวมข้อมูลและนำเสนอในรูปแบบ Dashboard แบบ Real-time
 
ผู้ใช้งานหลักได้แก่ Sales Manager และ Executive ที่ต้องการติดตาม KPI ยอดขาย และวิเคราะห์ Trend เพื่อประกอบการตัดสินใจ

ตอนนี้ Project ยังใช้ Mock Data อยู่ ยังไม่ได้เชื่อมกับ Backend


### ขั้นตอนติดตั้ง
 
```bash
# 1. Clone โปรเจค
git clone https://github.com/SEROs0/Project-SDA.git
cd project-company2

# 3. ติดตั้ง dependencies (Frontend)
cd frontend-SDA
npm install

### รันโปรเจค (Development)
# รัน Frontend
cd frontend-SDA
npm run dev
```
