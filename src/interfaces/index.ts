export interface Task {
  id: number | string;
  title: string;
  hasFinished: boolean;
  groupOwner: number;
  createAt: string;
  updatedAt: string;
}

export interface Group {
  id: number | string;
  title: string;
  createAt: string;
  updatedAt: string;
  tasks: Task[];
}
