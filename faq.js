
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;

        // fermer les autres (optionnel, mais propre)
        document.querySelectorAll('.faq-item').forEach(faq => {
            if (faq !== item) {
                faq.classList.remove('active');
            }
        });

        // toggle l'élément cliqué
        item.classList.toggle('active');
    });
});