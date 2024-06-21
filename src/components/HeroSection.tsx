import HeroImageBox from "./HeroImageBox";
import HeroTextBox from "./HeroTextBox";

export default function HeroSection(){
    return <section className="container flex flex-col-reverse  items-center px-6 mt-10 space-y-0 mx-auto md:flex-col">
        <HeroTextBox />
        <HeroImageBox />
    </section>
}