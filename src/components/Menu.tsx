import { data } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Paragraph } from "./ui/typography";

export default function Menu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="block sm:hidden" asChild>
        <Button
          type="button"
          aria-label="menu"
          variant="outline"
          size="icon"
          className="flex justify-center items-center"
        >
          <MenuIcon size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {data.routesList.map((item) => (
          <a href={item.name} key={item.id}>
            <DropdownMenuItem>
              <Paragraph className="font-semibold text-sm">
                {item.name}
              </Paragraph>
            </DropdownMenuItem>
          </a>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
