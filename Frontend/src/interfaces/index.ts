type GroupTitle = {
  title: string;
};

export interface EditableTask {
  title: string;
  limitTime: string;
  groupOwner: GroupTitle;
}

export interface Task {
  id: number | string;
  title: string;
  limitTime: string;
  hasFinished: boolean;
  groupOwner: GroupTitle;
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
