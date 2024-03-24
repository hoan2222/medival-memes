
import Landing from "./ui/components/landing_screen";
import Option from "./ui/components/option";
import Source from "./ui/components/sources";
import Impressum from "./ui/components/impressum";
import Placeholder from "./ui/components/placeholder";
import Tagungen from "./ui/components/tagungen";
import Content from "./ui/components/contents";

export default function Home() {
  return (
    <div>
      <Landing />
      <Option />
      <Placeholder />
      <Content />
      <Source />
      <Tagungen />
      <Impressum />
    </div>
  );
}
