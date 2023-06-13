import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionaries";
import Works from "@/components/works/Works";

export default async function WorksPage({
  params,
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);
  return <Works dictionary={dictionary} />;
}
