import Welcome from "@/components/welcome/Welcome";
import { getDictionary } from "@/get-dictionaries";
import { Locale } from "@/i18n-config";

export default async function WelcomePage({
  params,
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);
  return <Welcome dictionary={dictionary} />;
}
