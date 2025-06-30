import CourseGoalList from './components/CourseGoalList';
import NewGoal from './components/newGoal';
import Header from './components/Header';
import goalsImg from './assets/goals.jpg';
import { useState } from 'react';

export interface CourseGoal {
  title: string;
  description: string;
  id: number;
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);
  function addGoalHandler(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        title: goal,
        description: summary,
        id: Math.random(),
      };
      return [...prevGoals, newGoal];
    });
  }

  function deleteGoalHandler(id: number) {
    setGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'Goals image' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={addGoalHandler}  />
      <CourseGoalList goals={goals} onDeleteGoal={deleteGoalHandler} />
    </main>
  );
}
