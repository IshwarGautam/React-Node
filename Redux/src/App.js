import store from "./store/configureStore";
import { addStudent, removeStudent } from "./store/student";
import { addCollege } from "./store/college";

function App() {
  // add student
  store.dispatch(addStudent({ name: "Ishwar" }));

  // add college
  store.dispatch(addCollege({ name: "BMC college", location: "Butwal" }));

  // remove student
  store.dispatch(removeStudent({ id: 1 }));

  return <div className="App">Redux</div>;
}

export default App;
