import Card from "./Card";
import User from "./User";

const App = () => {
  return (
    <div>
      <User userName={"Zayn"} age={24} isStudent={false} />
      <Card>
        <h2>Profile Card</h2>
        <p>This paragraph and header are passed via the children prop!</p>
        <button>Click Me</button>
      </Card>
    </div>
  )
}

export default App;
