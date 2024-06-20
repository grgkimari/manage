export default function Navbar(){
    return <nav className="relative container mx-auto p-6">
       <div className="flex items-center justify-between">
        <div className="pt-2">
            <img src="/logo.svg" alt="manage logo"/>
        </div>
        <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-darkGrayishBlue">Pricing</a>
            <a href="#" className="hover:text-darkGrayishBlue">Product</a>
            <a href="#" className="hover:text-darkGrayishBlue">About us</a>
            <a href="#" className="hover:text-darkGrayishBlue">Careers</a>
            <a href="#" className="hover:text-darkGrayishBlue">Community</a>
            <a href="#" className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full items-baseline hover:bg-brightRedLight">Get Started</a>
        </div>
       </div>
        </nav>
}