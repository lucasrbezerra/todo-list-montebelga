export interface CreateTask {
  title: string;
  limitTime: string;
  GroupId: number;
}

export interface CreateGroup {
  title: string;
}

export interface Task {
  TaskId: number;
  title: string;
  limitTime: string;
  hasFinished: boolean;
  GroupId: number;
  createdAt: string;
  updatedAt: string;
}

export interface Group {
  GroupId: number;
  title: string;
  createdAt: string;
  updatedAt: string;
}
