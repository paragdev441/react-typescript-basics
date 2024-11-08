import { type FC, type PropsWithChildren } from "react";

/*
    Different ways to define Types:-

    1. 
        type CourseGoalProps = {
            title: string,
            children: ReactNode
        }

    OR

    2.
        type CourseGoalProps = PropsWithChildren<{ title: string}>;
*/

/*
    Different ways to assign types to a Function:-

        1. 
            const CourseGoal = ({ title, children }: CourseGoalProps) => { ... }

        OR

        2.
            const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => { ... }

*/

type CourseGoalProps = PropsWithChildren<{ 
    id: number
    title: string,
    onDelete: (id: number) => void
}>;

const CourseGoal: FC<CourseGoalProps> = ({ id, title, children, onDelete }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>DELETE</button>
    </article>
  );
}

export default CourseGoal;