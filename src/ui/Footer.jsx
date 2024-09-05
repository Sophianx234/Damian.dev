import Handles from "./Handles"

function Footer() {
    return (
        <div className="bg-[#2D2E32] py-24 md:px-10">
            <div className="max-w-6xl mx-auto text-lg md:grid md:grid-cols-2 justify-between items-center ">

            <p className="text-white font-semibold italic ">
            Copyright © 2024. All rights are reserved
            </p>
            <div className="flex justify-end  gap-10 ">

                <Handles type='footer'/>
                <div className="flex items-center justify-end pt-4 ">
                    <p className="text-white font-mono antialiased font-normal ">
                        Damian X
                        </p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer
