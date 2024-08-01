import GridPattern from "@/components/magicui/animated-grid-pattern";
import SinusoidLogo from "@/components/SiusoidLogo/SinuLogoComponent";
import PulsatingButton from "@/components/ui/pulsating-button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React from "react";



const Home: React.FC = () => {
  const router = useRouter();
  return (
    <div className="relative flex flex-col h-[100vh] w-full items-center justify-center overflow-hidden bg-background bg-black text-white p-20 md:shadow-xl">
      <SinusoidLogo className="items-center w-52" />
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter">
        siNUsoid
      </p>

      <PulsatingButton
        className="my-20 z-10"
        onClick={() => router.push("/apply")}
      >
        Become a Volunteer Today!
      </PulsatingButton>
      <GridPattern
        numSquares={30}
        maxOpacity={0.5}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
    </div>
  );
};

export default Home;
