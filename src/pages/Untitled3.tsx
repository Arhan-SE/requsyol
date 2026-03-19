import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/animations/ScrollReveal";

const Untitled3 = () => {
  return (
    <Layout>
      <div className="pt-28 sm:pt-36 pb-12 md:pt-44 md:pb-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <h1
              className="font-barlow font-black uppercase text-[clamp(3rem,10vw,7rem)] leading-[0.88] tracking-tight text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #56A8D6 0%, hsl(var(--logo-orange)) 50%, #2F7FB2 100%)" }}
            >
              Untitled.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-10 text-sm leading-[1.8] text-muted-foreground md:text-base max-w-xl">
              Content coming soon.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </Layout>
  );
};

export default Untitled3;
