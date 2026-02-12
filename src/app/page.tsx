export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
          Tailwind CSS is working
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          This card uses Tailwind classes for spacing, colors, and
          typography.
        </p>
        <button className="mt-6 w-full rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800">
          Primary button
        </button>
      </div>
    </main>
  );
}
