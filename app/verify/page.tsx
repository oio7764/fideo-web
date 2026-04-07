export default function VerifyPage() {
  return (
    <main className="min-h-screen bg-[#0F1B2E] px-6 py-20 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-semibold md:text-4xl">
          Vérifier une preuve
        </h1>

        <p className="mt-4 text-slate-300">
          Entrez un identifiant FIDÉO pour accéder aux éléments associés à une preuve.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <input
            placeholder="FIDEO-OiO-XXXXXXXX"
            className="w-full rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none"
          />

          <button className="rounded-lg bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-black hover:opacity-90">
            Vérifier
          </button>
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
          <p className="text-sm text-slate-400">
            Résultat de vérification
          </p>

          <p className="mt-4 font-semibold text-green-400">
            ✔ Preuve valide (exemple)
          </p>

          <p className="mt-4 text-sm text-slate-300">
            SHA-256 : c3394cb9221aa563c7599...
          </p>

          <p className="text-sm text-slate-300">
            Blockchain : Confirmée
          </p>
        </div>
      </div>
    </main>
  );
}