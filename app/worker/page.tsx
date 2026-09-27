export default function AccountPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-4xl font-black text-[#0a1931]">My account</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-sm uppercase tracking-[0.2em] text-slate-500">Profile</div>
          <div className="mt-4 text-2xl font-bold text-[#0a1931]">Citizen User</div>
          <div className="mt-2 text-slate-600">+91 98765 43210</div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-sm uppercase tracking-[0.2em] text-slate-500">Reports</div>
          <div className="mt-4 text-2xl font-bold text-[#0a1931]">12</div>
          <div className="mt-2 text-slate-600">Total submitted complaints</div>
        </div>
      </div>
    </main>
  )
}
