import heroImg from "@/assets/hero-vendatok.jpg";
import Image from "next/image";

export function Hero() {
    return (
        <section
            id="hero"
            className="relative flex min-h-svh flex-col overflow-hidden"
            data-hero
        >
            {/* light source behind the composition */}
            <div
                aria-hidden
                className="pointer-events-none absolute right-[20%] top-[-10%] h-[70vh] w-[70vw] rounded-full opacity-40 blur-[120px]"
                style={{
                background:
                    "radial-gradient(circle, color-mix(in oklab, var(--primary) 45%, transparent), transparent 70%)",
                }}
                data-hero-glow
            />

            {/* <header className="relative z-10 flex items-center justify-between px-6 pt-7 md:px-12">
                <span className="display text-[1.35rem] tracking-tighter">
                Venda<span className="text-primary">Tok</span>
                </span>
                <a href="#oferta" className="hidden text-sm text-muted-foreground hover:text-foreground md:block">
                Ver a mentoria
                </a>
            </header> */}

            <div className="relative z-10 mx-auto grid w-full max-w-310 flex-1 grid-cols-1 items-center gap-10 px-6 justify-center md:px-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-4 lg:pb-16">
                <div className="relative z-10">
                    <p className="eyebrow reveal" data-hero-eyebrow>
                        Mentoria TikTok Shop
                    </p>

                    <h1 className="display mt-6 text-[clamp(2.4rem,6.4vw,4.6rem)] whitespace-nowrap">
                        <span className="block overflow-hidden">
                            <span className="block" data-hero-line>
                                Transforme vídeos
                            </span>
                        </span>
                        <span className="block overflow-hidden">
                            <span className="block" data-hero-line>
                                em vendas no
                            </span>
                        </span>
                        <span className="block overflow-hidden">
                            <span className="block text-primary" data-hero-line>
                                TikTok Shop.
                            </span>
                        </span>
                    </h1>

                    <p
                        className="reveal mt-7 max-w-[46ch] text-[0.98rem] leading-relaxed text-muted-foreground md:text-[1.05rem]"
                        data-hero-sub
                    >
                        Aprenda a criar conteúdo que chama atenção, apresentar produtos que despertam
                        desejo e transformar visualizações em pedidos — mesmo começando do zero.
                    </p>

                    <div className="reveal mt-9" data-hero-cta>
                        <a href="#oferta" className="cta">
                            Quero vender pelo TikTok Shop
                        </a>
                        <p className="mt-4 text-[0.78rem] text-muted-foreground">
                            Mentoria prática • Método passo a passo • Aplicação imediata
                        </p>
                    </div>
                </div>

                <div className="relative" data-hero-visual>
                    <div className="relative mx-auto w-[78%] max-w-105 lg:ml-auto lg:mr-0 lg:w-full">
                        <Image
                            src={heroImg}
                            width={1104}
                            height={1408}
                            alt="Composição editorial com smartphone exibindo um vídeo de produto no TikTok Shop, caixa de produto e cartão coral"
                            className="w-full rounded-xs object-cover"
                            fetchPriority="high"
                            loading="eager"
                        />
                        <div
                            aria-hidden
                            className="absolute inset-x-0 bottom-0 h-1/3"
                            style={{
                                background: "linear-gradient(to bottom, transparent, var(--background))",
                            }}
                        />
                    </div>
                    {/* <p className="mt-5 hidden max-w-[24ch] text-[0.74rem] leading-relaxed text-muted-foreground lg:block">
                        Um vídeo. Um produto. Uma decisão de compra em menos de 15 segundos.
                    </p> */}
                </div>
            </div>

            <div
                className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[0.68rem] tracking-[0.24em] text-muted-foreground uppercase"
                data-scroll-hint
            >
                <span className="mx-auto mb-2 block h-8 w-px bg-border" />
                role
            </div>
        </section>
    );
}
