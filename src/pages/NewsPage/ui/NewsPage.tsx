import { useTranslation } from "react-i18next";

const NewsPage = () => {
  const { t } = useTranslation("main");
  return (
    <div>
      {t("новости")}
    </div>
  );
};

export default NewsPage;
