import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails

  //   console.log(itemDetails)

  return (
    <div>
      <div className="image-card">
        <img className="image-size" src={imageUrl} alt="project" />
      </div>
      <div className="title-card">
        <h1>{projectTitle}</h1>
        <p>
          <AiFillCalendar />
          {duration}
        </p>
      </div>
      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}
export default ProjectTimelineCard
