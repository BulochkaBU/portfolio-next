"use client";
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

interface Props {
  welcome: string;
  greeting: string;
  welcomeContent: string;
  welcomeContent2: string;
  pointAbout: string;
  pointWorks: string;
  pointContacts: string;
  about: string;
  myWorks: string;
  contacts: string;
  cv: string;
}

export default function Welcome({ dictionary }: { dictionary: Props }) {
  const colorTheme = useAppSelector((state) => state.themeAppSlice.themeColor);

  return (
    <section className="my-8 sm:my-12 px-6 xl:px-20 ">
      <h2 className="sm:text-3xl text-2xl text-center lg:text-start font-bold text-green-700 dark:text-green-500 ">
        {dictionary.welcome}
      </h2>
      <p className="mt-2 sm:mt-5 sm:text-xl text-lg text-slate-800 dark:text-white  sm:px-2 lg:px-0 ">
        {dictionary.greeting}
      </p>
      <p className="mt-2 sm:text-xl text-lg text-slate-800 dark:text-white  sm:px-2 lg:px-0">
        {dictionary.welcomeContent}
      </p>
      <p className="mt-2 sm:text-xl text-lg text-slate-800 dark:text-white  sm:px-2 lg:px-0">
        {dictionary.welcomeContent2}
        <strong>"{dictionary.cv}"</strong>.
      </p>

      <div className=" sm:text-xl text-lg text-slate-800 dark:text-white flex gap-3 items-center justify-between md:justify-normal shadow-sm py-4 px-1 lg:px-0">
        <p className="flex gap-3 items-center">
          <Image
            src={colorTheme === "light" ? person : personWhite}
            width={20}
            height={20}
            alt="person"
          />
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
      <div className=" sm:text-xl text-lg text-slate-800 dark:text-white flex gap-3 items-center justify-between md:justify-normal shadow-sm py-4 px-1 lg:px-0">
        <div className="flex gap-3 items-center">
          <Image
            src={colorTheme === "light" ? works : worksWhite}
            width={20}
            height={20}
            alt="works"
          />
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
      <div className=" sm:text-xl text-lg text-slate-800 dark:text-white flex gap-3 items-center justify-between md:justify-normal shadow-sm py-4 px-1 lg:px-0">
        <div className="flex gap-3 items-center">
          <Image
            src={colorTheme === "light" ? contacts : contactsWhite}
            width={20}
            height={20}
            alt="contacts"
          />
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
