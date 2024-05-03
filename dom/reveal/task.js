const reveal = Array.from(document.querySelectorAll('.reveal'));

document.addEventListener('scroll', function() {
    reveal.forEach(item => {
        if (isInViewarea(item)) {
            item.classList.remove('reveal_active');
            return;
        }
        item.classList.add('reveal_active');
    });
});

const isInViewarea = function(el) {
    const viewportHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementBottom = el.getBoundingClientRect().bottom;
    return (elementTop > viewportHeight || elementBottom < 0) ? true : false;
};

