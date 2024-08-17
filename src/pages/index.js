import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between items-center bg-white">
      <header className="flex justify-between items-center p-4 w-full max-w-7xl">
        <Image src="/images/halluminatelogo.svg" alt="logo" width={150} height={150} />
        <nav className="hidden md:block">
          <ul className="flex space-x-11">
            {["Home", "Documentation", "Pricing", "Blogs", "Contact"].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-blue-600">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className="bg-white text-md font-semibold leading-6 text-gray-900 border border-black rounded-xl px-4 py-2 hover:text-indigo-700 hover:border-indigo-700">
          Log In
        </button>
      </header>

      <section className="text-left py-20 w-full max-w-7xl">
        <div className="bg-blue-100 inline-block px-4 py-2 rounded-full mb-4">
          Announcement: Halluminate Web App Launch →
        </div>
        <h1 className="text-6xl font-medium mb-6">
          <span className="text-blue-600 font-bold">Custom</span> testing<br />
          for AI agents
        </h1>
        <p className="text-xl mb-8">
          Create, finetune, and deploy application specific evaluation models to<br />
          test your AI agents.
        </p>
        <div className="space-x-4">
          <button className="bg-black text-white px-6 py-3 rounded">Try now for free</button>
          <button className="border border-black px-6 py-3 rounded">Chat with us</button>
        </div>
      </section>

      <section className="text-center py-10 pb-28 w-full max-w-7xl">
        <p className="text-gray-500 mb-4">Trusted by Developers</p>
        <div className="flex justify-center space-x-8 flex-wrap">
          {["arkifi", "Harvey", "KPMG", "Oxbridge", "Robinhood", "SpikeyAI", "stripe"].map((company) => (
            <Image 
              key={company}
              src={`/images/${company}.png`}
              alt={company}
              width={100}
              height={40}
              className="h-10 object-contain"
            />
          ))}
        </div>
      </section>

      <section className="bg-black text-white text-center py-20 w-full">
        <h2 className="text-4xl font-bold mb-4">More building. Less <span className="text-blue-600">testing.</span></h2>
      </section>

      <section className="py-20 text-center w-full max-w-7xl border">
        <h2 className="text-3xl font-bold mb-4">Try our <span className="text-blue-600">demo</span> below</h2>
        <p className="mb-20">AI agent outputs will be graded against pre-defined criteria judged by evaluation models.</p>
          <div className="max-w-5xl mx-auto grid grid-cols-5 grid-rows-5 gap-4 border items-stretc">
            <div className="row-span-2 border ">1</div>
            <div className="row-span-3 border">2</div>
            <div className="row-start-3 border">3</div>
          </div>
        </section>
    </main>
  );
}