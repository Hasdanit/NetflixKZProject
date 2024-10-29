function changeLanguage() {
    var lang = document.querySelector('.select-language').value;
    var translations = {
        "en": {
            "profile": "Profile",
            "name": "Name: Namikadze",
            "email": "Email: kaskeevnurzhan@gmail.com",
            "phone": "Phone: +7 708 722 43 30",
            "watchHistory": "Watch History",
            "favorites": "Favorites",
            "madeBy": "This page made by Nurzhan Kaskeyev",
            "questions": "Questions? Call",
            "profile": "Profile",
            "aboutUs": "About Us",
            "tops": "Tops",
            "mainPage": "Main page",
            "search": "Search"
        },
        "ru": {
            "profile": "Профиль",
            "name": "Имя: Namikadze",
            "email": "Электронная почта: kaskeevnurzhan@gmail.com",
            "phone": "Телефон: +7 708 722 43 30",
            "watchHistory": "История просмотров",
            "favorites": "Избранное",
            "madeBy": "Эту страницу создал Нуржан Каскеев",
            "questions": "Вопросы? Звоните",
            "profile": "Профиль",
            "aboutUs": "О нас",
            "tops": "Топы",
            "mainPage": "Главная страница",
            "search": "Поиск"
        },
        "kz": {
            "profile": "Профиль",
            "name": "Есім: Namikadze",
            "email": "Электронды пошта: kaskeevnurzhan@gmail.com",
            "phone": "Телефон: +7 708 722 43 30",
            "watchHistory": "Көру тарихы",
            "favorites": "Таңдаулы",
            "madeBy": "Бұл бетті жасаған Нұржан Қаскеев",
            "questions": "Сұрақтарыңыз бар ма? Хабарласыңыз",
            "profile": "Профиль",
            "aboutUs": "Біз туралы",
            "tops": "Үздіктер",
            "mainPage": "Басты бет",
            "search": "Іздеу"
        }
    };

    document.querySelector('.profile-title').textContent = translations[lang]["profile"];
    document.querySelector('.profile-name').textContent = translations[lang]["name"];
    document.querySelector('.profile-email').textContent = translations[lang]["email"];
    document.querySelector('.profile-phone').textContent = translations[lang]["phone"];
    document.querySelector('.watch-history-title').textContent = translations[lang]["watchHistory"];
    document.querySelector('.favorites-title').textContent = translations[lang]["favorites"];
    document.querySelector('.made-by').textContent = translations[lang]["madeBy"];
    document.querySelector('.questions').textContent = translations[lang]["questions"];
    document.querySelector('.footList:nth-child(1) a').textContent = translations[lang]["profile"];
    document.querySelector('.footList:nth-child(2) a').textContent = translations[lang]["aboutUs"];
    document.querySelector('.footList:nth-child(3) a').textContent = translations[lang]["tops"];
    document.querySelector('.footList:nth-child(4) a').textContent = translations[lang]["mainPage"];
    document.querySelector('.footList:nth-child(5) a').textContent = translations[lang]["search"];
}
