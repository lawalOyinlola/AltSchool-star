import StarRating from "./StarRating";

function App() {
  return (
    <>
      <section>
        <h2>Winter's Orbit</h2>
        <p>Rating: 5 / 5</p>
        <StarRating rating={5} />
        <div>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
      </section>
      <section>
        <h2>Dial D for Deadman</h2>
        <p>Rating: 4 / 5</p>
        <StarRating rating={4} />
        <div>
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
      </section>
      <section>
        <h2>Words And Things</h2>
        <p>Rating: 0 / 5</p>
        <StarRating rating={0} />
        <div></div>
      </section>
      <section>
        <h2>The Galaxy, And The Ground Within</h2>
        <p>Rating: 5 / 5</p>
        <StarRating rating={5} />
        <div>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
      </section>
    </>
  );
}

function Star() {
  return (
    <img
      alt=""
      className="gold-star"
      src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
    />
  );
}

export default App;
