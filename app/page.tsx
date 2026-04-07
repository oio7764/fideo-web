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

const workflow = [
  {
    step: "01",
    title: "Capture sécurisée",
    text: "Enregistrement vidéo avec horodatage, GPS et contexte de preuve visible dès la captation.",
  },
  {
    step: "02",
    title: "Scellement",
    text: "Création d’une vidéo scellée, génération des empreintes cryptographiques et attribution d’un identifiant unique.",
  },
  {
    step: "03",
    title: "Structuration du dossier",
    text: "Constitution d’un ensemble cohérent incluant vidéo, JSON, certificat PDF, métadonnées et statuts.",
  },
  {
    step: "04",
    title: "Synchronisation et ancrage",
    text: "Sauvegarde locale immédiate, synchronisation cloud et ancrage blockchain dès que la connectivité le permet.",
  },
];

const flowSteps = [
  { label: "Capture", time: "t = 0" },
  { label: "Hash", time: "t + \u03B5" },
  { label: "Scellement", time: "t + \u03B5" },
  { label: "Métadonnées", time: "t + \u03B5" },
  { label: "Identifiant", time: "t + \u03B5" },
  { label: "Dossier", time: "t + \u03B5" },
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

const proofItems = [
  "Vidéo originale",
  "Vidéo scellée",
  "Identifiant unique de preuve",
  "Hash SHA-256 original",
  "Hash SHA-256 scellé",
  "Métadonnées GPS",
  "Horodatage",
  "Fichier JSON de preuve",
  "Certificat PDF",
  "Preuve OpenTimestamps (.ots)",
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

const useCases = [
  {
    icon: "📰",
    title: "Journalisme",
    text: "Documenter sur le terrain avec une preuve d’authenticité exploitable en rédaction ou en justice.",
  },
  {
    icon: "🛡️",
    title: "Sécurité",
    text: "Constater des faits avec une chaîne documentaire solide dès l’intervention.",
  },
  {
    icon: "📋",
    title: "Assurance",
    text: "Produire une preuve horodatée et géolocalisée pour appuyer un sinistre ou un état des lieux.",
  },
  {
    icon: "🏗️",
    title: "BTP / Chantier",
    text: "Documenter l’avancement, les malfaçons ou les incidents avec une preuve incontestable.",
  },
  {
    icon: "🏠",
    title: "Immobilier",
    text: "État des lieux, constat de dégradation ou documentation de bien avec preuve intégrée.",
  },
  {
    icon: "👤",
    title: "Protection personnelle",
    text: "Documenter un incident, une situation ou un fait avec une structure de preuve dès l’enregistrement.",
  },
  {
    icon: "📁",
    title: "Documentation d’incident",
    text: "Constituer immédiatement un dossier structuré pour tout événement à documenter.",
  },
  {
    icon: "🔍",
    title: "Lutte contre la désinformation",
    text: "Attester de l’authenticité d’une captation face aux deepfakes et aux manipulations numériques.",
  },
];

const frameworkItems = [
  {
    title: "Intégrité du contenu",
    text: "Les empreintes SHA-256 permettent de vérifier que les fichiers n’ont pas été modifiés. Toute altération change immédiatement le résultat.",
  },
  {
    title: "Horodatage indépendant",
    text: "L’ancrage via OpenTimestamps permet d’attester l’existence d’une donnée à une date donnée, indépendamment de FIDÉO, sur Bitcoin.",
  },
  {
    title: "Cohérence documentaire",
    text: "Vidéo, hashes, identifiant, JSON, certificat PDF, fichier .ots et métadonnées sont rattachés à une même chaîne documentaire.",
  },
  {
    title: "Provenance",
    text: "L’empreinte appareil et les métadonnées de captation documentent l’origine technique de la preuve.",
  },
  {
    title: "Conservation",
    text: "Sauvegarde locale immédiate, synchronisation cloud et archivage structuré garantissent la pérennité du dossier.",
  },
  {
    title: "Vérification indépendante",
    text: "Chaque preuve peut être contrôlée par un tiers à partir des hashes, de l’identifiant et du fichier .ots sans dépendre de FIDÉO.",
  },
];

const stats = [
  { value: "10+", label: "éléments par dossier de preuve" },
  { value: "3", label: "niveaux de statut de confiance" },
  { value: "BTC", label: "ancrage blockchain indépendant" },
  { value: "0", label: "connexion requise à la captation" },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0A1628] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A1628]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
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

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#fonctionnement" className="transition hover:text-[#D4AF37]">
              Fonctionnement
            </a>
            <a href="#pipeline" className="transition hover:text-[#D4AF37]">
              Pipeline
            </a>
            <a href="#usecases" className="transition hover:text-[#D4AF37]">
              Cas d’usage
            </a>
            <a href="#cadre-probatoire" className="transition hover:text-[#D4AF37]">
              Cadre probatoire
            </a>
            <a href="#about" className="transition hover:text-[#D4AF37]">
              À propos
            </a>
          </nav>

          <GooglePlayBadge href={PLAY_STORE_URL} />
        </div>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-[1.08fr_0.92fr] md:items-center md:py-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-[#D4AF37]">
              Structure probatoire mobile
            </div>

            <h1 className="mt-8 text-5xl font-semibold leading-tight text-white md:text-7xl">
              Une preuve vidéo structurée, conçue pour documenter, préserver et
              vérifier.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              FIDÉO ne se limite pas à enregistrer une vidéo. L’application
              génère un dossier de preuve cohérent associant capture,
              horodatage, géolocalisation, empreintes cryptographiques,
              identifiant unique, certificat PDF et ancrage blockchain.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <GooglePlayBadge href={PLAY_STORE_URL} className="min-w-[210px]" />

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
              Disponible gratuitement sur Google Play · Android
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
                identifiant, hashes, métadonnées, preuve JSON, certificat PDF et
                ancrage blockchain.
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
                <div className="mb-4 h-10 w-10 rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/10" />
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid gap-6 rounded-[2rem] border border-[#D4AF37]/20 bg-gradient-to-br from-[#13233A] to-[#0A1628] p-8 md:grid-cols-2 md:p-10">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Le problème
              </div>
              <p className="mt-4 text-2xl font-semibold leading-relaxed text-white">
                Les images et vidéos peuvent être copiées, altérées, sorties de
                leur contexte ou générées artificiellement.
              </p>
            </div>

            <div className="border-l-0 border-white/10 md:border-l md:pl-8">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
                La réponse FIDÉO
              </div>
              <p className="mt-4 text-2xl font-semibold leading-relaxed text-white">
                Créer dès la captation une structure documentaire cohérente,
                vérifiable et défendable.
              </p>
            </div>
          </div>
        </section>

        <section
          id="fonctionnement"
          className="mx-auto max-w-7xl scroll-mt-28 px-6 pb-24"
        >
          <div className="mb-12 max-w-3xl">
            <div className="inline-flex rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
              Fonctionnement
            </div>
            <h2 className="mt-6 text-3xl font-semibold text-white md:text-5xl">
              De la captation à la preuve
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
                <div className="text-lg font-bold tracking-wide text-[#D4AF37]">
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

        <section
          id="pipeline"
          className="mx-auto max-w-7xl scroll-mt-28 px-6 pb-24"
        >
          <div className="mb-12 max-w-3xl">
            <div className="inline-flex rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
              Flux continu de traitement
            </div>
            <h2 className="mt-6 text-3xl font-semibold text-white md:text-5xl">
              Chaîne de traitement en flux continu
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Les opérations critiques s’enchaînent dans un flux unique quasi
              instantané. La preuve se structure pendant la captation, pas
              après.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-gradient-to-br from-[#13233A] to-[#0A1628] p-8 md:p-10">
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

            <div className="grid gap-4 md:grid-cols-6">
              {flowSteps.map((step) => (
                <div
                  key={step.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
                >
                  <div className="mx-auto mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-[#0A1628]">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#D4AF37]" />
                  </div>
                  <div className="text-[11px] font-mono tracking-[0.18em] text-[#D4AF37]">
                    {step.time}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-white">
                    {step.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {flowBranches.map((branch) => (
                <div
                  key={branch.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#D4AF37]" />
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

            <div className="mt-8 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4 text-sm leading-7 text-slate-200">
              La preuve ne se constitue pas à posteriori. Capture, scellement,
              métadonnées, identifiant et structuration documentaire
              s’enchaînent dans un même mouvement logique.
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="mb-12 max-w-3xl">
            <div className="inline-flex rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
              Contenu
            </div>
            <h2 className="mt-6 text-3xl font-semibold text-white md:text-5xl">
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
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
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

            <div className="rounded-[2rem] border border-white/10 bg-[#13233A] p-8">
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
          id="usecases"
          className="mx-auto max-w-7xl scroll-mt-28 px-6 pb-24"
        >
          <div className="mb-12 max-w-3xl">
            <div className="inline-flex rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
              Cas d’usage
            </div>
            <h2 className="mt-6 text-3xl font-semibold text-white md:text-5xl">
              Pensé pour le terrain
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              FIDÉO s’adresse à tous ceux qui ont besoin de documenter,
              préserver et défendre une réalité visuelle.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {useCases.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-[#D4AF37]/30"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-lg">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="anti-falsification"
          className="mx-auto max-w-7xl px-6 pb-24"
        >
          <div className="grid gap-8 rounded-[2rem] border border-[#D4AF37]/20 bg-gradient-to-br from-[#13233A] to-[#0A1628] p-8 md:grid-cols-[0.95fr_1.05fr] md:p-10">
            <div>
              <div className="inline-flex rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                Anti-falsification
              </div>
              <h2 className="mt-6 text-3xl font-semibold text-white md:text-5xl">
                Un rempart contre les deepfakes
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                À l’heure où n’importe quelle vidéo peut être générée ou
                altérée, FIDÉO crée une chaîne de confiance ancrée dès la
                captation.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                L’identité cryptographique du fichier, l’empreinte de l’appareil
                et l’ancrage blockchain permettent de distinguer une vidéo
                native d’une vidéo manipulée ou générée.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: "🔐",
                  title: "Hash SHA-256 natif",
                  text: "Calculé au moment de la captation, avant tout traitement ultérieur.",
                },
                {
                  icon: "📱",
                  title: "Empreinte appareil",
                  text: "Lie la preuve à l’appareil physique ayant réalisé la captation.",
                },
                {
                  icon: "⛓️",
                  title: "Ancrage blockchain",
                  text: "Preuve d’existence indépendante de FIDÉO sur la blockchain Bitcoin.",
                },
                {
                  icon: "📍",
                  title: "GPS + horodatage",
                  text: "Contexte spatio-temporel non altérable lié à chaque preuve.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/10">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-7 text-slate-300">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="cadre-probatoire"
          className="mx-auto max-w-7xl scroll-mt-28 px-6 pb-24"
        >
          <div className="mb-12 max-w-3xl">
            <div className="inline-flex rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
              Cadre probatoire
            </div>
            <h2 className="mt-6 text-3xl font-semibold text-white md:text-5xl">
              Une base technique sérieuse
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              FIDÉO fournit une base technique de conservation, de traçabilité
              et de vérification. L’application n’a pas vocation à se substituer
              à l’analyse juridique.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {frameworkItems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-6 text-sm leading-7 text-slate-200">
            La valeur probatoire finale dépend toujours du contexte, des
            conditions de production, de la contradiction et de l’appréciation
            de l’autorité compétente. FIDÉO renforce la base technique de cette
            appréciation, sans se substituer au droit.
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <h2 className="text-3xl font-semibold text-white">
                Partager un dossier exploitable
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                FIDÉO permet de transmettre à un tiers un ensemble cohérent
                comprenant les principaux supports nécessaires à une lecture et
                une vérification indépendantes.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                <li>✓ vidéo scellée</li>
                <li>✓ fichier JSON de preuve</li>
                <li>✓ certificat PDF</li>
                <li>✓ preuve OpenTimestamps (.ots)</li>
                <li>✓ hash SHA-256 et identifiant unique</li>
              </ul>
            </div>

            <div
              id="verification"
              className="rounded-[2rem] border border-white/10 bg-[#13233A] p-8"
            >
              <h2 className="text-3xl font-semibold text-white">
                Vérification indépendante
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Une preuve peut être relue localement, confrontée à ses
                métadonnées, contrôlée par hash, et rapprochée de son ancrage
                blockchain et de ses documents associés.
              </p>

              <div className="mt-8">
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
                      sealed.mp4 · JSON · PDF · .OTS
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/verify"
                  className="inline-flex rounded-lg bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
                >
                  Vérifier une preuve →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="bg-[#13233A] p-8">
                <div className="text-4xl font-bold text-[#D4AF37]">
                  {item.value}
                </div>
                <div className="mt-2 text-sm leading-7 text-slate-300">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="about"
          className="mx-auto max-w-7xl scroll-mt-28 px-6 pb-24"
        >
          <div className="grid gap-6 rounded-[2rem] border border-[#D4AF37]/20 bg-gradient-to-br from-[#13233A] to-[#0A1628] p-8 md:grid-cols-2 md:p-10">
            <div>
              <div className="inline-flex rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                Pourquoi FIDÉO existe
              </div>
              <h2 className="mt-6 text-3xl font-semibold text-white md:text-5xl">
                Redonner une base de confiance au réel numérique.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Les deepfakes, les fake news et la fragilité du réel numérique
                rendent de plus en plus difficile de distinguer ce qui est
                authentique de ce qui est fabriqué. FIDÉO a été conçu pour
                redonner une base de confiance solide à ceux qui ont besoin de
                documenter, préserver et défendre une réalité.
              </p>
            </div>

            <div className="border-l-0 border-white/10 md:border-l md:pl-8">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
                La vision
              </div>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Un monde où chaque personne, journaliste, citoyen ou
                professionnel, peut créer une preuve numérique fiable,
                vérifiable indépendamment, sans dépendre d’une autorité
                centrale.
              </p>
              <div className="mt-8">
                <a
                  href="mailto:contact@fideo.app"
                  className="rounded-2xl border border-white/15 px-6 py-3 font-medium text-white transition hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
                >
                  Nous contacter
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-24 text-center">
          <div className="inline-flex rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
            Commencer maintenant
          </div>
          <h2 className="mt-6 text-3xl font-semibold text-white md:text-5xl">
            Chaque preuve commence par une captation.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Téléchargez FIDÉO sur Google Play et commencez à constituer des
            preuves vidéo structurées, certifiées et vérifiables.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <GooglePlayBadge href={PLAY_STORE_URL} />
            <Link
              href="/verify"
              className="rounded-2xl border border-[#D4AF37]/30 px-6 py-3 font-medium text-[#D4AF37] transition hover:bg-[#D4AF37]/10"
            >
              Vérifier une preuve
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 xl:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
            <div>
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

              <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
                Structure probatoire mobile pour documenter, préserver et
                vérifier des preuves vidéo certifiées.
              </p>

              <div className="mt-5">
                <GooglePlayBadge href={PLAY_STORE_URL} />
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Produit
              </h4>
              <div className="space-y-2 text-sm text-slate-400">
                <a href="#fonctionnement" className="block hover:text-[#D4AF37]">
                  Vue d’ensemble
                </a>
                <a href="#pipeline" className="block hover:text-[#D4AF37]">
                  Pipeline probatoire
                </a>
                <a href="#verification" className="block hover:text-[#D4AF37]">
                  Vérification
                </a>
                <a href="#dossier" className="block hover:text-[#D4AF37]">
                  Dossier de preuve
                </a>
                <a href="#offline" className="block hover:text-[#D4AF37]">
                  Hors ligne
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Cas d’usage
              </h4>
              <div className="space-y-2 text-sm text-slate-400">
                <a href="#usecases" className="block hover:text-[#D4AF37]">
                  Journalisme
                </a>
                <a href="#usecases" className="block hover:text-[#D4AF37]">
                  Assurance
                </a>
                <a href="#usecases" className="block hover:text-[#D4AF37]">
                  Sécurité
                </a>
                <a href="#usecases" className="block hover:text-[#D4AF37]">
                  Chantier
                </a>
                <a href="#usecases" className="block hover:text-[#D4AF37]">
                  Immobilier
                </a>
                <a href="#usecases" className="block hover:text-[#D4AF37]">
                  Protection personnelle
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Ressources
              </h4>
              <div className="space-y-2 text-sm text-slate-400">
                <a
                  href="#cadre-probatoire"
                  className="block hover:text-[#D4AF37]"
                >
                  Cadre probatoire
                </a>
                <a href="#anti-falsification" className="block hover:text-[#D4AF37]">
                  Anti-falsification
                </a>
                <a href="#about" className="block hover:text-[#D4AF37]">
                  Vision
                </a>
                <Link href="/verify" className="block hover:text-[#D4AF37]">
                  Vérification
                </Link>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Entreprise
              </h4>
              <div className="space-y-2 text-sm text-slate-400">
                <a href="#about" className="block hover:text-[#D4AF37]">
                  À propos
                </a>
                <a href="mailto:contact@fideo.app" className="block hover:text-[#D4AF37]">
                  Contact
                </a>
                <a href="mailto:contact@fideo.app" className="block hover:text-[#D4AF37]">
                  Demander une démo
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-8 text-sm text-slate-500">
            <p>© 2026 FIDÉO. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="mailto:contact@fideo.app" className="hover:text-[#D4AF37]">
                Contact
              </a>
              <a href="#about" className="hover:text-[#D4AF37]">
                Vision
              </a>
              <Link href="/verify" className="hover:text-[#D4AF37]">
                Vérifier
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}