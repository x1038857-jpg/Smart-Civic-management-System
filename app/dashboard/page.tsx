import Link from 'next/link'

export default function ReportPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Citizen portal</p>
          <h1 className="mt-2 text-4xl font-black text-[#0a1931]">Report a civic issue</h1>
        </div>
        <Link href="/account" className="text-sm font-semibold text-[#0a1931]">
          My reports →
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Issue category</label>
              <select className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-[#0a1931]">
                <option>Garbage accumulation</option>
                <option>Overflowing drain</option>
                <option>Pothole</option>
                <option>Street light issue</option>
                <option>Water leakage</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Description</label>
              <textarea
                rows={5}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-[#0a1931]"
                placeholder="Describe the issue and where it is located."
              />
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-[#fffaf1] p-6 shadow-sm">
          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Photo evidence</label>
              <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-white p-6 text-center text-sm text-slate-500">
                Upload image
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Location</label>
              <input
                type="text"
                placeholder="Ward 4, Near bus stop"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#0a1931]"
              />
            </div>

            <div className="flex items-center gap-3">
              <button className="flex-1 rounded-xl bg-[#0a1931] px-4 py-3 text-sm font-semibold text-white hover:bg-[#102d52]">
                Submit complaint
              </button>
              <button className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700">
                Save draft
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
