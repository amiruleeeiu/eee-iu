import Notic from "@/components/Notic";
import ResearchActivities from "@/components/ResearchActivities";
import Slider from "@/components/Slider";
import StatsCard from "@/components/StatsCard";

export default function Home() {
  return (
    <>
      <Slider />
      <Notic />
      <ResearchActivities />
      <StatsCard />
      <ResearchActivities />
    </>
  );
}
