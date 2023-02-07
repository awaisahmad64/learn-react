import { Routes,Route} from 'react-router-dom';
import AboutUs from './AboutUs';
function App() {
  return <>
  <Routes>
    <Route path="*" element={<App/>}/>
    <Route path='/aboutus' element={<AboutUs/>}/>
  </Routes>
  <h1>Hello</h1>
  </>;
}

export default App;
