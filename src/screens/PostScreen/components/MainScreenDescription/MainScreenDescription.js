// Core
import React from 'react';
// Components
import TextNode from './components/TextNode/TextNode';
// Hooks
import { useData } from './hooks/useData';

function MainScreenDescription() {
  const { data } = useData();

  return data.map((item) => {
    const { text, textIndent, id } = item;
    return (
      <TextNode key={id} textIndent={textIndent}>
        {text}
      </TextNode>
    );
  });
}

export default MainScreenDescription;
