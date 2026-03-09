# Sử dụng Node.js 18 làm base image
FROM node:18

# Tạo thư mục làm việc trong container
WORKDIR /app

# Copy package.json vào container
COPY package.json .

# Cài đặt dependencies (nếu có)
RUN npm install

# Copy toàn bộ source code vào container
COPY . .

# Mở cổng 3000
EXPOSE 3000

# Chạy ứng dụng
CMD ["npm", "start"]