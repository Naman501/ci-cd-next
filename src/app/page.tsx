export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 px-6 font-sans dark:bg-black">
      <main className="flex w-full max-w-2xl flex-col items-center gap-6 text-center">
        <span className="rounded-full border border-black/[.08] px-3 py-1 text-sm text-zinc-600 dark:border-white/[.145] dark:text-zinc-400">
          Deployed with CI/CD
        </span>
        <h1 className="text-5xl font-semibold tracking-tight text-black sm:text-6xl dark:text-zinc-50">
          Hello 👋
        </h1>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          A small Next.js landing page, built to ship through the pipeline.
        </p>
        <div className="mt-2 flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center rounded-full bg-foreground px-6 text-background transition-colors hover:bg-[#383838] sm:w-[158px] dark:hover:bg-[#ccc]"
            href="#get-started"
          >
            Get started
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-6 transition-colors hover:border-transparent hover:bg-black/[.04] sm:w-[158px] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
