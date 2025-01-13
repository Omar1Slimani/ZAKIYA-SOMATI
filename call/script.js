document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // قائمة بيانات المستخدمين المسجلين مسبقًا
    const users = [
        { username: "omar@gmail.com", password: "123456" },
        { username: "omar", password: "123456" },
        { username: "user", password: "ofppt" },
        { username: "saht", password: "123456" },
        { username: "Admin", password: "Admin" },
        // يمكنك إضافة المزيد من المستخدمين هنا
    ];

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // التحقق من صحة بيانات المستخدم
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        window.location.href = 'cal/index.html';
    } else {
        errorMessage.textContent = "البريد الإلكتروني أو كلمة المرور غير صحيحة.";
    }
});
