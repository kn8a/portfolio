import React from 'react';
import { useColorModeValue } from '@chakra-ui/react';

function Background() {
  const squeres = useColorModeValue(
    'rgba(0, 0, 0, 0.05)',
    'rgba(0, 0, 0, 0.3)'
  );
  return (
    <ul class="circles">
      <li style={{ background: squeres }}></li>
      <li style={{ background: squeres }}></li>
      <li style={{ background: squeres }}></li>
      <li style={{ background: squeres }}></li>
      <li style={{ background: squeres }}></li>
      <li style={{ background: squeres }}></li>
      <li style={{ background: squeres }}></li>
      <li style={{ background: squeres }}></li>
      <li style={{ background: squeres }}></li>
      <li style={{ background: squeres }}></li>
    </ul>
  );
}

export default Background;
