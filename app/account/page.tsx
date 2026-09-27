import Link from 'next/link'

const issues = [
  { id: 'SF-2041', title: 'Garbage pile near market', status: 'Pending', color: 'bg-amber-100 text-amber-800' },
  { id: 'SF-2042', title: 'Waterlogging on internal road', status: 'In Progress', color: 'bg-blue-100 text-blue-800' },
  { id: 'SF-2043', title: 'Broken street light', status: 'Resolved', color: 'bg-emerald-100 text-emerald-800' },
]

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Public map</p>
          <h1 className="mt-2 text-4xl font-black text-[#0a1931]">Civic dashboard</h1>
        </div>
        <Link href="/report" className="rounded-full bg-[#0a1931] px-5 py-2.5 text-sm font-semibold text-white">
          + New report
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.5fr_0.8fr]">
        <div className="h-[520px] rounded-3xl border border-slate-200 bg-[radial-gradient(circle_at_center,_#dfeaf7,_#dfe9f6_40%,_#e6edf8_100%)] p-6 shadow-sm">
          <div className="flex h-full items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white/60">
            <div className="text-center">
              <div className="text-6xl">🗺️</div>
              <div className="mt-4 text-lg font-semibold text-slate-700">Live civic map</div>
              <div className="mt-2 text-sm text-slate-500">Leaflet map will render here</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {issues.map((issue) => (
            <div key={issue.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{issue.id}</div>
                  <div className="mt-2 text-lg font-bold text-[#0a1931]">{issue.title}</div>
                </div>
                <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${issue.color}`}>
                  {issue.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
