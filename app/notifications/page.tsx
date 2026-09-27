export default function AdminPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-4xl font-black text-[#0a1931]">Admin authority dashboard</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[
          ['Pending', '42'],
          ['In Progress', '18'],
          ['Resolved', '96'],
        ].map(([label, value]) => (
          <div key={label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm uppercase tracking-[0.2em] text-slate-500">{label}</div>
            <div className="mt-4 text-4xl font-black text-[#0a1931]">{value}</div>
          </div>
        ))}
      </div>
    </main>
  )
}
