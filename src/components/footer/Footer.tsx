import LinkLocale from "../utils/LinkLocale";

interface Props {
  goToMain: string;
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
      <p className="text-slate-300">2021 | © All Rights Reserved</p>
    </footer>
  );
}
