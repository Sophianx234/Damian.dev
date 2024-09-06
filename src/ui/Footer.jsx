import Handles from "./Handles"

function Footer() {
    return (
        <div className="bg-[#2D2E32] md:py-24 py-8 md:px-10 px-2">
            <div className="max-w-6xl mx-auto text-lg grid md:grid-cols-2 grid-cols-[2fr_1.5fr]   items-center ">

            <p className="text-white font-semibold italic text-xs md:text-base ">
            Copyright © 2024. All rights are reserved
            </p>
            <div className="flex justify-end  gap-4 md:gap-10 px-6  pb-4">

                <Handles type='footer'/>
                <div className="flex items-center justify-end pt-4 ">
                    <p className="text-white font-mono antialiased font-normal text-xs md:text-base">
                        Damian X
                        </p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer
