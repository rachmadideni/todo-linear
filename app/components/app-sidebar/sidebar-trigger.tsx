import { useSidebar } from "../ui/sidebar";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

export default function SidebarTrigger() {
  const { toggleSidebar } = useSidebar();
  return (
    <Button
      variant="ghost"
      size="icon"
      className="size-6"
      onClick={toggleSidebar}
    >
      <Menu />
    </Button>
  );
}
