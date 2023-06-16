import Link from "next/link";

interface Props {
  myWorks: string;
  worksContent1: string;
  worksContent2: string;
  worksContent3: string;
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
}

export default function Works({ dictionary }: { dictionary: Props }) {
  const worksList: any = [
    { name: "LKS", link: "https://github.com/littleknitsstory/frontend" },
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
      <h2 className="sm:text-3xl text-2xl text-center lg:text-start font-bold text-green-700 dark:text-green-500 ">
        {dictionary.myWorks}
      </h2>
      <p className="mt-2 sm:text-xl text-lg text-slate-800 dark:text-white  sm:px-2 lg:px-0">
        {dictionary.worksContent1}
      </p>
      <p className="mt-2 sm:text-xl text-lg text-slate-800 dark:text-white  sm:px-2 lg:px-0">
        {dictionary.worksContent2}
      </p>
      <p className="mt-2 sm:text-xl text-lg text-slate-800 dark:text-white  sm:px-2 lg:px-0">
        {dictionary.worksContent3}
      </p>
      <p className="mt-2 sm:text-xl text-lg text-slate-800 dark:text-white  sm:px-2 lg:px-0">
        {dictionary.worksContent4}
      </p>
      <p className="mt-2 sm:text-xl text-lg text-slate-800 dark:text-white  sm:px-2 lg:px-0">
        {dictionary.worksContent5}
      </p>
      <ul className="list-disc mt-2 sm:text-xl text-lg text-slate-800 dark:text-white  sm:px-2 lg:px-0 ">
        {dictionary.worksListLKS}
        <li className="ml-10 leading-8 mt-2">{dictionary.worksItem1}</li>
        <li className="ml-10 leading-8">{dictionary.worksItem2}</li>
        <li className="ml-10 leading-8">{dictionary.worksItem3}</li>
        <li className="ml-10 leading-8">{dictionary.worksItem4}</li>
        <li className="ml-10 leading-8">{dictionary.worksItem5}</li>
      </ul>
      <ul className="list-disc mt-2 sm:text-xl text-lg text-slate-800 dark:text-white  sm:px-2 lg:px-0 ">
        {dictionary.worksListTools}
        <li className="ml-10 leading-8 mt-2">{dictionary.worksItem6}</li>
        <li className="ml-10 leading-8">{dictionary.worksItem7}</li>
        <li className="ml-10 leading-8">{dictionary.worksItem8}</li>
      </ul>
      <p className="mt-2 sm:text-xl text-lg text-slate-800 dark:text-white  sm:px-2 lg:px-0">
        {dictionary.worksContent6}
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5 justify-items-center mt-10">
        {worksList.map((work: any) => (
          <>
            <Link
              key={work.name}
              href={work.link}
              className="flex w-full justify-center"
            >
              <div className="flex justify-center items-center bg-orange-200 font-bold text-lg dark:text-white dark:bg-orange-600 w-full h-12 md:w-44 rounded-2xl animate-bounce hover:animate-ping ">
                {work.name}
              </div>
            </Link>
          </>
        ))}
      </div>
    </section>
  );
}
