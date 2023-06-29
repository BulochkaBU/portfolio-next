"use client";
import Link from "next/link";
import classes from "./contacts.module.scss";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/store/hooks";

interface Props {
  contacts: string;
  contactsContent: string;
  contactsText: string;
  contactsText2: string;
  contactsText3: string;
  contactsText4: string;
  linkedIn: string;
  gitHub: string;
  telegram: string;
}

export default function Contacts({ dictionary }: { dictionary: Props }) {
  const [bgColorIcon, setBgColorIcon] = useState<string>("#000");
  const colorTheme = useAppSelector((state) => state.themeAppSlice.themeColor);

  useEffect(() => {
    if (colorTheme === "light") {
      setBgColorIcon("#000");
    } else {
      setBgColorIcon("#fff");
    }
  }, [colorTheme]);

  return (
    <section className="my-8 sm:my-12 px-6 xl:px-20 ">
      <h2 className="sm:text-3xl text-2xl text-center lg:text-start font-bold text-green-700 dark:text-pink-500 ">
        {dictionary.contacts}
      </h2>
      <p className="mt-2 sm:mt-5 sm:text-xl text-lg text-slate-800 dark:text-white  sm:px-2 lg:px-0">
        {dictionary.contactsText}{" "}
        <strong className=" dark:text-green-500">{dictionary.linkedIn}</strong>{" "}
        {dictionary.contactsText2}{" "}
        <strong className=" dark:text-green-500">{dictionary.telegram}</strong>{" "}
        {dictionary.contactsText3}{" "}
        <strong className=" dark:text-green-500">{dictionary.gitHub}</strong>,
        {dictionary.contactsText4}
      </p>
      <p className="mt-2 sm:text-xl text-lg text-slate-800 dark:text-white  sm:px-2 lg:px-0">
        {dictionary.contactsContent}
      </p>
      <div className="my-8 mx-4 flex justify-center items-center gap-12 max-[400px]:gap-10 dark">
        <Link
          href="https://github.com/BulochkaBU"
          target="_blank"
          rel="noreferrer"
          className={`${classes.hoveredIcon} p-3 animate-bounce hover:animate-ping`}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0C4.475 0 0 4.36167 0 9.74107C0 14.0457 2.865 17.6962 6.8375 18.9832C7.3375 19.0749 7.52083 18.7734 7.52083 18.5148C7.52083 18.2835 7.5125 17.6706 7.50833 16.8585C4.72667 17.4459 4.14 15.5517 4.14 15.5517C3.685 14.4274 3.0275 14.1267 3.0275 14.1267C2.12167 13.5228 3.0975 13.5352 3.0975 13.5352C4.10167 13.603 4.62917 14.5389 4.62917 14.5389C5.52083 16.0283 6.97 15.5979 7.54167 15.3493C7.63167 14.719 7.88917 14.2903 8.175 14.0466C5.95417 13.8029 3.62 12.9652 3.62 9.23304C3.62 8.16988 4.0075 7.30085 4.64917 6.61934C4.53667 6.37317 4.19917 5.3827 4.73667 4.04116C4.73667 4.04116 5.57417 3.78012 7.48667 5.03988C8.28667 4.82345 9.13667 4.71606 9.98667 4.7111C10.8367 4.71606 11.6867 4.82345 12.4867 5.03988C14.3867 3.78012 15.2242 4.04116 15.2242 4.04116C15.7617 5.3827 15.4242 6.37317 15.3242 6.61934C15.9617 7.30085 16.3492 8.16988 16.3492 9.23304C16.3492 12.9752 14.0117 13.7987 11.7867 14.0383C12.1367 14.3307 12.4617 14.928 12.4617 15.8408C12.4617 17.1444 12.4492 18.1918 12.4492 18.5082C12.4492 18.7635 12.6242 19.0683 13.1367 18.9708C17.1375 17.692 20 14.0391 20 9.74107C20 4.36167 15.5225 0 10 0Z"
              fill={bgColorIcon}
            />
          </svg>
        </Link>

        <Link
          href="https://www.linkedin.com/in/anastasia-prudinskaya"
          target="_blank"
          rel="noreferrer"
          className={`${classes.hoveredIcon} p-3 animate-bounce hover:animate-ping`}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 256 256"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
          >
            <path
              d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"
              fill={bgColorIcon}
            ></path>
          </svg>
        </Link>

        <Link
          href="https://tlgg.ru/u1011"
          target="_blank"
          rel="noreferrer"
          className={`${classes.hoveredIcon} p-3 animate-bounce hover:animate-ping`}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 30C23.2863 30 30 23.2863 30 15C30 6.71375 23.2863 0 15 0C6.71375 0 0 6.71375 0 15C0 23.2863 6.71375 30 15 30ZM6.86375 14.675L21.3263 9.09875C21.9975 8.85625 22.5837 9.2625 22.3662 10.2775L22.3675 10.2762L19.905 21.8775C19.7225 22.7 19.2337 22.9 18.55 22.5125L14.8 19.7487L12.9912 21.4913C12.7912 21.6913 12.6225 21.86 12.235 21.86L12.5013 18.0438L19.4513 11.765C19.7537 11.4987 19.3837 11.3488 18.985 11.6138L10.3963 17.0212L6.69375 15.8663C5.89 15.6112 5.8725 15.0625 6.86375 14.675Z"
              fill={bgColorIcon}
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
