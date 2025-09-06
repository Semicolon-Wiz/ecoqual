import AboutWet from "./AboutWet";
import Details from "./Details";
import WetHero from "./WetHero";
import WhereToUse from "./WhereToUse";


export default function WetWashGloves() {
    return (
        <main className="relative w-full">
            <WetHero />
            <AboutWet />
            <Details />
            <WhereToUse />
        </main>
    )
}
