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
}

export default function Welcome({ dictionary }: { dictionary: Props }) {
  const colorTheme = useAppSelector((state) => state.themeAppSlice.themeColor);

  return (
    <section className="my-8 sm:my-12 px-6 xl:px-20 ">
      <h2 className="sm:text-3xl text-2xl text-center lg:text-start font-bold text-green-700 dark:text-green-500 ">
        {dictionary.welcome}
      </h2>
      <p className="mt-2 sm:mt-5 sm:text-xl text-lg text-slate-800 dark:text-white  sm:px-2 lg:px-0 ">
        Меня зовут Анастасия Прудинская и я рада вас приветствовать на моем
        сайте!
      </p>
      <p className="mt-2 sm:text-xl text-lg text-slate-800 dark:text-white  sm:px-2 lg:px-0">
        Здесь вы узнаете, кто я, как я к этому пришла и что буду с этим делать.
      </p>

      <div className=" sm:text-xl text-lg text-slate-800 dark:text-white flex gap-3 items-center justify-between md:justify-normal shadow-sm py-4 px-1 lg:px-0">
        <div className="flex gap-3 items-center">
          <Image
            src={colorTheme === "light" ? person : personWhite}
            width={20}
            height={20}
            alt="person"
          />
          Чтобы узнать кто я — нажмите "про меня".
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
          {" "}
          <Image
            src={colorTheme === "light" ? works : worksWhite}
            width={20}
            height={20}
            alt="works"
          />
          Чтобы посмотреть на мои работы — нажмите "работы".
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
          Если у вас есть предложения или вопросы — нажмите "контакты".
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
