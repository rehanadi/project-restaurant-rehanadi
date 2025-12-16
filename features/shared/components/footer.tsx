import Logo from "./logo";
import {
  socialMediaData,
  type SocialMediaData,
} from '@/features/shared/constants/social-media-data';
import { exploreLinks, helpLinks } from "../constants/links-data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-25">
      <div className="custom-container w-full py-10 md:py-20 flex flex-wrap justify-between gap-6">
        <div className="basis-full md:basis-[380px] flex flex-col gap-4 md:gap-10">
          <div className="flex flex-col gap-5.5">
            <Logo variant="light" />
            <p className="text-sm md:text-md">
              Enjoy homemade flavors & chef’s signature dishes, freshly prepared every day. Order online or visit our nearest branch.
            </p>
          </div>

          <div className="flex flex-col items-start gap-5">
            <h3 className="font-bold text-sm md:text-md">
              Follow on Social Media
            </h3>

            <div className="flex-start gap-3">
              {socialMediaData.map((socialMedia, index) => (
                <SocialMediaIcon key={index} {...socialMedia} />
              ))}
            </div>
          </div>
        </div>

        <div className="basis-1/3 md:basis-50 flex flex-col gap-4 md:gap-5">
          <h3 className="font-extrabold text-sm md:text-md">
            Explore
          </h3>

          {exploreLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-neutral-25 text-sm md:text-md hover:underline transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="basis-1/3 md:basis-50 flex flex-col gap-4 md:gap-5">
          <h3 className="font-extrabold text-sm md:text-md">
            Help
          </h3>

          {helpLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-neutral-25 text-sm md:text-md hover:underline transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const SocialMediaIcon = ({ name, icon, link }: SocialMediaData) => {
  return (
    <Link href={link}>
      <div className='flex-center size-10 rounded-full border border-neutral-800 transition hover:bg-neutral-700'>
        <img src={icon} alt={name} />
      </div>
    </Link>
  );
};
