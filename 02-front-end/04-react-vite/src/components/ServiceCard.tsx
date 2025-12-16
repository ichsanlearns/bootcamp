function ServiceCard(props: {
  topTitle: string;
  bottomTitle: string;
  image: string;
  titleBg: string;
  cardBg: string;
}) {
  let titleBg = "";
  let cardBg = "";

  if (props.titleBg === "white") {
    titleBg = "white";
  } else if (props.titleBg === "black") {
    titleBg = "black";
  } else {
    titleBg = "#b9ff66";
  }

  if (props.cardBg === "grey") {
    cardBg = "#f3f3f3";
  } else if (props.cardBg === "black") {
    cardBg = "black";
  } else {
    cardBg = "#b9ff66";
  }

  return (
    <div className="card-wrapper" style={{ backgroundColor: cardBg }}>
      {/* left */}
      <div className="left">
        <div>
          <p style={{ backgroundColor: titleBg }}>{props.topTitle} </p>
          <p style={{ backgroundColor: titleBg }}>{props.bottomTitle}</p>
        </div>
        <div className="learn-more-btn">
          <img src="arrow-icon.svg" alt="" />
          <span>Learn more</span>
        </div>
      </div>
      {/* right */}
      <img className="right" src={`illustration-${props.image}.png`} alt=" " />
    </div>
  );
}

export default ServiceCard;
