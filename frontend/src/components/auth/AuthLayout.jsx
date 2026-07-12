import { Globe, Leaf, Users, ShieldCheck } from "lucide-react";

export default function AuthLayout({
  title,
  subtitle,
  children,
}) {
  return (
    <div className="h-screen grid lg:grid-cols-2 overflow-hidden bg-[#FAFAFA]">

      {/* ================= LEFT ================= */}

      <div className="relative hidden lg:block">

        <img
          src="/auth-bg.jpg"
          alt="EcoSphere"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* White Overlay */}

        <div className="absolute inset-0 bg-white/35 backdrop-blur-[1px]" />

        {/* Logo */}

        <div className="absolute top-12 left-16 z-20 flex items-center gap-4">

          <img
            src="/logo.png"
            alt="EcoSphere"
            className="w-14 h-14"
          />

          <div>

            <h1 className="text-[52px] font-bold tracking-tight text-slate-900">
              EcoSphere
            </h1>

            <p className="text-xl text-slate-500">
              ESG Management Platform
            </p>

          </div>

        </div>

        {/* Hero */}

        <div className="absolute left-16 top-56 z-20">

          <h2 className="text-[64px] font-bold leading-[74px] tracking-tight text-slate-900">

            Measure.

            <br />

            <span className="text-green-600">
              Manage.
            </span>

            <br />

            Make an Impact.

          </h2>

          <p className="mt-10 w-[430px] text-xl leading-10 text-slate-600">

            EcoSphere helps organizations integrate
            Environmental, Social and Governance
            practices into everyday operations for
            a sustainable tomorrow.

          </p>

        </div>

        {/* Bottom ESG Cards */}

        <div className="absolute bottom-12 left-16 right-16 z-20 flex justify-between">

          <Feature
            icon={<Leaf size={30} />}
            title="Environmental"
            text="Drive measurable impact"
          />

          <Feature
            icon={<Users size={30} />}
            title="Social"
            text="Empower people and communities"
          />

          <Feature
            icon={<ShieldCheck size={30} />}
            title="Governance"
            text="Ensure transparency and compliance"
          />

        </div>

      </div>

      {/* ================= RIGHT ================= */}

      <div className="relative flex items-center justify-center bg-[#FAFAFA]">

        <div className="w-[560px]">

          {/* Language */}

          <div className="mb-10 flex justify-end">

            <button className="flex items-center gap-2 text-slate-700 hover:text-black">

              <Globe size={20} />

              <span className="text-lg">
                English
              </span>

            </button>

          </div>

          {/* Card */}

          <div className="rounded-[30px] border border-slate-100 bg-white p-14 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

            <h1 className="text-[52px] font-bold tracking-tight text-slate-900">

              {title}

            </h1>

            <p className="mt-3 text-xl text-slate-500">

              {subtitle}

            </p>

            <div className="mt-10">

              {children}

            </div>

          </div>

          {/* Footer */}

          <div className="mt-10 text-center">

            <div className="flex items-center justify-center gap-2 text-slate-500">

              <ShieldCheck size={18} />

              <span className="text-base">

                Your data is secure with us

              </span>

            </div>

            <p className="mt-4 text-slate-400">

              © 2026 EcoSphere. All rights reserved.

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

function Feature({
  icon,
  title,
  text,
}) {
  return (
    <div className="w-[180px]">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-black/25 text-white backdrop-blur-md">

        {icon}

      </div>

      <h3 className="mt-5 text-[30px] font-semibold text-white">

        {title}

      </h3>

      <p className="mt-2 text-lg leading-8 text-white/90">

        {text}

      </p>

    </div>
  );
}