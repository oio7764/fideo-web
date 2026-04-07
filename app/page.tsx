"use client";

import Link from "next/link";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.example.fideo";

function ShieldBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 120 145"
        className="h-full w-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.45)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="shieldGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F8E79A" />
            <stop offset="18%" stopColor="#E4C44E" />
            <stop offset="45%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#B98D12" />
            <stop offset="100%" stopColor="#F3D86E" />
          </linearGradient>

          <linearGradient id="shieldStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.65)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.18)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.55)" />
          </linearGradient>

          <filter id="shieldGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0.83
                      0 1 0 0 0.69
                      0 0 1 0 0.22
                      0 0 0 0.45 0"
            />
          </filter>
        </defs>

        <path
          d="M60 5 L108 20 L108 76
             Q108 108 60 138
             Q12 108 12 76
             L12 20 Z"
          fill="#D4AF37"
          filter="url(#shieldGlow)"
          opacity="0.35"
        />

        <path
          d="M60 5 L108 20 L108 76
             Q108 108 60 138
             Q12 108 12 76
             L12 20 Z"
          fill="url(#shieldGold)"
          stroke="url(#shieldStroke)"
          strokeWidth="2.4"
        />

        <path
          d="M60 13 L98 25 L98 75
             Q98 101 60 128
             Q22 101 22 75
             L22 25 Z"
          fill="none"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="1.2"
        />

        <g
          transform="translate(60 72)"
          fill="none"
          stroke="#13233A"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="0" cy="-22" r="4" fill="#13233A" stroke="none" />
          <line x1="-22" y1="-16" x2="22" y2="-16" />
          <line x1="0" y1="-16" x2="0" y2="12" />
          <line x1="-14" y1="-16" x2="-18" y2="-2" />
          <line x1="14" y1="-16" x2="18" y2="-2" />
          <path d="M-26 5 Q-18 10 -10 5" />
          <path d="M10 5 Q18 10 26 5" />
          <line x1="-18" y1="-2" x2="-24" y2="4" />
          <line x1="-18" y1="-2" x2="-12" y2="4" />
          <line x1="18" y1="-2" x2="12" y2="4" />
          <line x1="18" y1="-2" x2="24" y2="4" />
          <line x1="-16" y1="18" x2="16" y2="18" />
        </g>
      </svg>
    </div>
  );
}

function GooglePlayBadge({
  href,
  className = "",
}: {
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Disponible sur Google Play"
      className={`inline-flex items-center gap-3 rounded-2xl border border-white/12 bg-black px-4 py-3 text-left transition hover:border-[#D4AF37]/40 hover:bg-black/90 ${className}`}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5">
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path d="M3 2L14.5 12L3 22V2Z" fill="#00D26A" />
          <path
            d="M14.5 12L18.2 8.4L21 10C22.2 10.7 22.2 13.3 21 14L18.2 15.6L14.5 12Z"
            fill="#FFD24A"
          />
          <path
            d="M3 2L11.4 10.4L14.5 12L18.2 8.4L3 2Z"
            fill="#4AA3FF"
          />
          <path
            d="M3 22L11.4 13.6L14.5 12L18.2 15.6L3 22Z"
            fill="#FF5252"
          />
        </svg>
      </div>

      <div className="leading-tight">
        <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
          Disponible sur
        </div>
        <div className="text-sm font-semibold text-white">Google Play</div>
      </div>
    </a>
  );
}

const pillars = [
  {
    title: "Rigueur probatoire",
    text: "Chaque preuve repose sur une structure documentaire cohérente, lisible et exploitable.",
  },
  {
    title: "Intégrité technique",
    text: "Double empreinte SHA-256, cohérence entre les supports et détection immédiate de toute altération.",
  },
  {
    title: "Horodatage indépendant",
    text: "Ancrage OpenTimestamps sur Bitcoin pour attester l’existence d’une donnée à une date donnée.",
  },
];

const proofItems = [
  "Vidéo originale",
  "Vidéo scellée",
  "Identifiant unique de preuve",
  "Hash SHA-256 original",
  "Hash SHA-256 scellé",
  "Métadonnées GPS et horodatage",
  "Fichier JSON de preuve",
  "Certificat PDF",
  "Preuve OpenTimestamps (.ots)",
  "Empreinte appareil",
];

const statusItems = [
  {
    code: "LCL",
    title: "Preuve sauvegardée localement",
    text: "La preuve est immédiatement conservée sur l’appareil, même hors connexion.",
  },
  {
    code: "CLD",
    title: "Synchronisation cloud",
    text: "Les données de preuve sont ensuite synchronisées vers l’espace cloud de l’utilisateur.",
  },
  {
    code: "BTC",
    title: "Ancrage blockchain",
    text: "Le hash de la vidéo scellée est ancré via OpenTimestamps sur Bitcoin.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Capture sécurisée",
    text: "Enregistrement vidéo avec horodatage, GPS et contexte de preuve visible dès la captation.",
  },
  {
    step: "2",
    title: "Scellement",
    text: "Création d’une vidéo scellée, génération des empreintes cryptographiques et attribution d’un identifiant unique.",
  },
  {
    step: "3",
    title: "Structuration du dossier",
    text: "Constitution d’un ensemble cohérent incluant vidéo, JSON, certificat PDF, métadonnées et statuts.",
  },
  {
    step: "4",
    title: "Synchronisation et ancrage",
    text: "Sauvegarde locale immédiate, synchronisation cloud et ancrage blockchain dès que la connectivité le permet.",
  },
];

const flowSteps = [
  { label: "Capture", time: "t = 0" },
  { label: "Hash", time: "" },
  { label: "Scellement", time: "" },
  { label: "Métadonnées", time: "" },
  { label: "Identifiant", time: "" },
  { label: "Dossier", time: "" },
];

const flowBranches = [
  {
    title: "À partir du scellement",
    items: ["SHA-256 original", "SHA-256 scellé"],
  },
  {
    title: "À partir des métadonnées",
    items: ["GPS", "Horodatage", "Empreinte appareil"],
  },
  {
    title: "À partir du dossier",
    items: ["JSON", "PDF", ".OTS", "LCL / CLD / BTC"],
  },
];

export default function FideoWebsiteLandingPage() {
  return (
    <div className="min-h-screen bg-[#0F1B2E] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0F1B2E]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#top" className="flex items-center gap-3">
            <ShieldBadge className="h-11 w-11" />
            <div>
              <div className="text-xl font-semibold tracking-[0.25em] text-[#D4AF37]">
                FIDÉO
              </div>
              <div className="text-xs text-slate-400">
                preuve vidéo certifiée
              </div>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <nav className="flex items-center gap-8 text-sm text-slate-300">
              <a
                href="#fonctionnement"
                className="transition hover:text-[#D4AF37]"
              >
                Fonctionnement
              </a>
              <a
                href="#cadre-probatoire"
                className="transition hover:text-[#D4AF37]"
              >
                Cadre probatoire
              </a>
              <a
                href="#verification"
                className="transition hover:text-[#D4AF37]"
              >
                Vérification
              </a>
            </nav>

            <GooglePlayBadge href={PLAY_STORE_URL} />
          </div>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid gap-14 md:grid-cols-[1.08fr_0.92fr] md:items-center">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-[#D4AF37]">
                Structure probatoire mobile
              </div>

              <h1 className="mt-8 text-5xl font-semibold leading-tight text-white md:text-6xl">
                Une preuve vidéo structurée,
                conçue pour documenter,
                préserver et vérifier.
              </h1>

              <p className="mt-8 text-lg leading-8 text-slate-300">
                FIDÉO ne se limite pas à enregistrer une vidéo. L’application
                génère un dossier de preuve cohérent associant capture,
                horodatage, géolocalisation, empreintes cryptographiques,
                identifiant unique, certificat PDF et ancrage blockchain.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Disponible sur Google Play, l’application a été pensée pour une
                utilisation mobile immédiate, y compris dans des contextes où la
                connexion réseau n’est pas garantie.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <GooglePlayBadge
                  href={PLAY_STORE_URL}
                  className="min-w-[210px]"
                />

                <a
                  href="#fonctionnement"
                  className="rounded-2xl border border-white/15 px-6 py-3 font-medium text-white transition hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
                >
                  Voir le fonctionnement
                </a>

                <Link
                  href="/verify"
                  className="rounded-2xl border border-[#D4AF37]/30 px-6 py-3 font-medium text-[#D4AF37] transition hover:bg-[#D4AF37]/10"
                >
                  Vérifier une preuve
                </Link>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                Téléchargement et installation via le Google Play Store.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-white/5 p-5 shadow-2xl shadow-black/30">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#13233A] p-5">
                <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      Dossier de preuve
                    </div>
                    <div className="mt-2 text-lg font-semibold text-white">
                      FIDEO-OiO-20260404-722UBU
                    </div>
                  </div>

                  <div className="rounded-full border border-green-400/30 bg-green-500/10 px-3 py-1 text-sm font-medium text-green-300">
                    Confirmée ✓
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      Fichier scellé
                    </div>
                    <div className="mt-2 text-sm text-white">
                      FIDEO-OiO-20260404-722UBU_sealed.mp4
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      Blockchain
                    </div>
                    <div className="mt-2 text-sm text-[#D4AF37]">
                      OpenTimestamps / Bitcoin
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      GPS
                    </div>
                    <div className="mt-2 text-sm text-white">
                      48.792389, 2.608312
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      Horodatage
                    </div>
                    <div className="mt-2 text-sm text-white">
                      04/04/2026 01:58:41
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-[#0F1B2E] p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    SHA-256 vidéo scellée
                  </div>
                  <div className="mt-2 break-all font-mono text-xs leading-6 text-slate-300">
                    c3394cb9221aa563c7599416dab6a20886551923eb53bd2d6dbcff3f470b96df
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center text-xs text-slate-300">
                    <span className="font-semibold text-green-300">LCL ✓</span>
                    <div className="mt-1 text-[11px] text-slate-400">Local</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center text-xs text-slate-300">
                    <span className="font-semibold text-green-300">CLD ✓</span>
                    <div className="mt-1 text-[11px] text-slate-400">Cloud</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center text-xs text-slate-300">
                    <span className="font-semibold text-green-300">BTC ✓</span>
                    <div className="mt-1 text-[11px] text-slate-400">
                      Bitcoin
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4 text-sm leading-7 text-slate-200">
                  Chaque élément est lié : vidéo originale, vidéo scellée,
                  identifiant, hashes, métadonnées, preuve JSON, certificat PDF
                  et ancrage blockchain.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-4 h-9 w-9 rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/10" />
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="rounded-3xl border border-[#D4AF37]/20 bg-gradient-to-br from-[#13233A] to-[#0F1B2E] p-8 md:p-10">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Une logique de preuve, pas un simple fichier.
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
              Une vidéo isolée reste fragile. Elle peut être copiée, sortie de
              son contexte, altérée ou contestée. FIDÉO transforme
              l’enregistrement en un ensemble structuré reliant la captation,
              les métadonnées, les empreintes cryptographiques, les supports
              documentaires et la preuve d’existence indépendante.
            </p>
          </div>
        </section>

        <section
          id="fonctionnement"
          className="mx-auto max-w-7xl scroll-mt-28 px-6 pb-24"
        >
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Fonctionnement
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Chaque enregistrement suit une chaîne structurée visant à
              préserver l’intégrité du contenu, documenter son contexte et
              faciliter une vérification ultérieure.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {workflow.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="text-lg font-bold text-[#D4AF37]">
                  {item.step}
                </div>
                <h3 className="mt-2 font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="rounded-3xl border border-[#D4AF37]/20 bg-gradient-to-br from-[#13233A] to-[#0F1B2E] p-8 md:p-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                Flux continu de traitement
              </div>

              <h2 className="mt-6 text-3xl font-semibold text-white md:text-4xl">
                Chaîne de traitement en flux continu
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Lors de la prise vidéo, les opérations critiques s’enchaînent
                dans un flux unique et quasi instantané. L’objectif n’est pas
                d’ajouter des couches après coup, mais de structurer la preuve
                pendant le processus de captation.
              </p>
            </div>

            <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-[#0C1626]/90 p-6 md:p-8">
              <div className="mb-8 flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
                    Pipeline probatoire
                  </div>
                  <div className="mt-2 text-sm text-slate-400">
                    Exécution quasi instantanée en flux continu
                  </div>
                </div>

                <div className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2 font-mono text-sm text-[#D4AF37]">
                  t → t + ε
                </div>
              </div>

              <div className="relative pb-20">
                <div className="absolute left-0 right-0 top-[42px] h-[2px] bg-white/10" />
                <div className="flow-pulse absolute left-0 right-0 top-[36px] h-[14px]" />

                <div className="grid gap-4 md:grid-cols-6">
                  {flowSteps.map((step, index) => {
                    const delay = `${index * 0.64}s`;

                    return (
                      <div key={step.label} className="relative text-center">
                        <div
                          className="flow-node relative z-10 mx-auto flex h-5 w-5 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#0F1B2E]"
                          style={{ animationDelay: delay }}
                        >
                          <div
                            className="flow-node-core h-2.5 w-2.5 rounded-full bg-[#D4AF37]"
                            style={{ animationDelay: delay }}
                          />
                        </div>

                        <div
                          className="flow-card mt-5 rounded-2xl border border-white/10 bg-white/5 p-4"
                          style={{ animationDelay: delay }}
                        >
                          <div className="text-[11px] font-mono tracking-[0.18em] text-[#D4AF37]">
  {step.label === "Capture" ? "t = 0" : <>t + {"\u03B5"}</>}
</div>
                          <div className="mt-2 text-sm font-semibold text-white">
                            {step.label}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-3">
                  {flowBranches.map((branch, index) => (
                    <div
                      key={branch.title}
                      className="flow-branch rounded-2xl border border-white/10 bg-white/5 p-5"
                      style={{ animationDelay: `${2.8 + index * 0.32}s` }}
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flow-branch-dot h-2 w-2 rounded-full bg-[#D4AF37]" />
                        <h3 className="text-sm font-semibold text-white">
                          {branch.title}
                        </h3>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {branch.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 px-3 py-2 text-xs text-slate-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4 text-sm leading-7 text-slate-200">
                La preuve ne se constitue pas à posteriori. Capture, scellement,
                métadonnées, identifiant et structuration documentaire
                s’enchaînent dans un même mouvement logique.
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Contenu d’un dossier de preuve
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              FIDÉO ne produit pas un seul support, mais un ensemble cohérent
              d’éléments techniques et documentaires destinés à être lus,
              partagés et vérifiés ensemble.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {proofItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-sm text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h2 className="text-3xl font-semibold text-white">
                Mode hors ligne et reprise
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                La preuve est d’abord sécurisée localement. La synchronisation
                cloud et l’ancrage blockchain peuvent ensuite reprendre
                automatiquement lorsque la connexion redevient disponible.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                Cette logique évite de dépendre d’un réseau au moment critique
                de la captation.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#13233A] p-8">
              <h2 className="text-3xl font-semibold text-white">
                Statuts de confiance
              </h2>
              <div className="mt-8 space-y-5">
                {statusItems.map((item) => (
                  <div
                    key={item.code}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-3 py-1 font-mono text-sm font-semibold text-[#D4AF37]">
                        {item.code}
                      </span>
                      <h3 className="font-semibold text-white">{item.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="cadre-probatoire"
          className="mx-auto max-w-7xl scroll-mt-28 px-6 pb-24"
        >
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Cadre probatoire
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              FIDÉO fournit une base technique de conservation, de traçabilité
              et de vérification. L’application n’a pas vocation à se substituer
              à l’analyse juridique, mais à renforcer la lisibilité et la
              robustesse matérielle de la preuve.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">
                Intégrité du contenu
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Les empreintes SHA-256 permettent de vérifier que les fichiers
                n’ont pas été modifiés sans détection. Toute altération change
                immédiatement le résultat.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">
                Horodatage indépendant
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                L’ancrage via OpenTimestamps permet d’attester l’existence d’une
                donnée à une date donnée indépendamment de FIDÉO, sur la base de
                la blockchain Bitcoin.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">
                Cohérence documentaire
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Vidéo, hashes, identifiant, JSON, certificat PDF, fichier .ots
                et métadonnées sont rattachés à une même chaîne documentaire.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-6">
            <p className="text-sm leading-7 text-slate-200">
              La valeur probatoire finale dépend toujours du contexte, de la
              conservation, des conditions de production, de la contradiction et
              de l’appréciation de l’autorité compétente. FIDÉO renforce la base
              technique de cette appréciation.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h2 className="text-3xl font-semibold text-white">
                Partager un dossier exploitable
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                FIDÉO permet de transmettre à un tiers un ensemble cohérent
                comprenant les principaux supports nécessaires à une lecture et à
                une vérification indépendantes.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                <li>✔ vidéo scellée</li>
                <li>✔ fichier JSON de preuve</li>
                <li>✔ certificat PDF</li>
                <li>✔ preuve OpenTimestamps (.ots)</li>
                <li>✔ hash SHA-256 et identifiant unique</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#13233A] p-8">
              <h2 className="text-3xl font-semibold text-white">
                Vérification indépendante
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Une preuve peut être relue localement, confrontée à ses
                métadonnées, contrôlée par hash, et rapprochée de son ancrage
                blockchain et de ses documents associés.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-300">
                L’objectif n’est pas seulement d’afficher une information, mais
                de permettre une lecture cohérente de l’ensemble.
              </p>
            </div>
          </div>
        </section>

        <section
          id="verification"
          className="mx-auto max-w-7xl scroll-mt-28 px-6 pb-24"
        >
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Vérifier une preuve
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Chaque preuve générée par FIDÉO peut être retrouvée et
                rapprochée de ses éléments techniques essentiels : identifiant,
                hashes, horodatage, géolocalisation, statut cloud et ancrage
                blockchain.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                <li>✔ contrôle des empreintes SHA-256</li>
                <li>✔ lecture de la cohérence documentaire</li>
                <li>✔ consultation du statut blockchain</li>
                <li>✔ rapprochement des éléments associés à une même preuve</li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/verify"
                  className="rounded-lg bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
                >
                  Vérifier une preuve
                </Link>

                <GooglePlayBadge href={PLAY_STORE_URL} />
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-slate-400">Exemple d’identifiant</p>

              <div className="mt-4 rounded-lg bg-black/40 p-4 font-mono text-sm text-[#D4AF37]">
                FIDEO-OiO-20260404-722UBU
              </div>

              <div className="mt-6 grid gap-3">
                <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <div className="text-xs uppercase tracking-[0.16em] text-slate-500">
                    Hash scellé
                  </div>
                  <div className="mt-2 break-all font-mono text-xs text-slate-300">
                    c3394cb9221aa563c7599416dab6a20886551923eb53bd2d6dbcff3f470b96df
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <div className="text-xs uppercase tracking-[0.16em] text-slate-500">
                    Supports associés
                  </div>
                  <div className="mt-2 text-sm text-slate-300">
                    sealed.mp4 • JSON • PDF • .OTS
                  </div>
                </div>
              </div>

              <p className="mt-6 text-sm leading-7 text-slate-400">
                Cet identifiant relie la preuve à l’ensemble de ses supports
                techniques et documentaires.
              </p>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .flow-pulse::before {
          content: "";
          position: absolute;
          top: 0;
          left: -18%;
          width: 18%;
          height: 100%;
          border-radius: 9999px;
          background: linear-gradient(
            90deg,
            rgba(212, 175, 55, 0),
            rgba(212, 175, 55, 0.14),
            rgba(212, 175, 55, 0.72),
            rgba(255, 246, 200, 0.98),
            rgba(212, 175, 55, 0.72),
            rgba(212, 175, 55, 0.14),
            rgba(212, 175, 55, 0)
          );
          filter: blur(2px);
          animation: pulseLine 4.8s linear infinite;
        }

        .flow-node {
          animation: nodePass 4.8s linear infinite;
        }

        .flow-node-core {
          animation: nodeCorePass 4.8s linear infinite;
        }

        .flow-card {
          opacity: 0.58;
          animation: cardPass 4.8s linear infinite;
        }

        .flow-branch {
          opacity: 0.54;
          transform: translateY(8px);
          animation: branchPass 4.8s linear infinite;
        }

        .flow-branch-dot {
          animation: branchDotPass 4.8s linear infinite;
        }

        @keyframes pulseLine {
          0% {
            left: -20%;
            opacity: 0;
          }
          6% {
            opacity: 1;
          }
          88% {
            opacity: 1;
          }
          100% {
            left: 102%;
            opacity: 0;
          }
        }

        @keyframes nodePass {
          0%,
          100% {
            border-color: rgba(212, 175, 55, 0.35);
            box-shadow: 0 0 0 rgba(212, 175, 55, 0);
            transform: scale(1);
            background: #0f1b2e;
          }
          10%,
          22% {
            border-color: rgba(255, 240, 170, 0.9);
            box-shadow:
              0 0 0 4px rgba(212, 175, 55, 0.09),
              0 0 18px rgba(212, 175, 55, 0.45),
              0 0 34px rgba(212, 175, 55, 0.22);
            transform: scale(1.12);
            background: rgba(28, 43, 66, 0.96);
          }
        }

        @keyframes nodeCorePass {
          0%,
          100% {
            background: rgba(212, 175, 55, 0.82);
            box-shadow: 0 0 0 rgba(255, 243, 179, 0);
            transform: scale(1);
          }
          10%,
          22% {
            background: #fff1a8;
            box-shadow:
              0 0 10px rgba(255, 241, 168, 0.95),
              0 0 22px rgba(212, 175, 55, 0.75),
              0 0 34px rgba(212, 175, 55, 0.45);
            transform: scale(1.2);
          }
        }

        @keyframes cardPass {
          0%,
          100% {
            opacity: 0.58;
            transform: translateY(0);
            border-color: rgba(255, 255, 255, 0.1);
            background: rgba(255, 255, 255, 0.04);
            box-shadow: 0 0 0 rgba(212, 175, 55, 0);
          }
          10%,
          22% {
            opacity: 1;
            transform: translateY(-3px);
            border-color: rgba(212, 175, 55, 0.42);
            background: rgba(212, 175, 55, 0.08);
            box-shadow:
              inset 0 0 0 1px rgba(255, 240, 170, 0.06),
              0 0 20px rgba(212, 175, 55, 0.12),
              0 0 42px rgba(212, 175, 55, 0.08);
          }
        }

        @keyframes branchPass {
          0%,
          100% {
            opacity: 0.54;
            transform: translateY(8px);
            border-color: rgba(255, 255, 255, 0.1);
            background: rgba(255, 255, 255, 0.04);
            box-shadow: 0 0 0 rgba(212, 175, 55, 0);
          }
          12%,
          28% {
            opacity: 1;
            transform: translateY(0);
            border-color: rgba(212, 175, 55, 0.36);
            background: rgba(212, 175, 55, 0.06);
            box-shadow:
              inset 0 0 0 1px rgba(255, 240, 170, 0.05),
              0 0 22px rgba(212, 175, 55, 0.1),
              0 0 36px rgba(212, 175, 55, 0.06);
          }
        }

        @keyframes branchDotPass {
          0%,
          100% {
            box-shadow: 0 0 0 rgba(212, 175, 55, 0);
            transform: scale(1);
          }
          12%,
          28% {
            box-shadow:
              0 0 10px rgba(255, 241, 168, 0.9),
              0 0 20px rgba(212, 175, 55, 0.55);
            transform: scale(1.18);
          }
        }
      `}</style>
    </div>
  );
}