
  document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.addToCart');
    const cartButton = document.getElementById('cartButton');
    const cartModal = document.getElementById('cartModal');
    const closeButton = document.querySelector('.close');
    const cartItemsContainer = document.getElementById('cartItems');
  
    // Thêm sự kiện cho nút "Add to Cart"
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Lấy thông tin sản phẩm từ button
        const productContainer = button.parentElement;
        const product = button.parentNode.parentNode.querySelector('.product_spacing').textContent;
        const price = button.parentNode.parentNode.querySelector('strong:last-child').textContent;
        const imageSrc = button.parentNode.parentNode.querySelector('.img').src;
        
        // Tạo đối tượng sản phẩm
        const item = { product, price, imageSrc };
  
        // Lưu sản phẩm vào Local Storage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
  
        // Hiển thị thông báo mua hàng thành công
        alert('Bạn đã thêm vào giỏ hàng!');
  
        // Hiển thị lại giỏ hàng
        displayCartItems();
      });
    });
  
    // Hiển thị giỏ hàng khi nhấp vào nút giỏ hàng
    cartButton.addEventListener('click', () => {
      displayCartItems();
      cartModal.style.display = 'block';
    });
  
    // Đóng modal giỏ hàng
    closeButton.addEventListener('click', () => {
      cartModal.style.display = 'none';
    });
  
    // Đóng modal khi nhấp ra ngoài modal
    window.addEventListener('click', (event) => {
      if (event.target == cartModal) {
        cartModal.style.display = 'none';
      }
    });
  
    // Xóa sản phẩm khỏi giỏ hàng
    cartItemsContainer.addEventListener('click', (event) => {
      if (event.target.classList.contains('deleteItem')) {
        const index = event.target.dataset.index;
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.splice(index, 1); // Xóa sản phẩm khỏi mảng cart
        localStorage.setItem('cart', JSON.stringify(cart)); // Cập nhật lại Local Storage
        displayCartItems(); // Hiển thị lại giỏ hàng
      }
    });
  
    // Hiển thị sản phẩm trong giỏ hàng
    function displayCartItems() {
      cartItemsContainer.innerHTML = ''; // Xóa các sản phẩm cũ
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.forEach((item, index) => {
        let div = document.createElement('div');
        div.innerHTML = `<img src="${item.imageSrc}" alt="${item.product}">
                         <div>
                           <h3>${item.product}</h3>
                           <p>${item.price}</p>
  <button class="deleteItem" data-index="${index}">Delete</button>
                         </div>`;
        cartItemsContainer.appendChild(div);
      });
    }
  });
  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const product = button.parentNode.parentNode.querySelector('.product_spacing').textContent;
      const price = button.parentNode.parentNode.querySelector('strong:last-child').textContent;
      const imageSrc = button.parentNode.parentNode.querySelector('.img').src;
      const quantity = 1; // Mặc định số lượng là 1
  
      const item = { product, price, imageSrc, quantity }; // Thêm quantity vào đối tượng item
  
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
      const existingItem = cart.find(item => item.product === product);
      if (existingItem) {
        // Nếu sản phẩm đã tồn tại, tăng số lượng lên 1
        existingItem.quantity++;
      } else {
        // Nếu sản phẩm chưa tồn tại, thêm vào giỏ hàng
        cart.push(item);
      }
  
      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Bạn đã thêm vào giỏ hàng!');
      displayCartItems();
    });
  });
  
  // Hiển thị sản phẩm trong giỏ hàng
  function displayCartItems() {
    cartItemsContainer.innerHTML = ''; // Xóa các sản phẩm cũ
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.forEach((item, index) => {
      let div = document.createElement('div');
      div.innerHTML = `<img src="${item.imageSrc}" alt="${item.product}">
                       <div class="item-details">
                         <h3>${item.product}</h3>
                         <p>Giá: ${item.price}</p>
                         <p>Số lượng: ${item.quantity}</p>
                         <button class="deleteItem" data-index="${index}">Xóa</button>
                       </div>`;
      cartItemsContainer.appendChild(div);
    });
  }