import { Greeter } from "@/components/Greeter";
import { NavButton } from "@/components/NavButton";

export default function indexPage() {
  return (
    <div>
      <Greeter message={`Welcome to Search B!`} />
      <div>
        <NavButton text={"Writers"} path={"writer"} />
        <NavButton text={"GitHub"} path={"search"} />
        <NavButton text={"about"} path={"about"} />
      </div>
    </div>
  );
}
