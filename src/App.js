import React,{ useState} from 'react';
import Header from './components/header';
import Form from './components/form';
import './styles/App.css';

function App() {
  const [links, setLinks] = useState([])
  const [id, setID] = useState(0)

  const addLink = (linkText) => {
    setID(id + 1)
    const newLinksArray = [...links, { id , link: linkText }];
    setLinks(newLinksArray)
  }
  return (
    <div className="App">
      <div  className='link-wrapper'>
        <Header />
        <Form handleLink={addLink}/>
        <ul>
          {
            links.map((link) => {
              return link.link
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
