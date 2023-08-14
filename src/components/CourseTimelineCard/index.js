import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails
  return (
    <div>
      <div className="title-card">
        <h1>{courseTitle}</h1>
        <p>
          <AiFillClockCircle /> {duration}
        </p>
      </div>

      <p>{description}</p>
      <ul className="ul-card">
        {tagsList.map(eachTab => (
          <li className="list-item" key={eachTab.id}>
            <p>{eachTab.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
