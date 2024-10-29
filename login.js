var translations = {
    en: {
        signIn: "Sign In",
        emailPlaceholder: "Email or phone number",
        passwordPlaceholder: "Password",
        rememberMe: "Remember me",
        loginWithFacebook: "Login with Facebook",
        dontHaveAccount: "Don't have an account?",
        signUpNow: "Sign up",
        footerQuestions: "Questions? Call",
        profile: "Profile",
        aboutUs: "About Us",
        tops: "Tops",
        mainPage: "Main page",
        search: "Search",
        madeBy: "This page made by Nurzhan Kaskeyev"
    },
    ru: {
        signIn: "Войти",
        emailPlaceholder: "Электронная почта или номер телефона",
        passwordPlaceholder: "Пароль",
        rememberMe: "Запомнить меня",
        loginWithFacebook: "Войти через Facebook",
        dontHaveAccount: "Нет аккаунта?",
        signUpNow: "Зарегистрироваться",
        footerQuestions: "Вопросы? Позвоните",
        profile: "Профиль",
        aboutUs: "О нас",
        tops: "Топы",
        mainPage: "Главная страница",
        search: "Поиск",
        madeBy: "Эту страницу создал Нуржан Каскеев"
    },
    kz: {
        signIn: "Кіру",
        emailPlaceholder: "Электрондық пошта немесе телефон нөмірі",
        passwordPlaceholder: "Құпия сөз",
        rememberMe: "Мені есте сақта",
        loginWithFacebook: "Facebook арқылы кіру",
        dontHaveAccount: "Netflix-ке жаңадан қосылдыңыз ба?",
        signUpNow: "Тіркелу",
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
    document.querySelector('h1').textContent = translations[lang].signIn;
    document.querySelector('input[name="email"]').placeholder = translations[lang].emailPlaceholder;
    document.querySelector('input[name="password"]').placeholder = translations[lang].passwordPlaceholder;
    document.querySelector('.remMe .cText').textContent = translations[lang].rememberMe;
    document.querySelector('.login2 a').textContent = translations[lang].loginWithFacebook;
    document.querySelector('.signUp').innerHTML = `${translations[lang].dontHaveAccount} <a href="signup.html" class="sLink">${translations[lang].signUpNow}</a>.`;
    document.querySelector('.footWidth').childNodes[0].textContent = `${translations[lang].footerQuestions} `;
    document.querySelector('.footList:nth-child(1) a').textContent = translations[lang].profile;
    document.querySelector('.footList:nth-child(2) a').textContent = translations[lang].aboutUs;
    document.querySelector('.footList:nth-child(3) a').textContent = translations[lang].tops;
    document.querySelector('.footList:nth-child(4) a').textContent = translations[lang].mainPage;
    document.querySelector('.footList:nth-child(5) a').textContent = translations[lang].search;
    document.querySelector('.me').textContent = translations[lang].madeBy;
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