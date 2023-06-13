import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionaries";
import About from "@/components/about/About";

export default async function WorksPage({
  params,
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);
  return <About dictionary={dictionary} />;
}
