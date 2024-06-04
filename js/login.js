document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Ngăn không cho biểu mẫu được gửi
  
      // Lấy giá trị đầu vào
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
  
      // Lấy dữ liệu đã lưu trong LocalStorage
      const storedUsername = localStorage.getItem("username");
      const storedPassword = localStorage.getItem("password");
  
      // Xác thực đầu vào
      if (username === storedUsername && password === storedPassword) {
        alert("Đăng nhập thành công!");
        // Điều hướng đến trang chính
        window.location.href = "./index.html"; // Trang chính của bạn
      } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng.");
      }
    });
  });
  