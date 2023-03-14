export default function App() {
  return (
    <section className="   text-mycolor-300 font-inter bg-mycolor-100">
      <header className=" invisible lg:visible lg:max-w-6xl lg:m-auto lg:pt-10 lg:flex lg:justify-between ">
        <p className="font-inter text-sm">hello@kawsar.design</p>
        <span className="font-inter text-sm">Instagram</span>
      </header>
      <section className="lg:pt-32 pt-5 pb-32 max-w-6xl m-auto ">
        <div className="flex flex-col justify-center ">
          <img className="rounded-full mx-auto " src="/128.png" alt="" />
          <p className="pt-6 font-inter text-center text-sm">Hi,I'm Huzaifa</p>
          <h1 className="mx-auto lg:w-5/12 w-80 font-inter lg:text-5xl text-3xl lg:pt-6 pt-1 text-center">
            Building digital products, brands, and experience
          </h1>
          <button className="mt-6 py-4 border text-base border-mycolor-400 bg-mycolor-400 w-48 m-auto">
            Latest Shots
          </button>
        </div>
      </section>
      <section className="bg-mycolor-400 pt-16 pb-16 ">
        <div className=" flex justify-between max-w-6xl m-auto">
          <img
            className="lg:w-36 w-48 ml-3 lg:ml-0"
            src="/coca-cola-logo-svgrepo-com.svg"
            alt=""
          />
          <img
            className="lg:w-36 w-48 ml-5 lg:ml-0"
            src="/coca-cola-logo-svgrepo-com.svg"
            alt=""
          />
          <img
            className="lg:w-36 w-10 invisible lg:visible "
            src="/coca-cola-logo-svgrepo-com.svg"
            alt=""
          />
          <img
            className="lg:w-36 w-10 invisible lg:visible"
            src="/coca-cola-logo-svgrepo-com.svg"
            alt=""
          />
          <img
            className="lg:w-36 w-10 invisible lg:visible"
            src="/coca-cola-logo-svgrepo-com.svg"
            alt=""
          />
          <img
            className="lg:w-36 w-10 invisible lg:visible"
            src="/coca-cola-logo-svgrepo-com.svg"
            alt=""
          />
        </div>
      </section>
      <section className="pt-32 pb-32 max-w-6xl m-auto">
        <h1 className="lg:mx-auto lg:w-3/6 w-full   lg:text-4xl text-2xl font-inter  text-center">
          Collaborate with brands and agencies to create impactful results.
        </h1>
      </section>

      <section className="flex max-w-5xl pb-32 m-auto justify-between flex-col lg:flex-row ml-24 lg:ml-0">
        <div className="bg-mycolor-400 w-60 rounded-md px-5 pb-16 mb-5 lg:mb-0">
          <img className="pt-40" src="/q1 (2).svg" alt="" />
          <h1 className="text-lg pt-2 font-inter">UX & UI</h1>
          <p className="text-sm pt-2 font-inter">
            Crafting visually stunning designs that connect with your audience.
          </p>
        </div>
        <div className="bg-mycolor-400 mb-5 lg:mb-0 w-60 rounded-md px-5 pb-16">
          <img className="pt-40" src="/q1 (2).svg" alt="" />
          <h1 className="text-lg pt-2 font-inter">UX & UI</h1>
          <p className="text-sm pt-2 font-inter">
            Crafting visually stunning designs that connect with your audience.
          </p>
        </div>
        <div className="bg-mycolor-400 w-60 mb-5 lg:mb-0 rounded-md px-5 pb-16">
          <img className="pt-40" src="/q1 (2).svg" alt="" />
          <h1 className="text-lg pt-2 font-inter">UX & UI</h1>
          <p className="text-sm pt-2 font-inter">
            Crafting visually stunning designs that connect with your audience.
          </p>
        </div>
        <div className="bg-mycolor-400 w-60 rounded-md mb-5 lg:mb-0 px-5 pb-16">
          <img className="pt-40" src="/q1 (2).svg" alt="" />
          <h1 className="text-lg pt-2 font-inter">UX & UI</h1>
          <p className="text-sm pt-2 font-inter">
            Crafting visually stunning designs that connect with your audience.
          </p>
        </div>
      </section>
      <section className=" pb-32 max-w-6xl m-auto ">
        <div className="flex flex-col justify-center ">
          <h1 className="mx-auto lg:w-5/12 w-80  lg:text-5xl text-3xl pt-6 font-inter text-center">
            Tell me about your next project
          </h1>
          <button className="mt-6 py-4 border text-base border-mycolor-400 bg-mycolor-400 w-48 m-auto">
            Get in touch
          </button>
        </div>
      </section>
    </section>
  );
}
