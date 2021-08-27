function Rating(props) {
  let stars = "";
  for (let i = 0; i < props.rating; i += 1) {
    stars += "⭐";
  }

  return <p>{stars}</p>;
}
export default Rating;
