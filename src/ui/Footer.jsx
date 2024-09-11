import Handles from "./Handles"

function Footer({type}) {
    return (
        <div className="bg-[#2D2E32] ">

        <div className={`md:max-w-6xl mx-auto ${type? 'md:py-10':'md:py-24'} py-8 md:px-10 px-10`} >
            <div className="flex justify-between">

            <p className="text-white font-semibold italic text-xs md:text-base pt-6 ">
            Copyright © 2024. All rights are reserved
            </p>
            <div className=" flex items-center  gap-10">

                <Handles type='footer'/>
                
                    <p className="text-white  antialiased font-normal  pt-4  md:text-base text-nowrap ">
                        Damian X
                        </p>
                
            </div>
            </div>
        </div>
        </div>
    )
}

export default Footer
