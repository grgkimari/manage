export default function Testimonial({avatarSrc, name, comment} : {avatarSrc : string, name : string, comment : string}){
    return <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray w-full mx-auto my-8 shadow-lg shadow-black md:w-2/3">
        <img className="w-16 -mt-14" alt="avatar" src={avatarSrc}/>
        <h5 className="text-2xl font-bold">{name}</h5>
        <p className="text-xl text-darkGrayishBlue ">{comment}
        </p>
    </div>
}