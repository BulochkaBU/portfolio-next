import LinkLocale from "../utils/LinkLocale";

interface Props {
  goToMain: string;
  lifeMotto: string;
}

export default function Footer({ dictionary }: { dictionary: Props }) {
  return (
    <footer className="mb-8 mt-12 flex items-center justify-around gap-10 flex-col sm:flex-row ">
      <nav className="hover:scale-95">
        <LinkLocale
          href="/welcome"
          className="border border-pink-600 rounded-full p-3 font-bold text-pink-600 text-xl dark:text-white dark:bg-pink-600 "
        >
          {dictionary.goToMain}
        </LinkLocale>
      </nav>
      <span className="mx-3 before:block before:absolute before:-inset-2 before:-skew-y-3 before:bg-pink-400 before:rounded-md before:shadow-lg dark:before:bg-pink-500 relative inline-block">
        <span className="relative italic text-slate-800 dark:text-white">
          {dictionary.lifeMotto}
        </span>
        ,
      </span>
    </footer>
  );
}
