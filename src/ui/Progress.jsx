import ProgressBar from "@ramonak/react-progress-bar";
function Progress() {
    return (
        <div className="md:max-w-2xl mx-auto pb-32 overflow-hidden  ">
            <h1 className="text-center text-xl text-slate-700 font-semibold dark:text-white">Progress</h1>
            <div className="space-y-3 px-14 py-4 pb-7 mt-5 rounded-lg shadow-md mx-9 md:mx-0 bg-[#F9F9F9]">

            <div>
                <h3 className="font-semibold text-slate-700 pl-4">HTML</h3>
                <ProgressBar bgColor="#3F3F46"
                completed={92}
                maxCompleted={100}
                className="dark:stroke-slate-50"
                
                />
            </div>
            <div>
                <h3 className="font-semibold text-slate-700 pl-4">CSS</h3>
                <ProgressBar bgColor="#3F3F46"
                completed={88}
                maxCompleted={100}
                
                />
            </div>
            <div>
                <h3 className="font-semibold text-slate-700 pl-4">JS</h3>
                <ProgressBar bgColor="#3F3F46"
                completed={80}
                maxCompleted={100}
                
                />
            </div>
            <div>
                <h3 className="font-semibold text-slate-700 pl-4">REACT</h3>
                <ProgressBar bgColor="#3F3F46"
                completed={86}
                maxCompleted={100}
                
                />
            </div>
            <div>
                <h3 className="font-semibold text-slate-700 pl-4">TAILWIND</h3>
                <ProgressBar bgColor="#3F3F46"
                completed={90}
                maxCompleted={100}
                
                />
            </div>
            <div>
                <h3 className="font-semibold text-slate-700 pl-4">NODEJS</h3>
                <ProgressBar bgColor="#3F3F46"
                completed={90}
                maxCompleted={100}
                
                />
            </div>
                </div>
        </div>
    )
}

export default Progress
