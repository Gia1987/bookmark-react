import React,{ useState} from 'react';
import Header from './components/header';
import Form from './components/form';
import LinkItem from './components/linkItem';
import './styles/App.scss';

function App() {
  const [links, setLinks] = useState([])
  const [id, setID] = useState(0)

  const addLink = (linkText) => {
    setID(id + 1)
    const newLinksArray = [...links, { id , link: linkText }];
    setLinks(newLinksArray)
  }
  const removeLink = (id) => {
    const newLinksArray = links.filter((link) => link.id !== id)
    setLinks(newLinksArray)
  }

  const editLink = (value, id) => {
    const linkToEdit = links.find((link) => link.id === id)
    if(linkToEdit){
      const newArray = links.slice()
      newArray[id].link = value
      setLinks(newArray)
    }
  }
    return (
      <div className="App">
        <div  className='link-wrapper'>
          <Header />
          <Form handleLink={addLink}/>
          <ul>
            {
              links.map((link) => {
                return <LinkItem link={link} key={link.id} id={link.id} removeLink={removeLink} editLink={editLink}/>
              })
            }
          </ul>
        </div>
      </div>
    );
}

export default App;
