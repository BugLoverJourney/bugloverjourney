import { LiHTMLAttributes } from 'react';
import './List.less';

export interface Item extends LiHTMLAttributes<HTMLLIElement> {
  label: string;
  key: string;
  className?: string;
}

interface Props {
  listClassName?: string;
  itemsClass?: string;
  items: Item[];
}
const List = ({ listClassName, itemsClass, items }: Props) => {
  const listClassNameBase = listClassName ? `list ${listClassName}` : 'list';
  const itemClassNameBase = itemsClass ? `list-item ${itemsClass}` : 'list-item';

  return (
    <ul className={listClassNameBase}>
      {items.map(({ label, key, className, ...rest }) => <li {...rest} key={key} className={className ? `${itemClassNameBase} ${className}` : itemClassNameBase}>{label}</li>)}
    </ul>
  );
}

export default List;