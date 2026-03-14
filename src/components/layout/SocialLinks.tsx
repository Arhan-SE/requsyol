import { Facebook, Instagram, Linkedin } from "lucide-react";

import { cn } from "@/lib/utils";

const XLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.213 5.567 5.951-6.567zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialPlatforms = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/requsyol/",
    Icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/requsyolltd",
    Icon: Linkedin,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/requsyol",
    Icon: Facebook,
  },
  {
    label: "X",
    href: "https://x.com/requsyol",
    Icon: XLogo,
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
