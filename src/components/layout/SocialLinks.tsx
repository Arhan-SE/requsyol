import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

import { cn } from "@/lib/utils";

const socialPlatforms = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    Icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    Icon: Linkedin,
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    Icon: Facebook,
  },
  {
    label: "X / Twitter",
    href: "https://x.com",
    Icon: Twitter,
  },
];

type SocialLinksProps = {
  className?: string;
  iconClassName?: string;
  linkClassName?: string;
};

const SocialLinks = ({ className, iconClassName, linkClassName }: SocialLinksProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {socialPlatforms.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          title={label}
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-colors duration-200 hover:text-foreground hover:bg-secondary",
            linkClassName,
          )}
        >
          <Icon className={cn("h-4 w-4", iconClassName)} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
