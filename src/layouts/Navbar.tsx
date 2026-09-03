import { CheckSquare,Sun,Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { useThemeStore } from "../features/darkMode/store/useThemeStore";

export default function Navbar() {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="shrink-0">
            <Link to={`/`} className="flex items-center gap-2">
              <div className="p-1.5 bg-indigo-600 rounded-lg text-white">
                <CheckSquare className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg text-slate-900 dark:text-white tracking-tight">
                Taskify
                <span className="text-indigo-600 dark:text-indigo-400">.</span>
              </span>
            </Link>
          </div>

          <nav className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
            </button>
            <Link
              to={`/`}
              className="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
            >
              Home
            </Link>

            <Link
              to={`/about`}
              className="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
            >
              About
            </Link>

            <Link
              to={`/todolist`}
              className="ml-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 shadow-sm shadow-indigo-200 dark:shadow-none transition-all duration-200"
            >
              Get Started
            </Link>
          </nav>
          
        </div>
      </div>
    </header>
  );
}
