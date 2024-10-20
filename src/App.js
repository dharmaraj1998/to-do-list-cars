import CarList from "./component/CarList";
import CarForm from "./component/CarForm";
import CarSearch from "./component/CarSearch";
import CarValue from "./component/CarValue";
function App() {
  return (
    <div>
      <CarForm/>
      <CarList/>
      <CarSearch/>
      <CarValue/>
    </div>
  );
}

export default App;
