var skills = [
    { id: 'js', value: 0.95, color: '#f7df1e' },
    { id: 'php', value: 0.90, color: '#8892be' },
    { id: 'c', value: 0.85, color: '#015ba9' },
    { id: 'java', value: 0.80, color: '#b07219' },
];
skills.forEach(skill => {
    var circle = new ProgressBar.Circle(`#circle-${skill.id}`, {
        color: skill.color,
        strokeWidth: 16,
        trailWidth: 2,
        trailColor: '#',
        easing: 'easeInOut',
        duration: 1400,
        text: {
            value: '0%',
            className: 'progressbar-text'
        },
        from: { color: skill.color, width: 6 },
        to: { color: skill.color, width: 6 },
        step: function (state, circle) {
            circle.setText(Math.round(circle.value() * 100) + '%');
        }
    });

    circle.animate(skill.value);
});

var menu_btn = document.getElementById('menu_btn');
var close_btn = document.getElementById('close_btn');
var sidebar = document.getElementById('sidebar');
var overlay = document.getElementById('overlay');
var nav_link = sidebar.querySelectorAll('a');

function _open_sidebar() {
    sidebar.classList.remove('translate-x-full');
    overlay.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');

    sidebar.setAttribute('aria-hidden', 'false');
    menu_btn.setAttribute('aria-expanded', 'true');

    setTimeout(() => {
        close_btn.focus();
    }, 100);
}

function _close_sidebar() {
    sidebar.classList.add('translate-x-full');
    overlay.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');

    sidebar.setAttribute('aria-hidden', 'true');
    menu_btn.setAttribute('aria-expanded', 'false');
    menu_btn.focus();
}

menu_btn.addEventListener('click', _open_sidebar);
close_btn.addEventListener('click', _close_sidebar);
overlay.addEventListener('click', _close_sidebar);

nav_link.forEach(link => {
    link.addEventListener('click', _close_sidebar);
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !sidebar.classList.contains('translate-x-full')) {
        _close_sidebar();
    }
});

window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) {
        _close_sidebar();
    }
});
sidebar.setAttribute('aria-hidden', 'true');
menu_btn.setAttribute('aria-expanded', 'false');