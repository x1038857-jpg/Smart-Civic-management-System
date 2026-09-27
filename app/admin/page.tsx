export default function WorkerPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-4xl font-black text-[#0a1931]">Worker workspace</h1>
      <div className="mt-8 space-y-4">
        {[
          'Resolve blocked drain',
          'Clean roadside dumping yard',
          'Repair streetlight in Ward 5',
        ].map((task, index) => (
          <div key={task} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Task {index + 1}</div>
                <div className="mt-2 text-xl font-bold text-[#0a1931]">{task}</div>
              </div>
              <button className="rounded-full bg-[#0a1931] px-4 py-2 text-sm font-semibold text-white">
                Update status
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
