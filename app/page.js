import Code from "@/components/code";
import Description from "@/components/description";
import SettingBar from "@/components/setting";

export default function Home() {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-4 justify-center items-start gap-10">
        <SettingBar />
        <Description />
        <Code />
      </div>
    </section>
  );
}
