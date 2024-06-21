import SocialMediaIcon from "./SocialMediaIcon";

export default function Footer(){
    return <footer className="bg-veryDarkBlue w-screen">
        <div className=" container flex flex-col-reverse min-w-full space-y-8 px-6 py-10 justify-between md:flex-row md:space-y-0">
            <div className="flex flex-col-reverse items-center- justify-between space-y-12 md:flex-col md:items-start md:space-y-0">
                <div className="my-4 mx-auto">
                    <img src="/logo-white.svg" alt="white logo" className="h-8"/>
                </div>
                <div className="mx-auto my-6 text-center text-white md:hidden">Copyright 2022. All rights reserved.</div>
                <div className="flex justify-center space-x-4">
<SocialMediaIcon src="/icon-facebook.svg" alt="facebook icon"/>
<SocialMediaIcon src="/icon-instagram.svg" alt="instagram icon"/>
<SocialMediaIcon src="/icon-twitter.svg" alt="twitter icon"/>
<SocialMediaIcon src="/icon-pinterest.svg" alt="pinterest icon"/>
<SocialMediaIcon src="/icon-youtube.svg" alt="youtube icon"/>
                </div>
            </div>
            <div className="flex justify-around space-x-32 text-white">
                <div className="flex flex-col space-y-3">
                    <a href="#" className="hover:text-brightRed">Home</a>
                    <a href="#" className="hover:text-brightRed">Pricing</a>
                    <a href="#" className="hover:text-brightRed">Products</a>
                    <a href="#" className="hover:text-brightRed">About</a>
                </div>
                <div className="flex flex-col space-y-3">
                    <a href="#" className="hover:text-brightRed">Careers</a>
                    <a href="#" className="hover:text-brightRed">Community</a>
                    <a href="#" className="hover:text-brightRed">Privacy policy</a>
                                    </div>
            </div>
            <div className="flex flex-col justify-between">
                <form>
                    <div className="flex space-x-3">
                        <input className="flex-1 px-4 rounded-full focus:outline-none" type="text" title="Email" placeholder="Updates in your inbox"/>
                        <button type="button" className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">Go</button>

                    </div>
                </form>
                <div className="hidden text-white m-4 md:block">Copyright 2022. All rights reserved.</div>
            </div>
        </div>
    </footer>
}