import LinkLocale from "../utils/LinkLocale";
import classes from "./card-menu.module.scss";
import me from "../../assets/images/me.jpg";
import phone from "../../assets/images/phone.jpg";
import works from "../../assets/images/works.png";

interface Props {
  about: string;
  myWorks: string;
  contacts: string;
}
export default function CardsMenu({ dictionary }: { dictionary: Props }) {
  return (
    <nav
      className={`${classes.cardGrid} grid grid-cols-1 gap-6 lg:grid-cols-3 justify-items-center  mx-4 mt-8 sm:mt-12`}
    >
      <LinkLocale
        className={`${classes.card} relative block w-full  xl:w-80`}
        href="/welcome/about"
      >
        <div
          className={`${classes.card__background} rounded-2xl w-full bg-cover bg-top lg:bg-center transform origin-center scale-100 translate-z-0 transition duration-200 ease-linear`}
          style={{ backgroundImage: `url(${me.src})` }}
        ></div>
        <h3 className="absolute left-3 bottom-2  text-white text-bold text-3xl p-2 hover:text-pink-600 ">
          {dictionary.about}
        </h3>
      </LinkLocale>

      <LinkLocale
        className={`${classes.card} relative block w-full xl:w-80`}
        href="/welcome/works"
      >
        <div
          className={`${classes.card__background} rounded-2xl  w-full bg-cover bg-center transform origin-center scale-100 translate-z-0 transition duration-200 ease-linear `}
          style={{ backgroundImage: `url(${works.src})` }}
        ></div>
        <h3 className="absolute left-3 bottom-2 text-white text-bold text-3xl p-2 hover:text-pink-600">
          {dictionary.myWorks}
        </h3>
      </LinkLocale>

      <LinkLocale
        className={`${classes.card} relative block w-full  xl:w-80`}
        href="/welcome/contacts"
      >
        <div
          className={`${classes.card__background} rounded-2xl  w-full bg-cover bg-center  transform origin-center scale-100 translate-z-0 transition duration-200 ease-linear `}
          style={{ backgroundImage: `url(${phone.src})` }}
        ></div>
        <h3 className="absolute left-3 bottom-2 text-white text-bold text-3xl p-2 hover:text-pink-600">
          {dictionary.contacts}
        </h3>
      </LinkLocale>
    </nav>
  );
}
