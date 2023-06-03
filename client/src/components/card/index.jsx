import * as C from './style.js';

export function Card({ img, name }) {
  return (
    <>
      <C.Section>
        <C.Figure>
          <C.Img src={img} />
        </C.Figure>
        <C.Div>
          <C.P>{name}</C.P>
        </C.Div>
      </C.Section>
    </>
  );
}
