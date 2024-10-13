const translations = {
    en: {
        signUp: "Sign Up",
        usernamePlaceholder: "Username",
        emailPlaceholder: "Email or phone number",
        passwordPlaceholder: "Password",
        confirmPasswordPlaceholder: "Confirm password",
        rememberMe: "Remember me",
        loginWithFacebook: "Login with Facebook",
        alreadyHaveAccount: "Already have an account?",
        signInNow: "Sign in",
        footerQuestions: "Questions? Call",
        profile: "Profile",
        aboutUs: "About Us",
        tops: "Tops",
        mainPage: "Main page",
        search: "Search",
        madeBy: "This page made by Nurzhan Kaskeyev"
    },
    ru: {
        signUp: "Зарегистрироваться",
        usernamePlaceholder: "Имя пользователя",
        emailPlaceholder: "Электронная почта или номер телефона",
        passwordPlaceholder: "Пароль",
        confirmPasswordPlaceholder: "Подтвердите пароль",
        rememberMe: "Запомнить меня",
        loginWithFacebook: "Войти через Facebook",
        alreadyHaveAccount: "Уже есть аккаунт?",
        signInNow: "Войти",
        footerQuestions: "Вопросы? Звоните",
        profile: "Профиль",
        aboutUs: "О нас",
        tops: "Топы",
        mainPage: "Главная страница",
        search: "Поиск",
        madeBy: "Эту страницу создал Нуржан Каскеев"
    },
    kz: {
        signUp: "Тіркелу",
        usernamePlaceholder: "Пайдаланушы аты",
        emailPlaceholder: "Электрондық пошта немесе телефон нөмірі",
        passwordPlaceholder: "Құпия сөз",
        confirmPasswordPlaceholder: "Құпия сөзді растаңыз",
        rememberMe: "Мені есте сақта",
        loginWithFacebook: "Facebook арқылы кіру",
        alreadyHaveAccount: "Аккаунтыңыз бар ма?",
        signInNow: "Кіру",
        footerQuestions: "Сұрақтарыңыз бар ма? Қоңырау шалыңыз",
        profile: "Профиль",
        aboutUs: "Біз туралы",
        tops: "Үздіктер",
        mainPage: "Басты бет",
        search: "Іздеу",
        madeBy: "Бұл бетті жасаған Нұржан Қаскеев"
    }
};

function changeLanguage(lang) {
    document.querySelector('h1').textContent = translations[lang].signUp;
    document.querySelector('input[name="username"]').placeholder = translations[lang].usernamePlaceholder;
    document.querySelector('input[name="email"]').placeholder = translations[lang].emailPlaceholder;
    document.querySelector('input[name="password"]').placeholder = translations[lang].passwordPlaceholder;
    document.querySelectorAll('input[name="password"]')[1].placeholder = translations[lang].confirmPasswordPlaceholder;
    document.querySelector('.remMe .cText').textContent = translations[lang].rememberMe;
    document.querySelector('.login2 a').textContent = translations[lang].loginWithFacebook;
    document.querySelector('.signUp').innerHTML = `${translations[lang].alreadyHaveAccount} <a href="signup.html" class="sLink">${translations[lang].signInNow}</a>.`;
    document.querySelector('.footWidth').childNodes[0].textContent = `${translations[lang].footerQuestions} `;
    document.querySelector('.footList:nth-child(1) a').textContent = translations[lang].profile;
    document.querySelector('.footList:nth-child(2) a').textContent = translations[lang].aboutUs;
    document.querySelector('.footList:nth-child(3) a').textContent = translations[lang].tops;
    document.querySelector('.footList:nth-child(4) a').textContent = translations[lang].mainPage;
    document.querySelector('.footList:nth-child(5) a').textContent = translations[lang].search;
    document.querySelector('.google').textContent = translations[lang].madeBy;
}

window.onload = function () {
    const languageSelect = document.querySelector('.select-language');
    languageSelect.addEventListener('change', function () {
        const selectedLanguage = this.value;
        if (selectedLanguage === "English") {
            changeLanguage('en');
        } else if (selectedLanguage === "Русский") {
            changeLanguage('ru');
        } else if (selectedLanguage === "Қазақша") {
            changeLanguage('kz');
        }
    });
};