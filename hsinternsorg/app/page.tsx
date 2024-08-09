import Image from "next/image";
import Hero from "@/components/Hero"

export default function Home() {
  return (
     <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Apply</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="col-span-1 flex justify-center items-center">
            <div className="bg-green-500 w-12 h-12"></div>
          </div>
          <div className="col-span-1 text-center">
            <h1 className="text-4xl font-bold">
              Teaching students life
              <br />
              changing skills.
            </h1>
            <p className="text-lg mt-4">
              By offering them hands-on experiences
            </p>
            <button className="mt-8 px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800">
              Apply Now <span className="ml-2">→</span>
            </button>
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <div className="bg-red-500 w-12 h-12"></div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-4 mb-8">
          {/* Card 1 */}
          <div className="bg-black text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              An easier way to get an internship.
            </h2>
            <p className="text-md">
              Loreskdajkldja kdjs ksjdk asjk dasjkl dsajkl jgkds jfk djksd fhjd jdsh fjd hdfjs hfjs hdjsk
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              Empowering students to research
            </h2>
            <p className="text-md">
              Loreskdajkldja kdjs ksjdk asjk dasjkl dsajkl jgkds jfk djksd fhjd jdsh fjd hdfjs hfjs hdjsk
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              An easier way to get an internship.
            </h2>
            <p className="text-md">
              Loreskdajkldja kdjs ksjdk asjk dasjkl dsajkl jgkds jfk djksd fhjd jdsh fjd hdfjs hfjs hdjsk
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-4">
        <div className="container mx-auto text-center">
          <p>Copyright © 2024 Internify.</p>
        </div>
      </footer>
    </div>
  );
}
