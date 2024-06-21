export default function Benefit({number, title, body} : {number : number, title : string, body : string}){
    return <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
        <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
            <div className="flex items-center space-x-2">
                {/* number */}
                <div className="px-4 py-2 text-white bg-brightRed rounded-full md:py-1 ">
                    {number}
                </div>
                {/* Section heading 1 */}
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                    {title}
                </h3>
            </div>
            </div>
            <div className="">
                 {/* Section heading 2 */}
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                {title}
                </h3>
                 {/* Paragraph */}
                <p className="text-darkGrayishBlue">
                    {body}
                    
                </p>
            
        </div>
    </div>
}