import { useRef } from 'react';
import { Section } from '../../style-components/section/index.js';
import { Card } from '../../components/card/index.jsx';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import * as C from './style.js';

export function SectionCarousel({ title, data }) {
  const carousel = useRef(null);
  const card = useRef(null);
  const handleLeft = event => {
    event.preventDefault();
    console.log(card.current.offsetWidth);
    // carousel.current.scrollLeft -= carousel.current.offsetWidth;
    const offsetWidth = card.current.offsetWidth + 44;
    carousel.current.scrollLeft -= offsetWidth;
  };

  const handleRight = event => {
    event.preventDefault();
    console.log(card.current.offsetWidth);
    // carousel.current.scrollLeft += carousel.current.offsetWidth;
    const offsetWidth = card.current.offsetWidth + 44;
    carousel.current.scrollLeft += offsetWidth;
  };

  return (
    <>
      <Section>
        <C.Div>
          <C.H2>{title}</C.H2>
        </C.Div>
        <C.Article ref={carousel}>
          {data.map((agent, index) => {
            return (
              <Card
                ref={index === 0 ? card : null}
                key={index}
                img={agent.fullPortraitV2}
                name={agent.displayName}
              />
            );
          })}
          <C.ButtonLeft onClick={handleLeft}>
            <FaAngleLeft />
          </C.ButtonLeft>
          <C.ButtonRight onClick={handleRight}>
            <FaAngleRight />
          </C.ButtonRight>
        </C.Article>
      </Section>
    </>
  );
}
