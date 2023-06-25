import List, { Item } from '@comp/List';
import useDebounce from '@hook/useDebounce';
import { useCallback, useEffect, useState } from 'react';
import './ArrowList.less';

interface Props {
  listItems: Item[];
}

const ArrowList = ({ listItems }: Props) => {
  const [arrowPosition, setArrowPosition] = useState(0);
  const [activeArrowPosition, setActiveArrowPosition] = useState(0);

  const itemsForList = useCallback((items: Item[]): Item[] => {
    return items.map((item, index) => {
      const itm = { ...item };
      itm.onMouseLeave = (e) => {
        setArrowPosition(activeArrowPosition);
        if (item.onMouseLeave)
          item.onMouseLeave(e);
      };

      itm.onMouseEnter = (e) => {
        setArrowPosition(index);
        if (item.onMouseEnter)
          item.onMouseEnter(e);
      };

      itm.onClick = (e) => {
        setActiveArrowPosition(index);
        if (item.onClick)
          item.onClick(e);
      };

      if (index === arrowPosition)
        itm.className = "item-active";

      return itm;
    });
  }, [listItems, arrowPosition, activeArrowPosition]);

  return (
    <div className='arrow-list-container'>
      <div className='arrow' style={{ transform: `translateY(${arrowPosition * 1.2}em) rotate(45deg)` }} />
      <List items={itemsForList(listItems)} />
    </div>
  );
};

export default ArrowList;