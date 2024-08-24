import { Paragraph } from "@/components/ui/typography";
import { cn, data } from "@/lib/utils";
import DarkMode from "./DarkMode";
import Menu from "./Menu";

export default function Header() {
  return (
    <header
      className={cn(
        "w-full flex border-b justify-center items-center fixed bg-white/80",
        "dark:bg-[#0a0a0a]/80 backdrop-blur-md top-0 p-4 z-50"
      )}
    >
      <nav className="flex justify-between max-w-xl items-center w-full">
        <a href="/">
          <Paragraph className="font-bold">ekel.dev</Paragraph>
        </a>
        <div className="flex justify-center items-center space-x-5">
          <div className="justify-center hidden sm:flex items-center space-x-5">
            {data.routesList.map((item) => (
              <a href={item.name} key={item.id}>
                <Paragraph className="font-semibold">{item.name}</Paragraph>
              </a>
            ))}
          </div>
          <Menu />
          <DarkMode />
        </div>
      </nav>
    </header>
  );
}
