import Link from "next/link";

interface Props {
  myWorks: string;
  hardSkillsTitle: string;
  experienceTitle: string;
  achievementsTitle: string;
  worksContent1: string;
  worksContent2: string;
  worksContent3: string;
  projects: string;
  worksContent4: string;
  worksContent5: string;
  worksListLKS: string;
  worksItem1: string;
  worksItem2: string;
  worksItem3: string;
  worksItem4: string;
  worksItem5: string;
  worksListTools: string;
  worksItem6: string;
  worksItem7: string;
  worksItem8: string;
  worksContent6: string;
  worksContent7: string;
  workstools: string;
  frontendDev: string;
  tools: string;
  gitHub: string;
  tools2: string;
  worksItem10: string;
  javaScript: string;
  typeScript: string;
  react: string;
  next: string;
  rtk: string;
  swr: string;
  worksItem9: string;
  bem: string;
  css: string;
  tools3: string;
}

export default function Works({ dictionary }: { dictionary: Props }) {
  const worksList: any = [
    { name: "LKS", link: "http://dev.littleknitsstory.com/" },
    {
      name: "Portfolio",
      link: "https://github.com/BulochkaBU/portfolio-next",
    },
    { name: "Marvel", link: "https://github.com/BulochkaBU/marvel" },
    {
      name: "Heroes",
      link: "https://github.com/BulochkaBU/hero_admin_panel_template",
    },
    { name: "AlfaDev", link: "https://bulochkabu.github.io/" },
  ];

  return (
    <section className="my-8 sm:my-12 px-6 xl:px-20 ">
      <article>
        <h2 className="sm:text-3xl text-2xl text-center lg:text-start font-bold text-green-700 dark:text-pink-500 ">
          {dictionary.myWorks}
        </h2>
        <p className="mt-2 sm:text-xl text-lg text-slate-800 dark:text-white">
          {dictionary.worksContent2}
        </p>
        <h3 className="my-2 sm:text-xl text-center text-lg text-orange-600 dark:text-orange-500 uppercase font-bold">
          {dictionary.hardSkillsTitle}
        </h3>
        <hr></hr>
        <p className="mt-2 sm:text-xl text-lg text-slate-800 dark:text-white">
          {dictionary.worksContent3}{" "}
          <strong className=" dark:text-green-500">
            {dictionary.workstools}
          </strong>
          .
        </p>

        <p className="mt-2 sm:text-xl text-lg text-slate-800 dark:text-white">
          {dictionary.worksContent4} (
          <strong className=" dark:text-green-500">{dictionary.tools}</strong>),
          {dictionary.worksContent5}{" "}
          <strong className=" dark:text-green-500">{dictionary.gitHub}</strong>.
        </p>
        <h3 className="mb-2 mt-4 sm:text-xl text-center text-lg text-orange-600 dark:text-orange-500 uppercase font-bold">
          {dictionary.experienceTitle}
        </h3>
        <hr></hr>
        <p className="mt-2 sm:text-xl text-lg text-slate-800 dark:text-white">
          {dictionary.worksContent6}
        </p>
        <p className="mt-2 sm:text-xl text-lg text-slate-800 dark:text-white">
          {dictionary.worksListLKS}
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 items-center sm:items-start sm:gap-6 md:gap-8 sm:my-5 my-2 list-disc">
          <li className="ml-6 sm:text-xl text-lg leading-7  text-slate-800 dark:text-white sm:px-2 lg:px-0 my-2 sm:my-0">
            {dictionary.worksItem1}
          </li>
          <li className="ml-6 sm:text-xl text-lg leading-7  text-slate-800 dark:text-white sm:px-2 lg:px-0 my-2 sm:my-0">
            {dictionary.worksItem2}
            <strong className=" dark:text-green-500">
              {dictionary.tools2}
            </strong>
            .
          </li>
          <li className="ml-6 sm:text-xl text-lg leading-7  text-slate-800 dark:text-white sm:px-2 lg:px-0 my-2 sm:my-0">
            {dictionary.worksItem3}
          </li>
          <li className="ml-6 sm:text-xl text-lg leading-7  text-slate-800 dark:text-white sm:px-2 lg:px-0 my-2 sm:my-0">
            {dictionary.worksItem4}
          </li>
          <li className="ml-6 sm:text-xl text-lg leading-7  text-slate-800 dark:text-white sm:px-2 lg:px-0 my-2 sm:my-0">
            {dictionary.worksItem5}
          </li>
          <li className="ml-6 sm:text-xl text-lg leading-7  text-slate-800 dark:text-white sm:px-2 lg:px-0 my-2 sm:my-0">
            {dictionary.worksItem10}
          </li>
        </ul>
        <h3 className="my-2 sm:text-xl text-center text-lg text-orange-600 dark:text-orange-500 uppercase font-bold">
          {dictionary.achievementsTitle}
        </h3>
        <hr></hr>

        <ul className="grid grid-cols-1 sm:grid-cols-2 items-center sm:items-start sm:gap-6 md:gap-8 sm:my-5 my-2 list-disc">
          <li className="ml-6 sm:text-xl text-lg leading-7  text-slate-800 dark:text-white sm:px-2 lg:px-0 my-2 sm:my-0">
            {dictionary.worksListTools}
          </li>
          <li className="ml-6 sm:text-xl text-lg leading-7  text-slate-800 dark:text-white sm:px-2 lg:px-0 my-2 sm:my-0">
            {dictionary.worksItem6}{" "}
            <strong className=" dark:text-green-500">
              {dictionary.javaScript}
            </strong>
            {dictionary.worksContent7}{" "}
            <strong className=" dark:text-green-500">
              {dictionary.typeScript}
            </strong>
            ,{dictionary.worksItem6}{" "}
            <strong className=" dark:text-green-500">{dictionary.react}</strong>
            {dictionary.worksContent7}{" "}
            <strong className=" dark:text-green-500">{dictionary.next}</strong>,
            {dictionary.worksItem6}{" "}
            <strong className=" dark:text-green-500">{dictionary.rtk}</strong>
            {dictionary.worksContent7}{" "}
            <strong className=" dark:text-green-500">{dictionary.swr}</strong>.
          </li>
          <li className="ml-6 sm:text-xl text-lg leading-7  text-slate-800 dark:text-white sm:px-2 lg:px-0 my-2 sm:my-0">
            {dictionary.worksItem7}
            <strong className=" dark:text-green-500">
              {dictionary.bem}
            </strong>, {dictionary.worksItem9}
            <strong className=" dark:text-green-500">{dictionary.css}</strong>.
          </li>
          <li className="ml-6 sm:text-xl text-lg leading-7  text-slate-800 dark:text-white sm:px-2 lg:px-0 my-2 sm:my-0">
            <strong className=" dark:text-green-500">
              {dictionary.tools3}
            </strong>{" "}
            {dictionary.worksItem8}.
          </li>
        </ul>
        <h3 className="my-2 sm:text-xl text-center text-lg text-orange-600 dark:text-orange-500 uppercase font-bold">
          {dictionary.projects}
        </h3>
        <hr></hr>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5 justify-items-center mt-10">
          {worksList.map((work: any) => (
            <Link
              key={work.name}
              href={work.link}
              className="flex w-full justify-center"
            >
              <div className="flex justify-center items-center bg-orange-200 font-bold text-lg dark:text-white dark:bg-orange-600 w-full h-12 md:w-44 rounded-2xl animate-bounce hover:animate-ping ">
                {work.name}
              </div>
            </Link>
          ))}
        </div>
      </article>
    </section>
  );
}
