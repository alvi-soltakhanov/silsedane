import { useTranslation } from "react-i18next";

const DictionaryPage = () => {
  const { t } = useTranslation('dictionary');
  return (
    <div>
      {t("cловарь")}
    </div>
  )
};

export default DictionaryPage;
