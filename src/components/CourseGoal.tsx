import { ReactNode } from 'react';

interface CourseGoalProps {
  id: number;
  title: string;
  children: ReactNode;
  onDelete: (id: number) => void;
}

export default function CourseGoal({
  title,
  children,
  id,
  onDelete,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}
