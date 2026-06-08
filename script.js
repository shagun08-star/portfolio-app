// Hero Animation

gsap.from(".hero h1", {
    y: -100,
    opacity: 0,
    duration: 1.5
});

gsap.from(".hero p", {
    y: 50,
    opacity: 0,
    duration: 1.5,
    delay: 0.5
});

gsap.from(".btn", {
    scale: 0,
    duration: 1,
    delay: 1
});

// Scroll Animation

gsap.utils.toArray(".title").forEach(title => {

    gsap.from(title, {
        scrollTrigger: title,
        y: 80,
        opacity: 0,
        duration: 1
    });

});

gsap.utils.toArray(".card").forEach(card => {

    gsap.from(card, {
        scrollTrigger: card,
        y: 100,
        opacity: 0,
        duration: 1
    });

});

// Custom Cursor

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2
    });

});

// 3D Card Effect

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = (-15 + x / rect.width * 30);
        const rotateX = (15 - y / rect.height * 30);

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.05)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";

    });

});