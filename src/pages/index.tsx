import { Greeter } from "@/components/Greeter";
import { NavButton } from "@/components/NavButton";

export default function indexPage() {
  return (
    <div>
      <Greeter message={`Welcome to Search B!`} />
      <div>
        <NavButton text={"Talk to ChatGPT"} path={"chat"} />
        <NavButton text={"GitHub"} path={"search"} />
        <NavButton text={"about"} path={"about"} />
      </div>
    </div>
  );
}
