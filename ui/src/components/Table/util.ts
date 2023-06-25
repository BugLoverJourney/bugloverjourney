export interface Column<T extends object> {
  key: string;
  label: string;
  dataIndex: keyof T;
  className?: string;
  render?: (item: T) => JSX.Element;
};