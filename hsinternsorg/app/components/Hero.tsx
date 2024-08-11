import React from 'react';
import { Boxes } from "@/app/components/ui/background-boxes";
import { cn } from "@/lib/utils";

const Hero: React.FC = () => {
  return (
    <main>
      <div className="h-96 relative w-full overflow-hidden bg-white flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-white z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <p className="text-red-500 !important">This should be red</p>
      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Tailwind is Awesome
      </h1>
      <p className="text-center mt-2 text-blue-500 text-bold relative z-20">
        Framer motion is the best animaiton library ngl
      </p>
    </div>
    </main>

  );
};

export default Hero;
