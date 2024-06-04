document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm");
    const usernameInput = document.getElementById("username");
    const emailPhoneInput = document.getElementById("emailPhone");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Ngăn chặn gửi thông tin lên
  
      // Lấy giá trị đầu vào
      const username = usernameInput.value.trim();
      const emailPhone = emailPhoneInput.value.trim();
      const password = passwordInput.value.trim();
      const confirmPassword = confirmPasswordInput.value.trim();
  
      // Xác thực các thông tin người dùng nhập
      if (username === "") {
        alert("Vui lòng nhập tên đăng nhập.");
        return;
      }
  
      if (emailPhone === "") {
        alert("Vui lòng nhập email hoặc số điện thoại.");
        return;
      }
  
      if (!validateEmail(emailPhone) && !validatePhone(emailPhone)) {
        alert("Vui lòng nhập email hoặc số điện thoại hợp lệ.");
        return;
      }
  
      if (password === "") {
        alert("Vui lòng nhập mật khẩu.");
        return;
      }
  
      if (password !== confirmPassword) {
        alert("Mật khẩu không khớp.");
        return;
      }
  
      // Lưu dữ liệu người dùng vào LocalStorage
      localStorage.setItem("username", username);
      localStorage.setItem("emailPhone", emailPhone);
      localStorage.setItem("password", password);
  
      alert("Đăng ký thành công!");
  
      // Điều hướng đến trang đăng nhập
      window.location.href = "./login.html";
    });
  
    function validateEmail(email) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return re.test(email);
    }
  
    function validatePhone(phone) {
      const re = /^[0-9]{10,11}$/;
      return re.test(phone);
    }
  });
  
  