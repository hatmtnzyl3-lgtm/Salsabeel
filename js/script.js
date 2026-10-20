
document.addEventListener("DOMContentLoaded", function () {

    // رسالة ترحيب في الصفحة الرئيسية
    const title = document.querySelector("header h1");

    if (title) {
        title.addEventListener("click", function () {
            alert("أهلاً بيك في موقع السلسبيل لتحفيظ القرآن الكريم 🌿");
        });
    }

    // التأكد من تعبئة حقول النماذج
    const forms = document.querySelectorAll("form");

    forms.forEach(function (form) {
        form.addEventListener("submit", function (event) {
            const fields = form.querySelectorAll(
                "input[required], select[required], textarea[required]"
            );

            for (const field of fields) {
                if (!field.value.trim()) {
                    event.preventDefault();
                    alert("من فضلك املئي جميع الحقول المطلوبة.");
                    field.focus();
                    return;
                }
            }
        });
    });

});
