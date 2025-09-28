import React from "react";
import { Button } from "../ui/button";
import { Moon, SunMoon } from "lucide-react";
import { Theme, useTheme } from "remix-themes";

export default function ThemeToggle() {
  const [theme, setTheme] = useTheme();
  return (
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
  );
}
