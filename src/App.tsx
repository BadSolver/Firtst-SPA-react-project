import './App.scss';
import { Slider } from '../src/сomponents/Slider/Slider'
import { Navbar } from '../src/сomponents/Navbar/Navbar'

const App = () => {
  return (
    <div className="wrapper">
        <Navbar/>
        <Slider/>
    </div>
  );
}

export default App;
