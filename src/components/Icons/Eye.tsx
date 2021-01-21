import React from 'react';
import Svg from './Svg';

export default function Eye({ className }: any) {
  return (
    <Svg className={className}>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </Svg>
  );
}
