export default function NotificationsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-4xl font-black text-[#0a1931]">Notifications</h1>
      <div className="mt-8 space-y-4">
        {[
          'Complaint assigned to sanitation worker',
          'Resolution evidence uploaded successfully',
          'Community verification requested',
        ].map((message) => (
          <div key={message} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="text-slate-700">{message}</div>
          </div>
        ))}
      </div>
    </main>
  )
}
