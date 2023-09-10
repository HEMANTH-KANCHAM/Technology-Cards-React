import './App.css'
import CardItem from './components/CardItem'

const cardsList = [
  {
    id: 1,
    title: 'Data Scientist',
    description:
      'Data scientists gather and analyze large sets of structured and unstructured data',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/data-scientist-img.png',
    className: 'card-1',
  },
  {
    id: 2,
    title: 'IOT Developer',
    description:
      'IoT Developers are professionals who can develop, manage, and monitor IoT devices.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/iot-developer-img.png',
    className: 'card-2',
  },
  {
    id: 3,
    title: 'VR Developer',
    description:
      'A VR developer creates completely new digital environments that people can see.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/vr-developer-img.png',
    className: 'card-3',
  },
  {
    id: 4,
    title: 'ML Engineer',
    description:
      'Machine learning engineers feed data into models defined by data scientists.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png',
    className: 'card-4',
  },
]

const App = () => (
  <div className="app-container">
    <div className="content-container">
      <h1 className="main-heading">Learn 4.0 Technologies</h1>
      <p className="main-description">
        Get trained by alumni of IITs and top companies,In this project, let's
        build Technology Cards by applying the concepts we have learned till
        now.In this project, let's build Technology Cards by applying the
        concepts we have learned till now.
      </p>
      <ul className="card-list-container">
        {cardsList.map(eachItem => (
          <CardItem key={eachItem.id} cardItem={eachItem} />
        ))}
      </ul>
    </div>
  </div>
)

export default App
