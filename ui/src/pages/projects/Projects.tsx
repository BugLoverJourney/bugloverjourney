import { Suspense, lazy, useEffect, useState } from "react";
import { getApi } from '../../api/calls';
import { Notification, NotifyTypes } from '@/api/dto/basicResponse.dto';
import { NOTIFY_TYPES } from '@const/basicResponse.constants';
import useGet from '@hook/useGet';
import ArrowList from "@/parts/ArrowList";
import { Item } from "@comp/List";
import './Projects.less';

const Projects = () => {
  // const [data, setData] = useGet("/api/", { type: NOTIFY_TYPES.ERROR, shortMsg: "neee neee" }, [], {});
  const [project, setProject] = useState<ProjectType>('list');

  const handleClick = (key: string) => setProject(key as ProjectType);

  return <>
    <h1>Projects</h1>
    <div className='main-projects-container'>
      <ArrowList listItems={items} onClick={handleClick} style={{ minWidth: '12em' }} />
      <div className='right-side-wrapper'>
        <Suspense fallback={<div>Loading...</div>}>
          <ProjectComponent project={project} />
        </Suspense>
      </div>
    </div>
  </>;
};

const ProjectComponent = ({ project }: { project: ProjectType }) => {
  if (!PROJECTS[project])
    return <InProgress />;

  const Project = PROJECTS[project as ProjectType];
  return <Project />;
};

const PROJECT_TYPES = {
  table: 'table',
  list: 'list',
  enumInfo: 'enum-info',
  reduxInfo: 'redux-info',
  cssInfo: 'css-info',
} as const;

type ProjectType = typeof PROJECT_TYPES[keyof typeof PROJECT_TYPES];

const InProgress = () => (<div>Project in progress. Please have patience.</div>);

const PROJECTS = {
  [PROJECT_TYPES.table]: lazy(() => import('@/pages/projects/TableTest')),
  [PROJECT_TYPES.list]: InProgress,
  [PROJECT_TYPES.enumInfo]: InProgress,
  [PROJECT_TYPES.reduxInfo]: InProgress,
  [PROJECT_TYPES.cssInfo]: InProgress,
} as const;

type ProjectItem = Omit<Item, 'key'> & { key: ProjectType };

const items: ProjectItem[] = [
  { label: 'List arrow select', key: PROJECT_TYPES.list, onClick: () => { console.log('agaa'); } },
  { label: 'Table comp', key: PROJECT_TYPES.table },
  { label: 'CSS Masters', key: PROJECT_TYPES.cssInfo },
  { label: 'TypeScript ENUMs', key: PROJECT_TYPES.enumInfo },
  { label: 'Redux Tutorial', key: PROJECT_TYPES.reduxInfo },
];

export default Projects;