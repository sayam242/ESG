import { Menu, Search, Bell, ChevronDown } from "lucide-react";

export default function TopNavbar() {
  return (
    <header className="flex h-20 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-6">
      <div className="flex items-center gap-5">
        <button className="rounded-lg p-2 transition hover:bg-slate-100">
          <Menu size={22} className="text-slate-600" />
        </button>

        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            placeholder="Search anything..."
            className="h-11 w-[300px] rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm placeholder:text-slate-400 focus:border-green-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 lg:w-[360px]"
          />
        </div>
      </div>

      <div className="flex items-center gap-5">
        <button className="relative rounded-lg p-2 transition hover:bg-slate-100">
          <Bell size={22} className="text-slate-600" />
          <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
            8
          </span>
        </button>

        <button className="flex items-center gap-3 rounded-xl px-2 py-1.5 transition hover:bg-slate-50">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-teal-600 text-sm font-semibold text-white">
            AM
          </div>
          <div className="hidden text-left sm:block">
            <h4 className="text-sm font-semibold text-slate-800">Arjun Mehta</h4>
            <p className="text-xs text-slate-500">ESG Manager</p>
          </div>
          <ChevronDown size={16} className="hidden text-slate-400 sm:block" />
        </button>
      </div>
    </header>
  );
}
