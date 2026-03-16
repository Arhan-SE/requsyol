import { useEffect, useRef, useState } from "react";

interface DeferredBackgroundVideoProps {
  src: string;
  className?: string;
  priority?: boolean;
  rootMargin?: string;
}

const DeferredBackgroundVideo = ({
  src,
  className = "w-full h-full object-cover",
  priority = false,
  rootMargin = "300px 0px",
}: DeferredBackgroundVideoProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(priority);

  useEffect(() => {
    if (priority || shouldLoad) return;

    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [priority, rootMargin, shouldLoad]);

  return (
    <div ref={containerRef} className="absolute inset-0" aria-hidden="true">
      {shouldLoad ? (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload={priority ? "auto" : "none"}
          className={className}
          style={{ filter: "none" }}
        />
      ) : null}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
};

export default DeferredBackgroundVideo;
