import {
  SidebarInset,
  SidebarProvider,
  useSidebar,
} from "~/components/ui/sidebar";
import type { Route } from "../../+types/root";
import { Separator } from "~/components/ui/separator";
import AppSidebar from "~/components/app-sidebar";
import SidebarTrigger from "~/components/app-sidebar/sidebar-trigger";
import ThemeToggle from "~/components/theme-toggle";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
          </div>
          <div className="flex bg-orange-400/0 w-full justify-end px-4">
            <ThemeToggle />
          </div>
        </header>
      </SidebarInset>
    </SidebarProvider>
  );
}
