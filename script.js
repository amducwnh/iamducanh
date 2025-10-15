document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Kiểm tra cài đặt chủ đề đã lưu trong Local Storage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Biểu tượng mặt trời
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Biểu tượng mặt trăng
    }

    // Xử lý sự kiện khi click vào nút chuyển đổi
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            // Chuyển sang chế độ Tối
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            // Chuyển sang chế độ Sáng
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
});
