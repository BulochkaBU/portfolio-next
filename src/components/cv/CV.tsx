"use client";
import { Locale } from "@/i18n-config";
import LinkLocale from "../utils/LinkLocale";

export default function CV({ lang }: { lang: Locale }) {
  return (
    <div className="border border-pink-600 rounded-full dark:bg-pink-600 xl:hover:scale-95">
      <LinkLocale
        className="p-3 font-bold dark:text-white text-pink-600 text-xl "
        href={lang === "ru" ? "/CV_RUS.pdf" : "/CV_ENG.pdf"}
        target="_blank"
      >
        {lang === "ru" ? "Резюме" : "CV"}{" "}
      </LinkLocale>
    </div>
  );
}
