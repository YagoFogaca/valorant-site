import { useEffect, useState } from 'react';
import { Banner } from '../../components/banner/index.jsx';
import { SectionCarousel } from '../../components/section-carousel/index.jsx';
import { Api } from '../../utils/api/index.js';

export function Home() {
  const [agents, setAgents] = useState([]);

  const findAllAgents = async () => {
    try {
      const { data } = await Api.getAllAgents();
      setAgents(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    findAllAgents();
  }, []);

  return (
    <>
      <Banner />
      <main>
        <SectionCarousel title={'agentes'} data={agents} />
      </main>
    </>
  );
}
