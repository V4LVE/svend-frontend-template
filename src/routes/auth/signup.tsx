import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@heroui/react'
import { authClient } from '../../lib/auth-client'

export const Route = createFileRoute('/auth/signup')({ component: Signup })

function Signup() {
  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const confirmPassword = formData.get('confirmPassword') as string

    if (password !== confirmPassword) {
      alert("Passwords don't match")
      return
    }

    await authClient.signUp.email(
      {
        email,
        password,
        name,
        callbackURL: '/profile',
      },
      {
        onRequest: () => {},
        onSuccess: () => {},
        onError: (ctx) => {
          alert(ctx.error.message)
        },
      },
    )
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.08),_transparent_28%),linear-gradient(180deg,_#f8fbff,_#ecf4ff)] px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
      <div className="absolute left-0 top-24 h-64 w-64 rounded-full bg-sky-300/20 blur-3xl" />
      <div className="absolute bottom-6 right-0 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center">
        <div className="grid w-full overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.35)] backdrop-blur-xl lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-between gap-10 bg-slate-950 px-8 py-10 text-white sm:px-10 lg:px-12">
            <div className="max-w-md space-y-6">
              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-sky-100">
                Sign up
              </span>
              <div className="space-y-4">
                <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                  Create your account in a clean, calm flow.
                </h1>
                <p className="max-w-prose text-sm leading-6 text-slate-300 sm:text-base">
                  A simple signup page with just the essentials: name, email, and password.
                  Built to feel polished without getting in the way.
                </p>
              </div>
            </div>

            <dl className="grid gap-4 text-sm text-slate-300 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <dt className="font-medium text-white">Fast</dt>
                <dd className="mt-1 leading-6">Minimal fields and a focused layout.</dd>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <dt className="font-medium text-white">Readable</dt>
                <dd className="mt-1 leading-6">Clear labels and strong contrast.</dd>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <dt className="font-medium text-white">Modern</dt>
                <dd className="mt-1 leading-6">Tailwind styling with HeroUI button polish.</dd>
              </div>
            </dl>
          </div>

          <div className="flex items-center justify-center px-6 py-10 sm:px-10 lg:px-12">
            <div className="w-full max-w-md">
              <div className="mb-8 space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                  Start your account
                </h2>
                <p className="text-sm leading-6 text-slate-600">
                  Enter your details below to create a new profile.
                </p>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Jane Doe"
                    className="w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    placeholder="Create a secure password"
                    className="w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                  />
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium text-slate-700">
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    placeholder="confirm your password"
                    className="w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                  />
                </div>

                <Button
                  type="submit"
                  className="h-12 w-full rounded-2xl bg-slate-950 text-sm font-semibold text-white shadow-lg shadow-slate-950/15 transition hover:bg-slate-800"
                >
                  Create account
                </Button>
              </form>

              <p className="mt-6 text-center text-sm text-slate-500">
                Already have an account?{' '}
                <span className="font-medium text-slate-900">Sign in instead</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}