export function Problem() {
    return (
        <section
        className="surface-paper relative mt-[6vh] pb-28 pt-[18vh] md:pb-40"
        style={{ clipPath: "polygon(0 6vh, 100% 0, 100% 100%, 0 100%)" }}
        >
            <div className="mx-auto max-w-310 px-6 md:px-12">
                <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
                    <h2 className="display reveal max-w-[16ch] text-[clamp(2rem,5.4vw,3.6rem)]">
                        Postar todos os dias não significa vender todos os dias.
                    </h2>

                    <div className="reveal space-y-6 text-md leading-[1.75] text-muted-foreground md:text-[1.05rem]">
                        <p>
                            Você grava, edita, posta. Alguns vídeos passam de dez mil views e mesmo
                            assim o painel de pedidos continua parado. A conta não fecha: atenção
                            existe, venda não.
                        </p>
                        <p>
                            Na prática, quase sempre é a mesma sequência de erros. Produto escolhido
                            porque estava em alta, não porque vende. Vídeo com cara de comercial, que
                            o público reconhece nos primeiros dois segundos e pula. Um mês de
                            consistência, depois duas semanas sem postar.
                        </p>
                        <p>
                            E, no fim, o pior deles: olhar as métricas sem saber ler nada além do
                            número de visualizações — e repetir exatamente o que não estava
                            funcionando.
                        </p>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="mt-20 grid gap-x-10 gap-y-8 border-t border-current/15 pt-10 text-[0.95rem] sm:grid-cols-2 lg:grid-cols-3 w-fit">
                        {[
                            "Views que não viram pedido",
                            "Produto escolhido no achismo",
                            "Vídeo com cara de propaganda",
                            "Consistência que dura três semanas",
                            "Métrica olhada, não interpretada",
                            "Nenhum padrão para repetir",
                        ].map((t, i) => (
                            <p key={t} className="reveal flex gap-4 leading-snug">
                                <span className="font-mono text-xs text-primary">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                {t}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export function Turn() {
    return (
        <section className="relative flex min-h-[92svh] items-center py-28">
            <div className="mx-auto w-full max-w-310 px-6 md:px-12">
                <p className="eyebrow reveal">A virada</p>
                <p className="display mt-10 max-w-[18ch] text-[clamp(2.3rem,7vw,5rem)]">
                    <span className="reveal inline-block">O problema não é o TikTok.</span>{" "}
                    <span className="reveal inline-block text-primary">
                        É não saber transformar atenção em intenção de compra.
                    </span>
                </p>
                <p className="reveal mt-14 max-w-[48ch] text-lg leading-relaxed text-muted-foreground md:ml-auto md:text-right">
                    A VendaTok inverte a ordem: primeiro a decisão de compra, depois o roteiro.
                    O vídeo deixa de ser conteúdo com um link no fim e passa a ser a própria
                    demonstração do motivo pelo qual alguém compraria agora.
                </p>
            </div>
        </section>
    );
}

const steps = [
    {
        n: "01",
        t: "Escolha produtos com potencial",
        d: "Critérios objetivos de margem, demanda e facilidade de demonstração em vídeo curto.",
    },
    {
        n: "02",
        t: "Crie vídeos que prendem atenção",
        d: "Estrutura de abertura, ritmo e corte para segurar o espectador nos primeiros segundos.",
    },
    {
        n: "03",
        t: "Apresente sem parecer propaganda",
        d: "Demonstração no lugar de argumento. O produto aparece resolvendo algo, não sendo vendido.",
    },
    {
        n: "04",
        t: "Transforme atenção em cliques",
        d: "Onde entra o CTA, como conduzir para a vitrine e o que fazer com quem só assistiu.",
    },
    {
        n: "05",
        t: "Analise o que funciona e repita",
        d: "Leitura de retenção, cliques e conversão para descobrir o padrão que gera pedido.",
    },
];

export function Method() {
    return (
        <section id="metodo" className="relative border-t border-border py-24 md:py-32">
            <div className="mx-auto max-w-310 px-6 md:px-12">
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <h2 className="display max-w-[14ch] text-[clamp(2rem,5vw,3.4rem)]">
                        O método em cinco capítulos
                    </h2>
                    <p className="max-w-[32ch] text-md leading-relaxed text-muted-foreground">
                        Nenhum passo existe sozinho. Cada um só faz sentido depois que o anterior
                        está funcionando.
                    </p>
                </div>

                <div className="relative mt-16" data-method>
                    <div
                        aria-hidden
                        className="absolute left-0 top-0 hidden h-full w-px bg-border md:block"
                    >
                        <span
                            className="block w-px origin-top bg-primary"
                            style={{ height: "100%", transform: "scaleY(0)" }}
                            data-method-progress
                        />
                    </div>

                    <div className="md:pl-12">
                        {steps.map((s) => (
                            <article
                                key={s.n}
                                className="reveal grid gap-3 border-b border-border py-10 md:grid-cols-[auto_1.1fr_1fr] md:items-baseline md:gap-10"
                                data-step
                            >
                                <span className="font-mono text-md text-primary">{s.n}</span>
                                <h3 className="display text-[clamp(1.5rem,3.4vw,2.3rem)]">{s.t}</h3>
                                <p className="text-md leading-relaxed text-muted-foreground">{s.d}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

const experience: [string, string][] = [
    ["Aulas práticas", "Gravação, edição e publicação acompanhando o processo real, do zero ao vídeo no ar."],
    ["Seleção de produtos", "Como garimpar na vitrine do TikTok Shop e validar antes de gravar."],
    ["Roteiros prontos", "Modelos de abertura, demonstração e fechamento para adaptar ao seu nicho."],
    ["Análise de vídeos", "Revisão dos seus vídeos com apontamento do que está travando a conversão."],
    ["Estratégias de conversão", "Do gancho ao clique na vitrine, incluindo o que fazer com quem não comprou."],
    ["Acompanhamento", "Encontros para destravar dúvidas e ajustar rota com o que você já publicou."],
    ["Materiais de apoio", "Checklists de gravação, planilha de produtos e banco de ganchos."],
];

export function Experience() {
    return (
        <section className="relative py-24 md:py-32">
            <div className="mx-auto max-w-310 px-6 md:px-12">
                <p className="eyebrow reveal">Por dentro da mentoria</p>
                <h2 className="display reveal mt-6 max-w-[20ch] text-[clamp(1.9rem,4.6vw,3.1rem)]">
                    O que você recebe quando entra
                </h2>

                <div className="mt-16 grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
                    <ol className="relative border-l border-border pl-8">
                        {experience.map(([t, d]) => (
                        <li key={t} className="reveal relative pb-9 last:pb-0">
                            <span className="absolute -left-8.25 top-[0.55rem] h-1.75 w-1.75 rounded-full bg-primary" />
                            <h3 className="text-lg font-semibold tracking-tight">{t}</h3>
                            <p className="mt-1.5 max-w-[46ch] text-sm leading-relaxed text-muted-foreground">
                                {d}
                            </p>
                        </li>
                        ))}
                    </ol>

                    <div className="reveal self-start">
                        <div className="relative w-full overflow-hidden rounded-[3px] border border-border bg-card px-6 py-7">
                            <p className="eyebrow">Anatomia de um vídeo que vende</p>
                            <div className="mt-7 space-y-5">
                                {[
                                ["0s — 2s", "Gancho", 80],
                                ["2s — 9s", "Demonstração", 62],
                                ["9s — 13s", "Prova", 34],
                                ["13s — 15s", "Chamada", 20],
                                ].map(([time, label, w], i) => (
                                    <div key={label as string}>
                                        <div className="flex items-baseline justify-between text-sm">
                                            <span className="font-medium">{label}</span>
                                            <span className="font-mono text-xs text-muted-foreground">
                                                {time}
                                            </span>
                                        </div>
                                        <div className="mt-2 h-0.75 w-full bg-border">
                                            <span
                                                className="block h-full"
                                                style={{
                                                width: `${w}%`,
                                                background:
                                                    i === 1 ? "var(--primary)" : "color-mix(in oklab, var(--primary) 35%, transparent)",
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                            A estrutura de vídeo que você vai repetir em cada gravação.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function BeforeAfter() {
    return (
        <section className="relative py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-6 md:px-12">
                <div className="grid items-center gap-10 md:grid-cols-[1fr_auto_1fr] md:gap-12">
                    <div className="reveal">
                        <p className="eyebrow">Antes</p>
                        <p className="display mt-5 text-[clamp(1.6rem,3.6vw,2.5rem)] text-muted-foreground">
                            “Posto, mas não sei por que não vendo.”
                        </p>
                    </div>
                    <div aria-hidden className="hidden h-24 w-px bg-border md:block" />
                    <div className="reveal">
                        <p className="eyebrow text-primary">Depois</p>
                        <p className="display mt-5 text-[clamp(1.6rem,3.6vw,2.5rem)]">
                            “Sei o que vender, como apresentar e como analisar o que está
                            funcionando.”
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function Proof() {
    return (
        <section className="relative border-t border-border py-24 md:py-32">
            <div className="mx-auto max-w-310 px-6 md:px-12">
                <figure className="reveal">
                    <blockquote className="display text-[clamp(1.7rem,4.4vw,3rem)]">
                        “Parei de postar no automático. Hoje eu escolho o produto pensando no vídeo
                        que vou conseguir fazer com ele.”
                    </blockquote>
                    <figcaption className="mt-6 text-md text-muted-foreground">
                        Marina Alves — afiliada, nicho de casa e organização
                    </figcaption>
                </figure>

                <div className="mt-16 grid gap-10 border-t border-border pt-10 md:grid-cols-2 md:gap-20">
                    <figure className="reveal">
                        <blockquote className="text-md leading-relaxed">
                            “O que mudou foi a leitura das métricas. Eu via só views; agora eu sei em
                            que segundo o pessoal sai do vídeo.”
                        </blockquote>
                        <figcaption className="mt-3 text-md text-muted-foreground">
                            Diego Prado — loja de acessórios
                        </figcaption>
                    </figure>
                    <figure className="reveal">
                        <blockquote className="text-md leading-relaxed">
                            “Meus vídeos deixaram de parecer anúncio. A diferença na retenção apareceu
                            na primeira semana.”
                        </blockquote>
                        <figcaption className="mt-3 text-md text-muted-foreground">
                            Camila Ferraz — criadora de conteúdo
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
}

export function ForWho() {
    return (
        <section className="relative py-24 md:py-32">
            <div className="mx-auto max-w-310 px-6 md:px-12">
                <h2 className="display reveal max-w-[18ch] text-[clamp(1.9rem,4.8vw,3.2rem)]">
                    A VendaTok foi criada para quem quer parar de postar no escuro.
                </h2>
                <div className="mt-12 flex flex-wrap items-baseline gap-x-8 gap-y-4 text-[clamp(1.1rem,1.8vw,1.7rem)] text-muted-foreground">
                    {[
                        "afiliados",
                        "pequenos negócios",
                        "criadores de conteúdo",
                        "quem está começando agora",
                    ].map((t) => (
                        <span key={t} className="reveal">
                            {t}
                            <span className="ml-4 text-primary">/</span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function Offer() {
    return (
        <section id="oferta" className="surface-paper relative py-24 md:py-32">
            <div className="mx-auto max-w-310 px-6 md:px-12">
                <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-24">
                    <div>
                        <p className="eyebrow reveal">A mentoria</p>
                        <h2 className="display reveal mt-5 text-[clamp(2.2rem,6vw,4rem)]">
                            Venda<span className="text-primary">Tok</span>
                        </h2>
                        <p className="reveal mt-5 max-w-[40ch] text-[1.02rem] leading-relaxed text-muted-foreground">
                            Mentoria completa para transformar conteúdo em vendas no TikTok Shop.
                        </p>

                        <ul className="reveal mt-10 space-y-3 text-md">
                            {[
                                "Módulos gravados com o método completo, do produto ao pedido",
                                "Encontros ao vivo de acompanhamento e revisão de vídeos",
                                "Banco de ganchos, roteiros e checklists de gravação",
                                "Planilha de seleção e validação de produtos",
                                "Comunidade fechada de alunos",
                                "Bônus: aula de bastidores de uma gravação completa",
                            ].map((t) => (
                                <li key={t} className="flex gap-4 border-b border-current/10 pb-3">
                                    <span className="mt-[0.55rem] h-1.25 w-1.25 shrink-0 rounded-full bg-primary" />
                                    {t}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="reveal self-start border-t-2 border-primary pt-8">
                        <p className="text-md text-muted-foreground">Acesso por 12 meses</p>
                        <div className="mt-3">
                            <p className="eyebrow text-primary">Apenas</p>
                            <p className="display text-[clamp(2.4rem,7vw,3.6rem)]">
                                12x de <span className="text-primary">R$ 97</span>
                            </p>
                            <p className="mt-1 text-md font-medium text-muted-foreground">
                                ou R$ 978 à vista
                            </p>
                        </div>
                        <p className="mt-3 text-md leading-relaxed text-muted-foreground">
                            Formato online, com aulas liberadas para assistir no seu ritmo e encontros
                            ao vivo mensais.
                        </p>
                        <a href="#final" className="cta mt-8 w-full">
                            Quero entrar na VendaTok
                        </a>
                        <p className="mt-4 text-sm text-muted-foreground">
                            Pagamento seguro • Garantia de 7 dias
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function FinalCta() {
    return (
        <section id="final" className="relative flex items-center justify-center min-h-[85svh] py-24">
            <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[130px]"
                style={{
                background:
                    "radial-gradient(circle, color-mix(in oklab, var(--primary) 40%, transparent), transparent 70%)",
                }}
            />
            <div className="relative flex flex-col items-center w-full max-w-310 px-6 md:px-12 gap-10">
                <h2 className="display text-center reveal max-w-[20ch] text-[clamp(2.1rem,6.2vw,4.4rem)]">
                    Seu próximo vídeo pode ser só mais um vídeo.{" "}
                    <span className="text-primary">
                        Ou pode ser o começo de uma venda.
                    </span>
                </h2>
                <div className="reveal flex flex-col">
                    <a href="#oferta" className="cta">
                        Quero entrar na VendaTok
                    </a>
                    <p className="mt-4 text-md text-muted-foreground">
                        Compra 100% segura • Garantia incondicional de 7 dias
                    </p>
                </div>
            </div>
        </section>
    );
}

export function Footer() {
    return (
        <footer className="border-t border-border px-6 py-10 md:px-12">
            <div className="mx-auto flex max-w-310 flex-wrap items-center justify-between gap-4">
                <span className="display text-xl">
                    Venda<span className="text-primary">Tok</span>
                </span>
                <nav className="flex gap-6 text-md text-muted-foreground">
                    <a href="#metodo" className="hover:text-foreground">
                        Método
                    </a>
                    <a href="#" className="hover:text-foreground">
                        Termos
                    </a>
                    <a href="#" className="hover:text-foreground">
                        Privacidade
                    </a>
                </nav>
                <p className="text-md text-muted-foreground">
                    © {new Date().getFullYear()} VendaTok
                </p>
            </div>
        </footer>
    );
}
