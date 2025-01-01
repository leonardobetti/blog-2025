import { AppThemeSwitcher } from "@/components/theme";

const Footer = () => {
  return (
    <div className="flex w-full items-center justify-between border-border border-t pt-2">
      <div className="flex gap-2 px-[2px] text-muted text-small">
        <p>
          {" "}
          Copyright Leonardo Betti 2025 | leonardobetti [at] gmail [dot] com{" "}
        </p>
      </div>
      <div className="text-muted text-small">
        <AppThemeSwitcher />
      </div>
    </div>
  );
};

export { Footer };
