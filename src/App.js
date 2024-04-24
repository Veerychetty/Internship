
import './App.css';
import Content from './Content';
import {Helmet} from "react-helmet"; 

import Header from './Header';

function App() {
  return (
    <div className="App">
      <Helmet>
            <meta charSet="utf-8" />
            
                <title>TODO list</title>
                <link rel="canonical" href="http://mysite.com/example" />

            </Helmet>
      
      <Header/>
      <Content/>
     
      
    </div>
  );
}

export default App;
