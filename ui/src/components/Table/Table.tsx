import { Column } from "./util";

interface Props<T extends object> {
  items: T[];
  columns: Column<T>[];
}
const Table = <T extends object>({ items, columns }: Props<T>) => {

  return <div>'table'</div>;
}

export default Table; 