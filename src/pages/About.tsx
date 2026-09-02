import { CheckCircle2, ShieldCheck, Zap, Heart } from "lucide-react";

export default function About() {
  return (
    <section className="relative overflow-hidden w-full h-full min-h-[calc(100vh-4rem)] flex items-center bg-slate-50 dark:bg-slate-900 py-12 transition-colors duration-200">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/40 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            <Heart className="w-4 h-4 fill-indigo-600 dark:fill-indigo-400" />
            <span>Tentang Taskify</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Dirancang untuk Membantu Fokus pada Hal yang Penting
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Taskify lahir dari kebutuhan akan alat manajemen tugas yang
            sederhana, cepat, dan tanpa gangguan. Kami percaya bahwa
            produktivitas sejati datang dari antarmuka yang bersih dan alur
            kerja yang intuitif.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm transition">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Super Cepat & Ringan
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Dibuat menggunakan teknologi modern untuk memastikan aplikasi
              berjalan tanpa kendala di berbagai perangkat.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm transition">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Fokus pada Target
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Kategorisasi tugas dan indikator kemajuan harian membantu menjaga
              motivasi menyelaraskan prioritasmu.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm transition">
            <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-900/50 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Privasi Terjaga
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Data tugas tersimpan secara aman sehingga kamu dapat bekerja tanpa
              mengkhawatirkan keamanan privasimu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
