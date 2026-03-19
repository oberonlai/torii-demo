declare global {
  interface Window {
    gsap: typeof import('gsap').gsap;
    ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger;
  }
}

export async function loadGsap() {
  const { gsap } = await import('gsap');
  const { ScrollTrigger } = await import('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);
  return { gsap, ScrollTrigger };
}

export async function initToriiMotion(doc: Document): Promise<() => void> {
  const { gsap, ScrollTrigger } = await loadGsap();

  const triggers: ReturnType<typeof ScrollTrigger.create>[] = [];

  // Fade-in-up animation for section headings.
  doc.querySelectorAll<HTMLElement>('.gsap-fade-up').forEach((el) => {
    const t = ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      onEnter: () => {
        gsap.fromTo(el, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' });
      },
    });
    triggers.push(t);
  });

  // Staggered children animation.
  doc.querySelectorAll<HTMLElement>('.gsap-stagger').forEach((container) => {
    const children = Array.from(container.children) as HTMLElement[];
    const t = ScrollTrigger.create({
      trigger: container,
      start: 'top 85%',
      onEnter: () => {
        gsap.fromTo(
          children,
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 0.65, stagger: 0.12, ease: 'power3.out' }
        );
      },
    });
    triggers.push(t);
  });

  // Parallax for image panels.
  doc.querySelectorAll<HTMLElement>('.gsap-parallax').forEach((el) => {
    const t = ScrollTrigger.create({
      trigger: el,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.2,
      onUpdate: (self) => {
        gsap.set(el, { y: self.progress * -60 });
      },
    });
    triggers.push(t);
  });

  // Count-up animation for stat numbers.
  doc.querySelectorAll<HTMLElement>('.gsap-count').forEach((el) => {
    const target = parseFloat(el.dataset.target ?? '0');
    const suffix = el.dataset.suffix ?? '';
    const t = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: () => {
        gsap.fromTo(
          { val: 0 },
          { val: target, duration: 1.8, ease: 'power2.out',
            onUpdate: function(this: { val: number }) {
              el.textContent = Math.round(this.val).toLocaleString() + suffix;
            }
          }
        );
      },
    });
    triggers.push(t);
  });

  // Horizontal line expand.
  doc.querySelectorAll<HTMLElement>('.gsap-line').forEach((el) => {
    gsap.set(el, { scaleX: 0, transformOrigin: 'left center' });
    const t = ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      onEnter: () => {
        gsap.to(el, { scaleX: 1, duration: 0.9, ease: 'power3.inOut' });
      },
    });
    triggers.push(t);
  });

  return () => {
    triggers.forEach((t) => t.kill());
    ScrollTrigger.getAll().forEach((t) => t.kill());
  };
}
