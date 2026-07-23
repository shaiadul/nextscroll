import Code from "@/components/code";
import Description from "@/components/description";
import SettingBar from "@/components/setting";

export default function Home() {
  return (
    <main className="container mx-auto px-5 pb-6 h-[calc(100vh-100px)] overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center items-stretch gap-6 h-full pb-2">
        <SettingBar />
        <Description />
        <Code />
      </div>
    </main>
  );
}
