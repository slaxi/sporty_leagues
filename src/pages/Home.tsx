import Title from '../components/title/Title';
import MainContent from '../components/main-content/MainContent';
import ErrorBoundary from '../components/ErrorBoundary';
import BackgroundWrapper from '../components/background-wrapper/BackgroundWrapper';

const HomePage = () => {
  return (
    <main>
      <BackgroundWrapper>
        <Title />
        <ErrorBoundary>
          <MainContent />
        </ErrorBoundary>
      </BackgroundWrapper>
    </main>
  );
};

export default HomePage;
