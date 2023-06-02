import * as C from './style.js';

export function Banner() {
  return (
    <C.Section>
      <C.Figure>
        <C.Img src="/banner.jpg" alt="Imagem ilustrativa do jogo" />
      </C.Figure>
      <C.Article>
        <C.H4>Um jogo de tiro tático 5x5 com personagens originais</C.H4>
        <C.P>Site feito por um fã</C.P>
      </C.Article>
    </C.Section>
  );
}
