import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { img: 36, text: "text-base" },
  md: { img: 44, text: "text-lg" },
  lg: { img: 56, text: "text-xl" },
};

export function Logo({
  className = "",
  showWordmark = true,
  size = "md",
}: LogoProps) {
  const s = sizes[size];

  return (
    <Link
      href="/"
      className={["group flex items-center gap-3 shrink-0", className].join(" ")}
    >
      <Image
        src={images.brand.logo}
        alt={site.name}
        width={s.img}
        height={s.img}
        className="rounded-full shadow-sm ring-1 ring-black/5 transition-transform group-hover:scale-105"
        priority
      />
      {showWordmark && (
        <span
          className={[
            "font-display font-bold tracking-tight text-primary hidden sm:inline",
            s.text,
          ].join(" ")}
        >
          {site.name}
        </span>
      )}
    </Link>
  );
}
