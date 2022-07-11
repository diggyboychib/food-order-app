import Header from "./Components/Header/Header";
import Dishes from "./Components/Dishes";
import styles from "./App.module.css";
import { foodContext } from "./Components/Context/context";
const food = [
  { name: "Sushi", details: "Fish and veggies", amount: 200 },
  { name: "Burger", details: "Pav and veggies", amount: 150 },
  { name: "Green Bowl", details: "Meat", amount: 500 },
  { name: "Fish Curry", details: "Fish and curry", amount: 250 },
  { name: "Chicken lollipop", details: "chicken sauce", amount: 100 },
];

function App() {
  const [myCart, setMyCart] = useState([]);
  return (
    <div className="App">
      <foodContext.Provider value={{ myCart, setMyCart }}>
        <Header />
        <div className={styles["dishes-container"]}>
          {food.map((obj) => (
            <Dishes name={obj.name} details={obj.details} amount={obj.amount} />
          ))}
        </div>
      </foodContext.Provider>
    </div>
  );
}

export default App;
