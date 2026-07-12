import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="h-screen bg-slate-50 flex overflow-hidden">

      {/* Sidebar */}

      <Sidebar />

      {/* Right Side */}

      <div className="flex flex-col flex-1 overflow-hidden">

        {/* Navbar */}

        <TopNavbar />

        {/* Main Content */}

        <main
          className="
            flex-1
            overflow-y-auto
            bg-[#F8FAFC]
            p-8
          "
        >
          <div className="mx-auto max-w-[1700px]">

            {children}

          </div>
        </main>

      </div>

    </div>
  );
}