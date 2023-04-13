import Component1 from './component/Component1';
import Component2 from './component/Component2';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Component1 />} />
      <Route path="/component2" element={<Component2 />} />
    </Routes>
  );
}

export default App;
