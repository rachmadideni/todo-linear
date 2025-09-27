import { Button } from "~/components/ui/button";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import { Theme, useTheme } from "remix-themes";
import { Moon, SunMoon } from "lucide-react";

export function Welcome() {
  const [theme, setTheme] = useTheme();
  return (
    <main className="flex items-center justify-center h-screen pt-16 pb-4 dark:bg-orange-400">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <img
              src={logoLight}
              alt="React Router"
              className="block w-full dark:hidden"
            />
            <img
              src={logoDark}
              alt="React Router"
              className="hidden w-full dark:block"
            />
          </div>
        </header>
        <Button
          variant="secondary"
          size="icon"
          className="size-8 cursor-pointer"
          onClick={() =>
            setTheme((prev) => (prev === Theme.DARK ? Theme.LIGHT : Theme.DARK))
          }
        >
          {theme === Theme.DARK ? <Moon /> : <SunMoon />}
        </Button>        
        <div className="max-w-[300px] w-full space-y-6 px-4"></div>
      </div>
    </main>
  );
}
