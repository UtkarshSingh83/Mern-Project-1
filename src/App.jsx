import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import AppLayout from "./layout/AppLayout";
function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home/>} /> */}
      <Route path="/" element={<AppLayout><Home /></AppLayout>} />
      {/* <Route path="/login" element={<Form/>} /> */}
      <Route path="/login" element={<AppLayout><Form /></AppLayout>} />
    </Routes >
  );
}
export default App;

