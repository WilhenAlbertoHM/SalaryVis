gsap.registerPlugin(ScrollTrigger);

gsap.to("", {opacity: 1, duration: 0});
gsap.utils.toArray(".scroll").forEach((panel, i, panels) => {
    ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        end: "+=50%",
        onEnter: function() {
            gsap.to(panel, {opacity: 1, duration: 1});
            paths = panel.querySelectorAll(".svg");
            console.log(paths);
            for (var i = 0; i < paths.length; i++) {
                p = paths[i];
                clonedP = p.cloneNode();
                parentElement = p.parentElement;
                parentElement.removeChild(p);
                parentElement.appendChild(clonedP);
            }
        },
        onLeaveBack: () => gsap.to(panel, {opacity: 0, duration: 1}),
        markers: false,
    });
});