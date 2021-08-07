import './App.css';
import {FC} from "react";
import Person from './components/Person';

const App: FC = () => {
  // const name: string = "Rohan";
  // const age: number = 90;
  // const employed: boolean = false;

  // const getName = (name: string): number => {
  //   if (name === "Rohan") {
  //     return 90
  //   } else {
  //     return 0
  //   }
  // };

  return (
    <div className="app">
      <Person
        name="Rohan"
        age={90}
      />
    </div>
  );
}

export default App;
