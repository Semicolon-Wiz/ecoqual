import WetWash from "@/components/WetWash";
import AboutWet from "./AboutWet";
import Details from "./Details";
import WetHero from "./WetHero";
import WhereToUse from "./WhereToUse";
import Commitment from "./Commitment";
import FourthSection from "@/components/FourthSection";


export default function WetWashGloves() {
    return (
        <main className="relative w-full">
            <WetHero />
            <AboutWet />
            <FourthSection /> 
            <Details />
            <WhereToUse />
            <WetWash />
            <Commitment />
        </main>
    )
}
