import Table from "@comp/Table/Table";
import { Column } from "@comp/Table/util";

const TableTest = () => {
  return <Table items={items} columns={columns} />;
}

interface Person {
  name: string;
  age: number;
  gender: 'men' | 'woman';
}

const items: Person[] = [
  {
    name: 'Pert',
    age: 23,
    gender: 'men',
  },
  {
    name: 'Eva',
    age: 21,
    gender: 'woman'
  }
]

const columns: Column<Person>[] = [
  {
    key: 'name-col',
    label: 'Name',
    dataIndex: 'name',
  },
  {
    key: 'age-col',
    label: 'Age',
    dataIndex: 'age',
  },
  {
    key: 'gender-col',
    label: 'Age',
    dataIndex: 'gender',
  },
];

export default TableTest;