import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionaries";
import Contacts from "@/components/contacts/contacts";

export default async function ContactsPage({
  params,
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);
  return <Contacts dictionary={dictionary} />;
}
