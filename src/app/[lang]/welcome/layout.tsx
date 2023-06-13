import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionaries";
import CardsMenu from "@/components/cards-menu/CardsMenu";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ProviderWrapper from "@/components/provider-wrapper/ProviderWrapper";

export default async function GeneralLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);
  return (
    <ProviderWrapper>
      <main className="lg:container min-vh-100 mx-auto">
        <Header dictionary={dictionary} lang={params.lang} />
        <CardsMenu dictionary={dictionary} />
        {children}
        <Footer dictionary={dictionary} />
      </main>
    </ProviderWrapper>
  );
}
