import { useState } from 'react';
import * as C from './style.js';

export function Header() {
  const [active, setActive] = useState(false);
  const handleMenu = () => {
    setActive(!active);
  };

  return (
    <C.Header>
      <C.Img src="/logo.png" />
      <C.Nav>
        <C.Ul>
          <C.Li>Agentes</C.Li>
          <C.Li>Mapas</C.Li>
          <C.Li>Armas</C.Li>
        </C.Ul>
      </C.Nav>

      <C.NavMobile>
        <C.BtnLines onClick={handleMenu}>
          <C.Line className={active ? 'line-active one' : ''}></C.Line>
          <C.Line className={active ? 'line-disabled' : ''}></C.Line>
          <C.Line className={active ? 'line-active two' : ''}></C.Line>
        </C.BtnLines>
        <C.UlMobile className={active ? 'active' : ''}>
          <C.Li>Agentes</C.Li>
          <C.Li>Mapas</C.Li>
          <C.Li>Armas</C.Li>
        </C.UlMobile>
      </C.NavMobile>
    </C.Header>
  );
}
