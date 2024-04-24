import { skbg } from "../../assets";

export const Rings = () => {
  return (
    <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2">
      <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

export const BackgroundCircles = () => {
  return (
    <>
      <div className="absolute top-[4.4rem] left-40 w-[15px] h-[15px] transform rotate-45 bg-gradient-to-b from-[#435585] to-[#F5E8C7]"></div>
      <div className="absolute top-[12.6rem] right-16 w-[15px] h-[15px] transform rotate-45 bg-gradient-to-b from-[#481E14] to-[#F2613F]"></div>
      <div className="absolute top-[26.8rem] left-12 w-[15px] h-[15px] transform rotate-45 bg-gradient-to-b from-[#1B4242] to-[#9EC8B9]"></div>
      <div className="absolute top-[42.4rem] right-32 w-[15px] h-[15px] transform rotate-45 bg-gradient-to-b from-[#435585] to-[#F5E8C7]"></div>
    </>
  );
};

export const HamburgerMenu = () => {
  return (
    <div className="absolute inset-0 pointer-events-none lg:hidden">
      <div className="absolute inset-0 opacity-[.03]">
        <img
          className="w-full h-full object-cover"
          src={skbg}
          width={688}
          height={953}
          alt="Background"
        />
      </div>

      <Rings />

      <BackgroundCircles />
    </div>
  );
};
