import { useEffect } from "react";
import Lenis from "lenis";

const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.06,        // lower = more resistance (0.1 is default, 0.06 feels premium)
      smoothWheel: true,
      wheelMultiplier: 0.8, // slightly reduce wheel speed for resistance feel
      touchMultiplier: 1.2,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
};

export default useSmoothScroll;
