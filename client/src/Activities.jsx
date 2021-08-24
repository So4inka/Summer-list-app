import {useParams} from 'react-router-dom'

function Activities(props) {
  const { name } = useParams()
  const activity = props.activities.find(activity => activity.fields.name === name)

  return !activity ? (<h1>Loading...</h1>) : (
    <div>
      <h2>{activity.fields.name}</h2>
      <br />
      <p>{activity.fields.location}</p>
      <br />
      <p>{activity.fields.budget}</p>
      <br />
      <p>{activity.fields.stuff}</p>
      <br />
      <p>{activity.fields.link}</p>
      <br />
      <p>{activity.fields.rating}</p>
      <br />
  </div>
)
}
export default Activities











