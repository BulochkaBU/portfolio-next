"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "@/i18n-config";

export default function LinkLocale({
  children,
  href,
  className,
  target,
}: {
  children: React.ReactNode;
  href: string;
  className: string;
  target?: string;
}) {
  const pathname = usePathname();

  const currentLanguage = pathname.split("/")[1] as Locale;
  return (
    <Link
      href={`/${currentLanguage}${href}`}
      className={className}
      target={target}
    >
      {children}
    </Link>
  );
}
