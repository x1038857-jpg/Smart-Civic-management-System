export default function ForbiddenPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="rounded-3xl border border-red-200 bg-red-50 p-10 text-center shadow-sm">
        <div className="text-5xl">🚫</div>
        <h1 className="mt-5 text-3xl font-black text-[#0a1931]">Access denied</h1>
        <p className="mt-3 text-slate-600">You do not have permission to view this page.</p>
      </div>
    </main>
  )
}
