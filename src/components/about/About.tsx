interface Props {
  about: string;
  myName: string;
  softSkillsTitle: string;
  softSkills1: string;
  softSkills2: string;
  softSkills3: string;
  softSkills4: string;
  hobbyTitle: string;
  hobbyContent1: string;
  hobbyContent2: string;
  hobbyContent3: string;
  hobbyContent4: string;
  hobby1: string;
  hobby2: string;
  hobby3: string;
  hobby4: string;
  worksContent1: string;
  frontendDev: string;
}

export default function About({ dictionary }: { dictionary: Props }) {
  return (
    <section className="my-8 sm:my-12 px-6 xl:px-20">
      <article>
        <h2
          className="sm:text-3xl text-2xl text-center lg:text-start font-bold text-green-700 dark:text-pink-500 "
          id="about"
        >
          {dictionary.about}
        </h2>

        <p className="mt-2 sm:mt-5 sm:text-xl text-lg text-slate-800 dark:text-white  sm:px-2 lg:px-0 ">
          {dictionary.myName}
        </p>
        <p className="mt-2 sm:text-xl text-lg text-slate-800 dark:text-white">
          {dictionary.worksContent1} <strong className=" dark:text-green-500">{dictionary.frontendDev}</strong>.
        </p>

        <h3 className="my-2 sm:text-xl text-center text-lg text-orange-600 dark:text-orange-500 uppercase font-bold">
          {dictionary.softSkillsTitle}
        </h3>
        <hr></hr>
        <ul className="grid grid-cols-1 sm:grid-cols-2 items-center sm:items-start sm:gap-6 md:gap-8 sm:my-5 my-2 list-disc">
          <li className="ml-6 sm:text-xl text-lg leading-7  text-slate-800 dark:text-white sm:px-2 lg:px-0 my-2 sm:my-0">
            {dictionary.softSkills1}
          </li>
          <li className="ml-6 sm:text-xl text-lg leading-7  text-slate-800 dark:text-white sm:px-2 lg:px-0 my-2 sm:my-0">
            {dictionary.softSkills2}
          </li>
          <li className=" ml-6 sm:text-xl text-lg text-slate-800 dark:text-white sm:px-2 lg:px-0 my-2 sm:my-0">
            {dictionary.softSkills3}
          </li>
          <li className="ml-6 sm:text-xl text-lg leading-7  text-slate-800 dark:text-white sm:px-2 lg:px-0 my-2 sm:my-0">
            {dictionary.softSkills4}
          </li>
        </ul>

        <h3 className="my-2 sm:text-xl text-center text-lg text-orange-600 dark:text-orange-500 uppercase font-bold">
          {dictionary.hobbyTitle}
        </h3>
        <hr></hr>
        <p className="mt-2 sm:mt-5 sm:text-xl text-lg text-slate-800 dark:text-white ">{dictionary.hobbyContent1}</p>
        <p className="mt-2 sm:text-xl text-lg text-slate-800 dark:text-white">{dictionary.hobbyContent2}</p>
        <p className="mt-2 sm:text-xl text-lg text-slate-800 dark:text-white">
          {dictionary.hobbyContent3}
          <strong className=" dark:text-orange-300">"{dictionary.hobbyContent4}"🚀</strong>.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 items-center sm:items-start sm:gap-6 md:gap-8 sm:my-5 my-2 list-disc">
          <li className="ml-6 sm:text-xl text-lg leading-7  text-slate-800 dark:text-white sm:px-2 lg:px-0 my-2 sm:my-0">
            {dictionary.hobby1}
          </li>
          <li className="ml-6 sm:text-xl text-lg leading-7  text-slate-800 dark:text-white sm:px-2 lg:px-0 my-2 sm:my-0">
            {dictionary.hobby2}
          </li>
          <li className="ml-6 sm:text-xl text-lg leading-7  text-slate-800 dark:text-white sm:px-2 lg:px-0 my-2 sm:my-0">
            {dictionary.hobby3}
          </li>
          <li className="ml-6 sm:text-xl text-lg leading-7  text-slate-800 dark:text-white sm:px-2 lg:px-0 my-2 sm:my-0">
            {dictionary.hobby4}
          </li>
        </ul>
      </article>
    </section>
  );
}
