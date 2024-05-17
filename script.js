// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const registeredEmail = "omar@gmail.com";
//     const registeredPassword = "123456";

//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const errorMessage = document.getElementById('errorMessage');

//     if (email === registeredEmail && password === registeredPassword) {
//         window.location.href = 'store.html';
//     } else {
//         errorMessage.textContent = "البريد الإلكتروني أو كلمة المرور غير صحيحة.";
//     }
// });

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // قائمة بيانات المستخدمين المسجلين مسبقًا
    const users = [
        { email: "omar@gmail.com", password: "123456" },
        { email: "omar", password: "123456" },
        { email: "user", password: "ofppt" },
        { email: "saht", password: "123456" },
        // يمكنك إضافة المزيد من المستخدمين هنا
    ];

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // التحقق من صحة بيانات المستخدم
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        window.location.href = 'cal/index.html';
    } else {
        errorMessage.textContent = "البريد الإلكتروني أو كلمة المرور غير صحيحة.";
    }
});