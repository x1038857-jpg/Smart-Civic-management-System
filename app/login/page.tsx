import Link from 'next/link'

export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md items-center justify-center px-6 py-12">
      <div className="w-full rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/60">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#0a1931] text-lg font-bold text-white">
            S
          </div>
          <h1 className="mt-5 text-3xl font-bold text-[#0a1931]">Welcome back</h1>
          <p className="mt-2 text-sm text-slate-500">Sign in with your phone OTP</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Phone number</label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#0a1931] focus:bg-white"
            />
          </div>

          <button className="w-full rounded-xl bg-[#0a1931] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#132f57]">
            Send OTP
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-slate-600">
          Need a demo?{' '}
          <Link href="/dashboard" className="font-semibold text-[#0a1931]">
            View public dashboard
          </Link>
        </div>
      </div>
    </main>
  )
}
