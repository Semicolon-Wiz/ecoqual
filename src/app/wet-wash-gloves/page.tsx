import WetWash from "@/components/WetWash";
import AboutWet from "../../components/AboutWet";
import Details from "../../components/Details";
import WetHero from "./WetHero";
import Commitment from "./Commitment";
import FourthSection from "@/components/FourthSection";


export default function WetWashGloves() {
    return (
        <main className="relative w-full">
            <WetHero />
            <AboutWet />
            <FourthSection /> 
            <Details />
            <WetWash />
            <Commitment />
        </main>
    )
}
