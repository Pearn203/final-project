document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const emailPhoneInput = document.querySelector(".input_Form-value input[type='text']");
  const passwordInput = document.querySelector(".input_Form-value input[type='password']");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Ngăn không cho biểu mẫu được gửi

    // Lấy giá trị đầu vào
    const emailPhone = emailPhoneInput.value.trim();
    const password = passwordInput.value.trim();

    // Xác thực các đầu vào
    if (emailPhone === "") {
      alert("Vui lòng nhập email hoặc số điện thoại.");
      return;
    }

    if (password === "") {
      alert("Vui lòng nhập mật khẩu.");
      return;
    }

    // Kiểm tra xem tên đăng nhập, email hoặc số điện thoại và mật khẩu có khớp với dữ liệu được lưu trong LocalStorage không
    const storedEmailPhone = localStorage.getItem("emailPhone");
    const storedPassword = localStorage.getItem("password");

    if (emailPhone !== storedEmailPhone || password !== storedPassword) {
      alert("Email/Số điện thoại hoặc mật khẩu không chính xác.");
      return;
    }

    alert("Đăng nhập thành công!");

    // Điều hướng đến trang chính sau khi đăng nhập thành công
    window.location.href = "./index.html";
  });
});
  
