// Lấy phần tử hiển thị kết quả
const display = document.getElementById('display');

// Hàm thêm số vào màn hình
function appendNumber(number) {
  display.value += number;
}

// Hàm thêm phép toán vào màn hình
function appendOperator(operator) {
  // Kiểm tra nếu cuối chuỗi là phép toán thì không thêm
  if (['+', '-', '*', '/'].includes(display.value.slice(-1))) return;
  display.value += operator;
}

// Hàm thêm dấu ngoặc
function appendBracket(bracket) {
  display.value += bracket;
}

// Hàm xóa tất cả
function clearDisplay() {
  display.value = '';
}

// Hàm xóa ký tự cuối cùng
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Hàm tính toán kết quả
function calculateResult() {
  try {
    // Đánh giá biểu thức trong display
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
