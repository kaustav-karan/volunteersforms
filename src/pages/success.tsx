import GridPattern from "@/components/magicui/animated-grid-pattern";
import SinusoidLogo from "@/components/SiusoidLogo/SinuLogoComponent";
import { cn } from "@/lib/utils";

const Success: React.FC = () => {
return (
  <div className="relative flex flex-col h-[100vh] w-full items-center justify-center overflow-hidden bg-background bg-black text-white p-20 md:shadow-xl">
    <SinusoidLogo className="items-center w-52" />
    <h1 className="text-2xl font-bold text-center	">Thank you for applying!</h1>
    <p className="text-lg text-center	">
      We appreciate your interest and will review your application shortly.
    </p>
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

export default Success;
