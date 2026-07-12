import {
  Menu,
  Search,
  Bell,
  ChevronDown,
} from "lucide-react";

export default function TopNavbar() {
  return (
    <header className="h-24 bg-white border-b border-slate-200 flex items-center justify-between px-8">

      {/* Left Section */}

      <div className="flex items-center gap-8">

        {/* Menu */}

        <button className="p-2 rounded-lg hover:bg-slate-100 transition">
          <Menu size={26} />
        </button>

        {/* Search */}

        <div className="relative">

          <Search
            size={20}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search anything..."
            className="
              w-[340px]
              h-12
              rounded-xl
              border
              border-slate-200
              bg-slate-50
              pl-14
              pr-4
              text-sm
              placeholder:text-slate-400
              focus:outline-none
              focus:ring-2
              focus:ring-green-500
              focus:bg-white
            "
          />

        </div>

      </div>

      {/* Right Section */}

      <div className="flex items-center gap-8">

        {/* Notification */}

        <button className="relative p-2 rounded-lg hover:bg-slate-100 transition">

          <Bell size={24} />

          <span
            className="
              absolute
              -top-1
              -right-1
              h-5
              w-5
              rounded-full
              bg-red-500
              text-white
              text-[10px]
              font-bold
              flex
              items-center
              justify-center
            "
          >
            8
          </span>

        </button>

        {/* Profile */}

        <button className="flex items-center gap-4 hover:bg-slate-100 rounded-xl px-3 py-2 transition">

          <img
            src="/avatar.jpg"
            alt="User"
            className="w-12 h-12 rounded-full object-cover border"
          />

          <div className="text-left">

            <h4 className="font-semibold text-slate-800">
              Arjun Mehta
            </h4>

            <p className="text-sm text-slate-500">
              ESG Manager
            </p>

          </div>

          <ChevronDown
            size={18}
            className="text-slate-500"
          />

        </button>

      </div>

    </header>
  );
}