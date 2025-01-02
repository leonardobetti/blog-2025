export default function Footer() {
  return (
    <footer className="mb-16 mt-16">
      <div className="flex w-full items-center justify-between border-t border-neutral-200 pt-2 dark:border-neutral-700">
        <div className="flex gap-2 px-[2px] text-sm text-neutral-600 dark:text-neutral-400">
          <p>
            Copyright Leonardo Betti {new Date().getFullYear()} | leonardobetti
            [at] gmail [dot] com
          </p>
        </div>
      </div>
    </footer>
  )
}
