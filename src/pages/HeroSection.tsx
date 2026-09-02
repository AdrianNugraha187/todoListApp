import { CheckCircle2, Circle, Clock, Plus, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden w-full h-full min-h-[calc(100vh-4rem)] flex items-center bg-slate-50 dark:bg-slate-900 py-12 transition-colors duration-200">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200/50 dark:bg-indigo-600/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Teks Kiri */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/40 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Kelola Waktu Lebih Efisien</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              Selesaikan tugas, capai target harianmu{" "}
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Aplikasi to-do list minimalis yang dirancang untuk membantumu
              tetap fokus, melacak progres proyek, dan membangun kebiasaan
              produktif setiap hari.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to={`/todolist`}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium shadow-lg shadow-indigo-200 dark:shadow-none transition-all duration-200 text-center"
              >
                Mulai Gratis Sekarang
              </Link>
              <Link
                to={`/about`}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-medium transition-all duration-200 text-center"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>
          </div>

          {/* Kartu Kanan */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-md bg-white dark:bg-slate-800 rounded-2xl shadow-xl shadow-slate-200/60 dark:shadow-none border border-slate-100 dark:border-slate-700 p-6 space-y-6 transition-colors duration-200">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-700">
                <div>
                  <h3 className="font-bold text-slate-800 dark:text-white text-lg">
                    Target Hari Ini
                  </h3>
                  {/* <p className="text-xs text-slate-400 dark:text-slate-500">
                    Rabu, 24 Oktober
                  </p> */}
                </div>
                <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold rounded-full">
                  75% Selesai
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50/70 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 transition">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span className="text-sm font-medium text-slate-400 dark:text-slate-500 line-through">
                      Review desain landing page
                    </span>
                  </div>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-300">
                    Desain
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50/70 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 transition">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span className="text-sm font-medium text-slate-400 dark:text-slate-500 line-through">
                      Daily standup meeting tim
                    </span>
                  </div>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400">
                    Kerja
                  </span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white dark:bg-slate-800 border-2 border-indigo-500 shadow-sm transition">
                  <div className="flex items-center gap-3">
                    <Circle className="w-5 h-5 text-indigo-500 animate-pulse" />
                    <span className="text-sm font-semibold text-slate-800 dark:text-white">
                      Slicing komponen Tailwind CSS
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 text-xs font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>14:00</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 transition hover:border-slate-200 dark:hover:border-slate-600">
                  <div className="flex items-center gap-3">
                    <Circle className="w-5 h-5 text-slate-300 dark:text-slate-500" />
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                      Update dokumentasi API
                    </span>
                  </div>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">
                    Prioritas
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-600 hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm font-medium transition">
                  <Plus className="w-4 h-4" />
                  <span>Tambah Tugas Baru</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
