import { Montserrat } from "next/font/google";
import { Locale, i18n } from "@/i18n-config";
import { getDictionary } from "@/get-dictionaries";
import "@/styles/globals.scss";

const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);
  return {
    metadataBase: new URL("https://prudinskaya.com/"),
    title: dictionary.title,
    description: dictionary.description,
    openGraph: {
      title: dictionary.title,
      description: dictionary.description,
      type: "website",
      siteName: "Anastasiia Prudinskaya is a Frontend-Developer",
      url: "https://prudinskaya.com/",
      images: "/icon.png",
      icons: {
        icon: "/icon.png",
      },
    },
    twitter: {
      title: dictionary.title,
      description: dictionary.description,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body className={`${montserrat.className} dark:bg-slate-900`}>
        {children}
      </body>
    </html>
  );
}

export function generateStaticParams() {
  const locales = i18n.locales.map((locale) => ({ lang: locale }));

  return locales;
}
