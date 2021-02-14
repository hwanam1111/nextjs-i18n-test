import useTranslation from 'next-translate/useTranslation';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('common:hello')}
    </div>
  );
}

export default Home;