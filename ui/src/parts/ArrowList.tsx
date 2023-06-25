import List, { Item } from '@comp/List';
import useDebounce from '@hook/useDebounce';
import { useState } from 'react';
import './ArrowList.less';

const ArrowList = () => {
  const [arrowPosition, setArrowPosition] = useState(0);
  const [activeArrowPosition, setActiveArrowPosition] = useState(0);

  const handlerEnter = (position: number) => () => {
    setArrowPosition(position)
  };

  const handlerLeave = () => {
    setArrowPosition(activeArrowPosition);
  };

  const handlerClick = (position: number) => () => {
    setActiveArrowPosition(position)
  };

  const items: Item[] = [
    { label: "List arrow select", key: 'a' },
    { label: "Flipping card", key: 'b' },
    { label: "CSS Masters", key: 'c' },
    { label: "TypeScript ENUMs", key: 'd' },
    { label: "Redux Tutorial", key: 'e' },
  ];

  items.forEach((item, index) => {
    item.onMouseLeave = handlerLeave;
    item.onMouseEnter = handlerEnter(index);
    item.onClick = handlerClick(index);

    if (index === arrowPosition)
      item.className = "item-active";
  });

  return (
    <div className='arrow-list-container'>
      <div className='arrow' style={{ transform: `translateY(${arrowPosition * 1.2}em) rotate(45deg)` }} />
      <List items={items} />
    </div>
  );

};

export default ArrowList;