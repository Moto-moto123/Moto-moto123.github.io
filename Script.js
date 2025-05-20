document.addEventListener('DOMContentLoaded', () => {
    const about = document.querySelectorAll('.about')
    const random_facts = document.querySelectorAll('.random_facts');
    const projects = document.querySelectorAll('.project');
    const credits = document.querySelectorAll('.credits');

    const revealElements = () => {
        const windowHeight = window.innerHeight;
        const scrollTop = window.scrollY;

        about.forEach(about => {
            const aboutTop = about.getBoundingClientRect().top + scrollTop;
            if (skillTop < scrollTop + windowHeight - 100) {
                about.classList.add('visible');
            } else {
               about.classList.remove('visible');
            }
        });

        random_facts.forEach(random_facts => {
            const random_factsTop = random_facts.getBoundingClientRect().top + scrollTop;
            if (random_factsTop < scrollTop + windowHeight - 100) {
                random_facts.classList.add('visible');
            } else {
                random_facts.classList.remove('visible');
            }
        });

        projects.forEach(projects => {
            const projectsTop = projects.getBoundingClientRect().top + scrollTop;
            if (skillTop < scrollTop + windowHeight - 100) {
                projects.classList.add('visible');
            } else {
               projects.classList.remove('visible');
            }
        });

        credits.forEach(credits => {
            const creditsTop = credits.getBoundingClientRect().top + scrollTop;
            if (skillTop < scrollTop + windowHeight - 100) {``
                credits.classList.add('visible');
            } else {
               credits.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', revealElements);
    revealElements();

    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
});
