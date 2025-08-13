// ====== Modo Claro / Oscuro ======
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    themeToggle.textContent = document.body.classList.contains("light")
        ? "🌙 Modo Oscuro"
        : "🌞 Modo Claro";
});

// ====== Animación al hacer scroll ======
const scrollElements = document.querySelectorAll(".scroll-fade");

const elementInView = (el, offset = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) - offset
    );
};

const displayScrollElement = (element) => {
    element.classList.add("visible");
};

const hideScrollElement = (element) => {
    element.classList.remove("visible");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 150)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    });
};

window.addEventListener("scroll", handleScrollAnimation);
handleScrollAnimation();
