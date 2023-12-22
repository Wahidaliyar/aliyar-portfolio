// next link
import Link from "next/link";

// icons
import {RiInstagramLine, RiFacebookLine, RiLinkedinLine, RiGithubLine, RiWhatsappLine} from "react-icons/ri"

const Socials = () => {
  return <div className="flex items-center gap-x-5 text-xl lg:text-2xl">
    <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiWhatsappLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiFacebookLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiInstagramLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiGithubLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiLinkedinLine />
    </Link>
  </div>;
};

export default Socials;
