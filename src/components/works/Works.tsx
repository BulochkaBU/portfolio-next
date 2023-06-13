import Link from "next/link";

interface Props {
  myWorks: string;
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
    { name: "AlfaDev", link: "https://github.com/BulochkaBU/alphadev" },
  ];

  return (
    <section className="my-8 sm:my-12 px-6 xl:px-20 ">
      <h2 className="sm:text-3xl text-2xl text-center lg:text-start font-bold text-green-700 dark:text-green-500 ">
        {dictionary.myWorks}
      </h2>
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
