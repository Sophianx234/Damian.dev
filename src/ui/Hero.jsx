function Hero() {
  return (
    <div className="md:grid md:grid-cols-[2fr_1fr]  flex-col-reverse flex items-center gap-8 max-w-6xl mx-auto mt-16  ">
      <div className="space-y-6">
        <h1 className="md:text-7xl antialiased text-zinc-700 text-4xl text-center md:text-left  font-bold ">
          Front-End React Developer 👋
        </h1>
        <p className=" w-[40rem] text-xl font-[Mulish]">
          Hi, I'm Damian X. A passionate Front-end React Developer based in
          Tamale, Ghana. 📍
        </p>
      </div>
      <div className="flex justify-center ">
        <img
          src="./images/damian-bg-7.png"
          alt="could not find image"
          className="w-96  rounded-full scale-110 "
        />
      </div>
    </div>
  );
}

export default Hero;
