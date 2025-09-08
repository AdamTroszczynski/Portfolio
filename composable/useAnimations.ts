import gsap from 'gsap';

export const useAnimations = () => {
  const initFadeIn = () => {
    gsap.utils.toArray<HTMLElement>('.gsapFadeIn').forEach((el) => {
      gsap.fromTo(
        el,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: 'power1.out',
          duration: 0.6,
          onComplete: () => {
            gsap.set(el, { clearProps: 'all' });
          },
          scrollTrigger: {
            trigger: el,
            start: '100px bottom',
            toggleActions: 'play none none none',
          },
        },
      );
    });
  };

  const initOpacity = () => {
    gsap.utils.toArray<HTMLElement>('.gsapOpacity').forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0 },
        {
          opacity: 1,
          ease: 'power1.inOut',
          duration: 0.6,
          onComplete: () => {
            gsap.set(el, { clearProps: 'all' });
          },
          scrollTrigger: {
            trigger: el,
            start: '100px bottom',
            toggleActions: 'play none none none',
          },
        },
      );
    });
  };

  return { initFadeIn, initOpacity };
};
