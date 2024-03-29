"use client";
import { useEffect } from "react";
import { useAppSelector } from "@/store/hooks";
import Image from "next/image";
import person from "@/assets/icons/person.svg";
import works from "@/assets/icons/works.svg";
import contacts from "@/assets/icons/contacts.svg";
import arrowUp from "@/assets/icons/arrowUp.svg";
import personWhite from "@/assets/icons/personWhite.svg";
import worksWhite from "@/assets/icons/worksWhite.svg";
import contactsWhite from "@/assets/icons/contactsWhite.svg";
import arrowUpWhite from "@/assets/icons/arrowUpWhite.svg";
import { Props } from "./types";

export default function Welcome({ dictionary }: { dictionary: Props }) {
  const colorTheme = useAppSelector((state) => state.themeAppSlice.themeColor);
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <section className="my-8 sm:my-12 px-4 sm:px-6 xl:px-20 ">
      <h2 className="sm:text-3xl text-2xl text-center lg:text-start font-bold text-green-700 dark:text-green-500 ">
        {dictionary.welcome}
      </h2>
      <p className="mt-2 sm:mt-5 md:text-xl sm:text-lg text-sm  text-slate-800 dark:text-white  sm:px-2 lg:px-0 ">
        {dictionary.greeting}
      </p>
      <p className="mt-2 md:text-xl sm:text-lg text-sm  text-slate-800 dark:text-white  sm:px-2 lg:px-0">
        {dictionary.welcomeContent}
      </p>
      <p className="mt-2 md:text-xl sm:text-lg text-sm  text-slate-800 dark:text-white  sm:px-2 lg:px-0">
        {dictionary.welcomeContent2}
        <strong>"{dictionary.cv}"</strong>.
      </p>

      <div className="mt-4 md:text-xl sm:text-lg text-sm  text-slate-800 dark:text-white flex gap-3 items-center justify-between md:justify-normal shadow-sm py-4 px-1 lg:px-0">
        <p className="flex gap-3 items-center">
          <Image src={colorTheme === "light" ? person : personWhite} width={20} height={20} alt="person" />
          {dictionary.pointAbout}
          <strong>"{dictionary.about}"</strong>
        </p>
        <Image
          src={colorTheme === "light" ? arrowUp : arrowUpWhite}
          width={20}
          height={20}
          alt="arrowUp"
          className="animate-bounce"
        />
      </div>
      <div className="my-6 md:text-xl sm:text-lg text-sm  text-slate-800 dark:text-white flex gap-3 items-center justify-between md:justify-normal shadow-sm py-4 px-1 lg:px-0">
        <div className="flex gap-3 items-center">
          <Image src={colorTheme === "light" ? works : worksWhite} width={20} height={20} alt="works" />
          {dictionary.pointWorks}
          <strong>"{dictionary.myWorks}"</strong>
        </div>

        <Image
          src={colorTheme === "light" ? arrowUp : arrowUpWhite}
          width={20}
          height={20}
          alt="arrowUp"
          className="animate-bounce"
        />
      </div>
      <div className=" md:text-xl sm:text-lg text-sm  text-slate-800 dark:text-white flex gap-3 items-center justify-between md:justify-normal shadow-sm py-4 px-1 lg:px-0">
        <div className="flex gap-3 items-center">
          <Image src={colorTheme === "light" ? contacts : contactsWhite} width={20} height={20} alt="contacts" />
          {dictionary.pointContacts}
          <strong>"{dictionary.contacts}"</strong>
        </div>
        <Image
          src={colorTheme === "light" ? arrowUp : arrowUpWhite}
          width={20}
          height={20}
          alt="arrowUp"
          className="animate-bounce"
        />
      </div>
    </section>
  );
}
