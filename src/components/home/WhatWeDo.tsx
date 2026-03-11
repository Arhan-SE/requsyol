import { FC } from "react";

const highlights = [
  {
    title: "Verified professionals",
    copy: "Pre-screened, compliant talent ready to start when you are.",
  },
  {
    title: "Frictionless hiring",
    copy: "Streamlined matching and documentation so teams move faster.",
  },
  {
    title: "Reliable partnership",
    copy: "Transparent process, clear communication, and ongoing support.",
  },
];

const WhatWeDo: FC = () => {
  return (
    <section className="relative bg-background text-foreground">
      <div className="container mx-auto px-6 py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3 max-w-xl">
            <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground">What we do</p>
            <h2 className="font-barlow text-3xl sm:text-4xl font-black uppercase leading-tight">
              Trusted hiring, simplified.
            </h2>
            <p className="text-sm text-muted-foreground">
              Focused, premium support with only the essentials you need to move from role to placement.
            </p>
          </div>

          <div className="hidden sm:block w-24 h-px bg-border/50" aria-hidden />
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border/60 bg-background/70 p-6 shadow-sm"
            >
              <p className="text-[12px] tracking-[0.2em] uppercase text-muted-foreground mb-3">{item.title}</p>
              <p className="text-base leading-relaxed text-foreground/90">{item.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
