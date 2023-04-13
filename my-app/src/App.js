import ComponentOne from './component/ComponentOne';
import ComponentTwo from './component/ComponentTwo';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<ComponentOne />} />
      <Route path="componentTwo" element={<ComponentTwo />} />
    </Routes>
  );
}

export default App;
