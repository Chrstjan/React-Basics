import burgerPic from "./assets/food/burger.jpg";

function Card() {
  return (
    <div className="card">
      <figure className="card-figure">
        <img src={burgerPic} alt="food card"></img>

        <figcaption>
          <header>
            <h2>Food Card</h2>
          </header>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </figcaption>
      </figure>
    </div>
  );
}

export default Card;
