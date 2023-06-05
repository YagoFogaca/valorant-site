import React, { forwardRef } from 'react';
import * as C from './style.js';

export const Card = forwardRef(({ img, name }, ref) => {
  return (
    <>
      <C.Section ref={ref}>
        <C.Figure>
          <C.Img src={img} />
        </C.Figure>
        <C.Div>
          <C.P>{name}</C.P>
        </C.Div>
      </C.Section>
    </>
  );
});
