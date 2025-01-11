export default function Footer() {
  return (
    <footer className="mt-16 mb-16">
      <div className="flex items-center justify-between w-full pt-2 border-t border-neutral-200 dark:border-neutral-700">
        <div className="flex gap-2 px-[2px] text-sm text-neutral-600 dark:text-neutral-400">
          <p>
            Copyright Leonardo Betti {new Date().getFullYear()} | leonardobetti
            [at] gmail [dot] com
          </p>
        </div>
      </div>
    </footer>
  );
}
