      // small helpers
      document.getElementById("year").textContent = new Date().getFullYear();

      gsap.registerPlugin(ScrollTrigger);

      // header + hero entrance timeline
      const tl = gsap.timeline();
      tl.from("header", {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      })
        .from(
          ".hero-right",
          { scale: 0.92, opacity: 0, duration: 0.8, ease: "power3.out" },
          "-=0.35",
        )
        // reveal avatar SVG via clip-path + fade
        .to(
          ".avatar svg",
          {
            clipPath: "circle(75% at 50% 50%)",
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          ".hero-left h1",
          { y: 18, opacity: 0, duration: 0.7, ease: "power3.out" },
          "-=0.65",
        )
        .from(
          ".hero-left p",
          { y: 10, opacity: 0, duration: 0.6, ease: "power2.out" },
          "-=0.5",
        )
        .from(".cta", { y: 6, opacity: 0, duration: 0.5 }, "-=0.4");

      // project cards stagger in when scrolled
      gsap.from(".card", {
        scrollTrigger: { trigger: ".projects", start: "top 80%" },
        y: 20,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: "power2.out",
      });

      // subtle hover micro-interactions for cards
      document.querySelectorAll(".card").forEach((card) => {
        card.addEventListener("mouseenter", () =>
          gsap.to(card, {
            scale: 1.02,
            boxShadow: "0 12px 40px rgba(2,6,23,0.6)",
            duration: 0.35,
          }),
        );
        card.addEventListener("mouseleave", () =>
          gsap.to(card, {
            scale: 1,
            boxShadow: "0 0 0 rgba(0,0,0,0)",
            duration: 0.35,
          }),
        );
      });