interface Props {
  about: string;
}

export default function About({ dictionary }: { dictionary: Props }) {
  return (
    <section className="my-8 sm:my-12 px-6 xl:px-20 ">
      <h2 className="sm:text-3xl text-2xl text-center lg:text-start font-bold text-green-700 dark:text-green-500 ">
        {dictionary.about}
      </h2>

      <p className="my-2 sm:text-xl text-center text-lg text-slate-800 dark:text-white font-bold">
        Софт скиллы
      </p>
      <hr></hr>
      <ul className="grid grid-cols-1 sm:grid-cols-2 items-center sm:items-start sm:gap-6 md:gap-8 sm:my-5 my-2 list-disc">
        <li className="ml-6  sm:text-xl text-lg text-slate-800 dark:text-white sm:px-2 lg:px-0 ">
          Я люблю баланс ⚖️, возможно, на это повлияло мое образование
          бухгалтера. 😁
        </li>
        <li className="ml-6 sm:ml-0 sm:text-xl text-lg text-slate-800 dark:text-white sm:px-2 lg:px-0 ">
          В работе и в хобби я усидчива и целеустремленна, пока не увижу
          результат 🏆, не успокоюсь, буду делать и делать ⛏⛏.
        </li>
        <li className=" ml-6 sm:text-xl text-lg text-slate-800 dark:text-white sm:px-2 lg:px-0">
          Мне нравится работать, как в команде 👨‍💻👨‍💻, так и самостоятельно👩‍💻.
        </li>
        <li className=" ml-6 sm:ml-0  sm:text-xl text-lg text-slate-800 dark:text-white sm:px-2 lg:px-0 ">
          За годы трудовой деятельности на разных должностях научилась
          адаптироваться, брать на себя ответственность и принимать решения.
        </li>
      </ul>

      <p className="my-2 sm:text-xl text-center text-lg text-slate-800 dark:text-white  font-bold">
        Хобби
      </p>
      <hr></hr>
      <p className="mt-2 sm:mt-5 sm:text-xl text-lg text-slate-800 dark:text-white ">
        Активный отдых? Творческое рукоделие? Путешествие? Прогулка с собакой?
      </p>
      <p className="mt-2 sm:text-xl text-lg text-slate-800 dark:text-white">
        Или остаться дома, заказaть пиццу и посмотреть фильм/сериал?
      </p>
      <p className="mt-2 sm:text-xl text-lg text-slate-800 dark:text-white">
        На все вопросы, я отвечу <strong> "Конечно, погнали!" 🚀</strong>.
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 items-center sm:items-start sm:gap-6 md:gap-8 sm:my-5 my-2 list-disc">
        <li className="ml-6  sm:text-xl text-lg text-slate-800 dark:text-white sm:px-2 lg:px-0 ">
          Я хожу в походы 🏕, катаюсь на велосипеде 🚲, плаваю в бассейне 🤿.
        </li>
        <li className="ml-6 sm:ml-0 sm:text-xl text-lg text-slate-800 dark:text-white sm:px-2 lg:px-0 ">
          Мне нравится вышивать крестиком 🪡, рисовать картины по номерам 🎨,
          плести из бисера украшения 💍.
        </li>
        <li className=" ml-6 sm:text-xl text-lg text-slate-800 dark:text-white sm:px-2 lg:px-0">
          С большим удовольствием полечу ✈️ в новую страну, отправлюсь в
          автопутешествие 🚙 или на прогулку с любимой собакой 🐕.
        </li>
        <li className=" ml-6 sm:ml-0  sm:text-xl text-lg text-slate-800 dark:text-white sm:px-2 lg:px-0 ">
          Но и не менее люблю оставаться дома 🏠, чтобы посмотреть 📺
          фильм/сериал, поиграть в компьютерные игры 🎮 или просто ничего не
          делать 🛋.
        </li>
      </ul>
    </section>
  );
}
