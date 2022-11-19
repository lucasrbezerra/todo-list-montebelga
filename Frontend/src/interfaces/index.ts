type GroupTitle = {
  title: string;
};

export interface EditableTask {
  title: string;
  limitTime: string;
  GroupId: GroupTitle;
}

export interface Task {
  id: number | string;
  title: string;
  limitTime: string;
  hasFinished: boolean;
  GroupId: GroupTitle;
  createdAt: string;
  updatedAt: string;
}

export interface Group {
  id: number | string;
  title: string;
  createdAt: string;
  updatedAt: string;
  tasks: Task[];
}
