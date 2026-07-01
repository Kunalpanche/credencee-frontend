"use client";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useScroll } from "@/components/ui/use-scroll";
import useAuthStore from "@/store/useAuthStore";
import { Menu, X, Sun, Moon } from "lucide-react";

export function Header() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);
  const { theme, setTheme } = useAuthStore();

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const links = [
    { label: "Home", href: "/#" },
    { label: "Features", href: "/#features" },
    { label: "Integrations", href: "/#integrations" },
    { label: "Trust Hub", href: "/#trust-hub" },
    { label: "Statistics", href: "/#statistics" },
    { label: "Pricing", href: "/#pricing" },
  ];

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-gradient-to-b from-white/98 via-white/85 to-transparent dark:from-zinc-950/98 dark:via-zinc-950/85 dark:to-transparent backdrop-blur-[8px]"
          : "bg-gradient-to-b from-white/90 via-white/50 to-transparent dark:from-zinc-950/90 dark:via-zinc-950/50 dark:to-transparent backdrop-blur-[4px]"
      )}
    >
      <nav className="w-full max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between transition-all duration-300">

        {/* Left Column: Brand Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src="/3.svg"
              alt="credeneE Logo"
              className="h-[18px] md:h-[24px] w-auto object-contain transition-all duration-300 dark:brightness-110"
            />
          </Link>
        </div>

        {/* Center Column: Navigation links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link, i) => {
            const isAnchor = link.href.includes("#");
            const LinkComponent = isAnchor ? "a" : Link;
            return (
              <LinkComponent
                key={i}
                href={isAnchor ? link.href : undefined}
                to={isAnchor ? undefined : link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </LinkComponent>
            );
          })}
        </div>

        {/* Right Column: Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Sign In
          </Link>

          <Link
            to="/login?mode=demo"
            className="border border-border/80 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-foreground text-sm font-semibold rounded-lg px-4 py-2 transition-colors duration-200"
          >
            Request Demo
          </Link>

          <Link
            to="/login?mode=signup"
            className="bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-white dark:hover:bg-zinc-100 dark:text-zinc-950 text-sm font-semibold rounded-lg px-4 py-2 transition-colors duration-200"
          >
            Try for free
          </Link>

          {/* Simple Rounded Theme Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={handleToggleTheme}
            className="rounded-full h-9 w-9 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-colors duration-200 flex items-center justify-center text-muted-foreground hover:text-foreground shrink-0"
          >
            {theme === "dark" ? (
              <Sun className="h-4.5 w-4.5 text-amber-500 fill-amber-500/20" />
            ) : (
              <Moon className="h-4.5 w-4.5 text-indigo-500 fill-indigo-500/10" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>

        {/* Mobile Actions and Hamburger Menu */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Simple Rounded Theme Toggle Button for Mobile */}
          <Button
            variant="ghost"
            size="icon"
            onClick={handleToggleTheme}
            className="rounded-full h-9 w-9 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-colors duration-200 flex items-center justify-center text-muted-foreground hover:text-foreground shrink-0"
          >
            {theme === "dark" ? (
              <Sun className="h-4.5 w-4.5 text-amber-500 fill-amber-500/20" />
            ) : (
              <Moon className="h-4.5 w-4.5 text-indigo-500 fill-indigo-500/10" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Button
            size="icon"
            variant="ghost"
            onClick={() => setOpen(!open)}
            className="h-9 w-9 flex items-center justify-center text-muted-foreground hover:text-foreground"
          >
            {open ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={cn(
          "bg-background/98 dark:bg-zinc-950/98 fixed top-16 right-0 left-0 bottom-0 z-40 flex flex-col p-6 border-t border-border/40 md:hidden transition-all duration-300",
          open ? "block animate-in fade-in-95 slide-in-from-top-4" : "hidden",
        )}
      >
        <div className="flex flex-col h-full justify-between pb-12">
          {/* Vertical Menu links */}
          <div className="flex flex-col gap-1">
            {links.map((link, i) => {
              const isAnchor = link.href.includes("#");
              const LinkComponent = isAnchor ? "a" : Link;
              return (
                <LinkComponent
                  key={i}
                  href={isAnchor ? link.href : undefined}
                  to={isAnchor ? undefined : link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-bold text-zinc-700 dark:text-zinc-350 hover:text-emerald-500 py-3.5 border-b border-border/30"
                >
                  {link.label}
                </LinkComponent>
              );
            })}
          </div>

          {/* Action CTAs at bottom */}
          <div className="flex flex-col gap-3">
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="w-full py-3 text-center border border-border/80 dark:border-zinc-800 rounded-xl text-sm font-bold text-foreground transition-colors duration-200"
            >
              Sign In
            </Link>

            <Link
              to="/login?mode=signup"
              onClick={() => setOpen(false)}
              className="w-full py-3 text-center bg-emerald-600 dark:bg-white text-white dark:text-zinc-950 rounded-xl text-sm font-bold shadow-md shadow-emerald-500/10 transition-colors duration-200"
            >
              Try for free
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
