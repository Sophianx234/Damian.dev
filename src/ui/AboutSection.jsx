function AboutSection() {
    return (
        <div className="bg-[#F9F9F9]
        flex lg:flex-row md:flex-col  md:items-center lg:items-start
        space-y-9 md:pt-20 md:pb-20 lg:pb-0 lg:pt-0 lg:pr-10 
        ">

            <img src="./images/desktop.png" alt="" className="md:w-[30rem] lg:h-full
            md:rounded-md lg:rounded-none
            " />
            <div className="flex flex-col items-center lg:items-start px-20 space-y-7 lg:space-y-3">
                <h1 className="text-secondary-purple uppercase font-bold font-[Montserrat]  md:text-lg ">About Me</h1>
                <h2 className="md:text-3xl font-semibold  text-center lg:text-left  text-slate-700">Front-end Developer <br /> based in Tamale, Ghana 📍 </h2>
                <div className="space-y-6 text-zinc-600 lg:space-y-2 lg:pt-2">

                <p className="text-xl text-center lg:text-left ">
                Hey, my name is Sophian Abdul Rahman, and I'm a Frontend Developer.  My passion lies in creating a clean optimized UI/UX  for my users.
                <span className="md:hidden lg:inline">
                    My main stack currently is React/Next.js in combination with Tailwind CSS and TypeScript.
                    </span> 


                </p>
                <p className=" lg:hidden text-xl text-center lg:text-left md:block">
                My main stack currently is React/Next.js in combination with Tailwind CSS and TypeScript.
                </p>
                <div className="md:text-center lg:text-left">

                <button className="bg-secondary-purple px-5 py-2 text-white justify-self-center ">Read More</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
