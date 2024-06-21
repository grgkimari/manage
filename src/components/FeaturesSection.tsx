import BenefitsList from "./Benefitslist";
import Standout from "./Standout";

export default function FeaturesSection(){
    return <section id="features" className="flex flex-col p-5 max-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
<Standout />
<BenefitsList />
    </section>
}