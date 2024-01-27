import Header from "./Header.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Students from "./Students.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <Food></Food>
      <Card></Card>
      <Students
        name="Spongebob Squarepants"
        age={30}
        isStudent={true}
      ></Students>
      <Students name="Patrick Starfish" age={42} isStudent={false}></Students>
      <Students name="Squidward" age={50} isStudent={false}></Students>
      <Students name="Sandy" age={27} isStudent={true}></Students>
      <Students name="Joe"></Students>
      <Footer></Footer>
    </>
  );
}

export default App;
