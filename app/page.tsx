type AppDescriptor = {
  name: string;
  description: string;
  tag: string;
  status: "Disponible" | "Beta";
  href: string;
};

type WorkflowBlueprint = {
  title: string;
  description: string;
  badge: string;
  bullets: string[];
};

type ResourceLink = {
  title: string;
  description: string;
  href: string;
};

const navigation = [
  { label: "Applications", href: "#applications" },
  { label: "Workflows", href: "#workflows" },
  { label: "Ressources", href: "#ressources" },
] as const;

const applications: AppDescriptor[] = [
  {
    name: "Pilotage commercial",
    description:
      "Suivez les opportunités, prévisions et objectifs en temps réel avec une visibilité complète sur votre pipeline.",
    tag: "CRM Ventes",
    status: "Disponible",
    href: "#",
  },
  {
    name: "Support client omnicanal",
    description:
      "Unifiez tickets, chat et email pour garantir des résolutions rapides et des SLA respectés sur chaque canal.",
    tag: "Service client",
    status: "Disponible",
    href: "#",
  },
  {
    name: "Onboarding & Success",
    description:
      "Industrialisez vos parcours d'adoption, automatisez les relances et mesurez la santé de chaque compte.",
    tag: "Customer Success",
    status: "Disponible",
    href: "#",
  },
  {
    name: "Marketing automation",
    description:
      "Segmentez dynamiquement, déclenchez des scénarios personnalisés et mesurez l'impact sur les revenus.",
    tag: "Marketing",
    status: "Beta",
    href: "#",
  },
  {
    name: "Portail partenaire",
    description:
      "Alignez votre réseau indirect avec des playbooks partagés, des objectifs clairs et un reporting consolidé.",
    tag: "Channel",
    status: "Beta",
    href: "#",
  },
  {
    name: "Revenue analytics",
    description:
      "Pilotez la croissance avec des dashboards alimentés en temps réel par vos données CRM, finance et produit.",
    tag: "Insights",
    status: "Disponible",
    href: "#",
  },
];

const highlights = [
  {
    title: "Vue 360°",
    description: "Profils unifiés, historique complet et signaux d'engagement centralisés.",
    accent: "360",
  },
  {
    title: "Automations no-code",
    description: "Playbooks visuels, conditions avancées et synchronisation bidirectionnelle.",
    accent: "NO",
  },
  {
    title: "Données fiables",
    description: "Connecteurs natifs, gouvernance des accès et traçabilité intégrée.",
    accent: "DATA",
  },
] as const;

const workflows: WorkflowBlueprint[] = [
  {
    title: "Cycle de vente orchestré",
    description:
      "De la qualification à la signature, Zenstak automatise la collaboration entre équipes et assure la continuité du discours.",
    badge: "Cycle vente",
    bullets: [
      "Playbooks multi-étapes par segment ou taille de deal",
      "Alertes intelligentes sur les comptes à risque",
      "Synchronisation bidirectionnelle avec vos outils métiers",
    ],
  },
  {
    title: "Expérience client proactive",
    description:
      "Déclenchez les bonnes actions au bon moment grâce aux signaux produits, NPS et données d'usage consolidées.",
    badge: "Client",
    bullets: [
      "Scoring de santé configurable",
      "Campagnes in-app et email coordonnées",
      "Escalade automatique vers le support ou le success",
    ],
  },
  {
    title: "Pilotage financier en continu",
    description:
      "Reliez vos données CRM, facturation et comptabilité pour un forecast revenu fiable et partagé.",
    badge: "Finance",
    bullets: [
      "Rapprochement automatique des contrats et factures",
      "Projection MRR / ARR en temps réel",
      "Exports prêts pour la direction financière",
    ],
  },
];

const metrics = [
  { label: "Clients accompagnés", value: "320+" },
  { label: "Satisfaction CSAT", value: "98%" },
  { label: "Temps de déploiement", value: "4 semaines" },
] as const;

const resources: ResourceLink[] = [
  {
    title: "Marketplace Zenstak",
    description:
      "Activez des connecteurs certifiés (ERP, billing, téléphonie) ou développez les vôtres via notre API.",
    href: "#",
  },
  {
    title: "Académie CRM",
    description:
      "Parcours de formation interactifs, certifications par rôle et librairie de playbooks prêts à adapter.",
    href: "#",
  },
  {
    title: "Communauté leaders RevOps",
    description:
      "Échangez avec vos pairs, partagez vos dashboards et inspirez-vous des meilleures pratiques.",
    href: "#",
  },
  {
    title: "Support premium 24/7",
    description:
      "Accédez à nos experts, suivi dédié et SLA renforcé pour accélérer chaque projet stratégique.",
    href: "#",
  },
];

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className ?? "h-3 w-3"}
      fill="none"
      viewBox="0 0 12 12"
    >
      <path
        d="M5.25 2.25 9 6l-3.75 3.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path d="M9 6H1.5" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <header className="relative isolate overflow-hidden">
  <div className="absolute inset-0 -z-20 bg-linear-to-br from-indigo-500 via-indigo-500/85 to-sky-500 dark:from-zinc-950 dark:via-indigo-900/80 dark:to-indigo-950" />
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0)_55%)] dark:bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.45)_0%,rgba(14,116,144,0)_60%)]" />

        <div className="mx-auto max-w-6xl px-6 pb-20 pt-12 lg:px-10 lg:pb-28 lg:pt-16">
          <nav className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center justify-between gap-6">
              <span className="text-xl font-semibold tracking-tight text-white">Zenstak</span>
              <a
                href="#demarrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20 hover:text-white"
              >
                Demander une démo
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative font-medium transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="mt-16 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              Suite CRM modulaire
            </span>
            <h1 className="mt-8 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Une plateforme pensée pour aligner ventes, success et finance autour du client.
            </h1>
            <p className="mt-6 text-lg text-white/80 sm:text-xl">
              Zenstak centralise vos processus go-to-market, automatise les workflows critiques et
              offre une vision unifiée de la relation client. Passez de la donnée dispersée à une
              expérience fluide pour vos équipes et vos clients.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm font-medium text-white/80">
              <a
                href="#applications"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
              >
                Explorer la suite
                <ArrowIcon className="h-3 w-3" />
              </a>
              <a
                href="#ressources"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:border-white"
              >
                Voir les intégrations
              </a>
            </div>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/15 bg-white/10 p-6 text-white/85 backdrop-blur transition hover:bg-white/15"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-xs font-semibold tracking-[0.2em] text-white">
                  {item.accent}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-white/80">{item.description}</p>
              </div>
            ))}
          </div>

          <dl className="mt-16 grid gap-6 text-sm text-white/80 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur"
              >
                <dt className="text-xs uppercase tracking-[0.2em]">{metric.label}</dt>
                <dd className="mt-3 text-2xl font-semibold text-white">{metric.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <main className="flex-1">
        <section
          id="applications"
          className="border-b border-zinc-200/70 bg-zinc-50/80 py-20 dark:border-white/10 dark:bg-zinc-900/40"
        >
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
                  Suite d&apos;applications
                </span>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-zinc-900 dark:text-white lg:text-4xl">
                  Chaque équipe dispose de l&apos;application dont elle a besoin, connectée aux autres.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Composez votre stack idéale : activez uniquement les modules utiles, adaptez les
                processus à votre métier et partagez la même donnée de référence entre ventes,
                success, finance et direction.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {applications.map((app) => (
                <article
                  key={app.name}
                  className="group flex h-full flex-col justify-between rounded-3xl border border-zinc-200/70 bg-white/80 p-8 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-indigo-500/60 hover:shadow-xl dark:border-white/10 dark:bg-zinc-900/60"
                >
                  <div>
                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                      {app.tag}
                    </span>
                    <h3 className="mt-5 text-2xl font-semibold text-zinc-900 dark:text-white">
                      {app.name}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      {app.description}
                    </p>
                  </div>
                  <div className="mt-10 flex items-center justify-between">
                    <span
                      className={`text-xs font-medium ${
                        app.status === "Disponible"
                          ? "text-emerald-600 dark:text-emerald-400"
                          : "text-amber-500 dark:text-amber-400"
                      }`}
                    >
                      {app.status}
                    </span>
                    <a
                      href={app.href}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 transition hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                      Ouvrir
                      <ArrowIcon className="h-3 w-3" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="workflows" className="py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
                  Workflows pilotés par la donnée
                </span>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-zinc-900 dark:text-white lg:text-4xl">
                  Alignez les équipes autour de parcours orchestrés et mesurables.
                </h2>
                <p className="mt-6 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  Concevez des processus partagés qui réagissent aux signaux clés : un changement
                  d’usage produit, une opportunité à risque ou une facture en retard déclenchent
                  automatiquement les bonnes actions, sans ressaisies.
                </p>
              </div>
              <div className="space-y-6">
                {workflows.map((workflow) => (
                  <article
                    key={workflow.title}
                    className="rounded-3xl border border-zinc-200/70 bg-white/70 p-6 shadow-sm transition hover:border-indigo-500/50 hover:shadow-lg dark:border-white/10 dark:bg-zinc-900/50"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-200">
                        {workflow.badge}
                      </span>
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                        {workflow.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      {workflow.description}
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                      {workflow.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="ressources"
          className="border-y border-zinc-200/70 bg-zinc-50/80 py-20 dark:border-white/10 dark:bg-zinc-900/50"
        >
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
                  Ressources & écosystème
                </span>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-zinc-900 dark:text-white lg:text-4xl">
                  Tout ce qu’il faut pour opérer et faire évoluer votre stack CRM.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Accédez à des connecteurs certifiés, des formations guidées et des experts dédiés
                pour transformer vos ambitions commerciales en résultats mesurables.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {resources.map((resource) => (
                <article
                  key={resource.title}
                  className="flex h-full flex-col justify-between rounded-3xl border border-zinc-200/70 bg-white/80 p-8 shadow-sm transition hover:border-indigo-500/50 hover:shadow-lg dark:border-white/10 dark:bg-zinc-900/60"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                      {resource.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      {resource.description}
                    </p>
                  </div>
                  <a
                    href={resource.href}
                    className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 transition hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    En savoir plus
                    <ArrowIcon className="h-3 w-3" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="demarrer" className="py-20">
          <div className="mx-auto max-w-4xl rounded-3xl border border-indigo-200/60 bg-indigo-50 px-8 py-12 text-center shadow-sm dark:border-indigo-500/30 dark:bg-indigo-950/40">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">
              Mise en œuvre accompagnée
            </span>
            <h2 className="mt-6 text-3xl font-semibold text-indigo-900 dark:text-white">
              Lancez votre hub CRM en moins d’un mois.
            </h2>
            <p className="mt-4 text-sm leading-6 text-indigo-900/80 dark:text-indigo-100/70">
              Nos experts structurent vos processus, connectent vos outils existants et forment vos
              équipes. Vous gardez la main sur la configuration, nous accélérons la mise en
              production.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-semibold">
              <a
                href="mailto:hello@zenstak.com"
                className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-white transition hover:bg-indigo-500"
              >
                Contacter un expert
                <ArrowIcon className="h-3 w-3" />
              </a>
              <a
                href="#applications"
                className="inline-flex items-center gap-2 rounded-full border border-indigo-500/70 px-6 py-3 text-indigo-600 transition hover:bg-indigo-100 dark:border-indigo-400/70 dark:text-indigo-200 dark:hover:bg-indigo-900/60"
              >
                Découvrir les modules
                <ArrowIcon className="h-3 w-3" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200/70 bg-zinc-100/60 py-8 text-sm text-zinc-600 dark:border-white/10 dark:bg-zinc-900/70 dark:text-zinc-400">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Zenstak. Tous droits réservés.</span>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#applications" className="transition hover:text-zinc-900 dark:hover:text-white">
              Suite
            </a>
            <a href="#workflows" className="transition hover:text-zinc-900 dark:hover:text-white">
              Workflows
            </a>
            <a href="#ressources" className="transition hover:text-zinc-900 dark:hover:text-white">
              Ressources
            </a>
            <a href="mailto:hello@zenstak.com" className="transition hover:text-zinc-900 dark:hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
