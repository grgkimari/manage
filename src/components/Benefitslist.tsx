import Benefit from "./Benefit";

export default function BenefitsList(){
    return <div className="flex flex-col space-y-8 md:w-1/2">
        <Benefit number={1} title="Track company wide progress" body="See how your day to day tasks fit in to the wider vision. Go from tracking progress at the milestone level all the way down to the smallest details. Never lose sight of the bigger picture again."/>
        <Benefit number={2} title="Advanced built in reports" body="Set internal delivery estimates and track progress towards company goals. Our customizable dashboard helps you build out the reports you need to keep stakeholders informed."/>
        <Benefit number={3} title="Everything you need in one place" body="Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all in one team productivity solution."/>
    </div>
}