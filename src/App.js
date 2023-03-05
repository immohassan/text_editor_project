import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return ( <div className="App bg-dark"> 
			<Navbar title = "Text Editor"/>
      <div className="container">
      <TextForm heading = "Enter the text: "/>
      </div>
	</div>
  )
};

export default App;
