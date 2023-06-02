import { Banner } from '../../components/banner/index.jsx';
import { SectionCarousel } from '../../components/section-carousel/index.jsx';

export function Home() {
  return (
    <>
      <Banner />
      <main>
        <SectionCarousel />
      </main>
    </>
  );
}
