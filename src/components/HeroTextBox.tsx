export default function HeroTextBox(){
    return <div className="flex flex-col mb-32 space-y-12 md:w-[50%]">
        <h1 className=" max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">Bring everyone together to build better products</h1>
        <p className="max-w-sm text-darkGrayishBlue md:text-left">Manage makes it easier for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
        <div className="flex justify-center md:justify-start">
        <a href="#" className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full items-baseline hover:bg-brightRedLight">Get Started</a>
        </div>
    </div>
}