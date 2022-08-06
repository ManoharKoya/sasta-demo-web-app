const Home = () => {
  return (
    <div className="page">
      <div className="content">
        <div className="title">Hello</div>
        <div className="description">
          <p>
            Lorem Ipsum is simply dummy text of the <br /> printing and
            typesetting industry. Lorem Ipsum <br /> has been the industry's
            standard dummy text ever <br /> since the 1500s, when an unknown
            printer took a <br /> galley of type and scrambled it to make a type{" "}
            <br />
            specimen book. It has survived not only five centuries,
            <br /> but also the leap into electronic typesetting, remaining
            <br /> essentially unchanged. It was popularised in the 1960s
            <br /> with the release of Letraset sheets containing Lorem Ipsum
            <br /> passages, and more recently with desktop publishing software
            <br /> like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className="shopping-bags">
        <img
          src="./shopping-bags.png"
          alt="shopping-bags"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Home;
