import { CheckSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-50 dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800 py-6 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
          {/* KOLOM KIRI: Brand & Copyright */}
          <div className="space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="p-1.5 bg-indigo-600 rounded-lg text-white">
                <CheckSquare className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg text-slate-900 dark:text-white tracking-tight">
                Taskify
                <span className="text-indigo-600 dark:text-indigo-400">.</span>
              </span>
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              <p>© 2026 Taskify To-Do App.</p>
              <p>Dibuat untuk produktivitas harianmu.</p>
            </div>
          </div>

          {/* KOLOM TENGAH: Status Badge & Powered By */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-600 dark:text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>App Status: Operational</span>
            </div>

            <div className="text-center">
              <p className="text-[11px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase">
                DATA & SYSTEM POWERED BY
              </p>
              <a
                href="#localstorage"
                className="text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline transition"
              >
                Taskify Cloud & Storage
              </a>
            </div>
          </div>

          {/* KOLOM KANAN: GitHub Button & License Info */}
          <div className="flex flex-col items-center md:items-end space-y-2">
            <a
              href="https://github.com/AdrianNugraha187/weatherApp-open-meteo-react-router"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-5 py-2 rounded-2xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white border border-transparent dark:border-slate-700 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              <span className="text-sm font-semibold">GitHub Repository</span>
            </a>

            <p className="text-[11px] text-slate-400 dark:text-slate-500 max-w-55 text-center md:text-right leading-tight">
              Tersedia gratis untuk penggunaan personal & non-komersial.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
