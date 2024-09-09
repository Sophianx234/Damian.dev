import { Link } from "react-router-dom"
import Footer from "../ui/Footer"

function About() {
    return (
        <>
        <div className=" md:grid md:grid-cols-[1.5fr_3fr] items-center gap-10 bg-gray-100 ">
            <div className="bg-gradient-to-b from-stone-600 to-slate-500">

            <img src="./images/damian-10.jpg" alt="not found" className="h-screen w-full object-cover mix-blend-overlay" />
            </div>
            <div className="mt-16">
                <h1 className="text-3xl font-bold mb-6 mt-10">About</h1>
                <p className="font-[Mulish] w-[38rem] sm:pr-10 text-lg text-slate-800 ">

I'm Sophian Abdul Rahman, a Front-end React Developer based in Ghana. With a strong foundation in HTML, CSS, JavaScript, and React, I specialize in building dynamic, responsive, and user-friendly web applications. My passion lies in crafting seamless digital experiences that not only look great but also perform optimally.
<br />
Since starting my journey in web development, I've focused on honing my skills and staying updated with the latest technologies and trends. My expertise in React allows me to create interactive and scalable applications that meet the needs of modern web users. Whether it's developing a new feature, optimizing performance, or debugging, I approach each challenge with enthusiasm and a problem-solving mindset.
<br />
I'm always eager to take on new projects and collaborate with others who share my passion for creating innovative web solutions. If you're looking for a dedicated developer to bring your ideas to life, feel free to reach out.

                </p>
                <Link className="mt-4 inline-block bg-secondary-purple px-12 py-3 font-[Montserrat] font-bold text-white z-0 rounded-sm " to='/contact'>Contact</Link>
            </div>
            
        </div>
        <Footer type='about'/>
        </>
    )
}

export default About
