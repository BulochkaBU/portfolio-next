interface Props {
  welcome: string;
}

export default function Welcome({ dictionary }: { dictionary: Props }) {
  return (
    <section className="my-8 sm:my-12 px-6 xl:px-20 ">
      <h2 className="sm:text-3xl text-2xl text-center lg:text-start font-bold text-green-700 dark:text-green-500 ">
        {dictionary.welcome}
      </h2>
      <p className="mt-2 sm:mt-5 sm:text-xl text-lg leading-7  text-slate-800 dark:text-white ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati est
        nulla blanditiis, quos voluptas qui ab assumenda voluptates delectus nam
        laudantium natus dolorem nisi vitae quis, ad consequuntur eligendi ex.
      </p>
    </section>
  );
}
