import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App (){
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='max-w-[900px] my-[40px] mx-auto p-[20px]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path='*' element={<NotFound />} />                                            
          </Routes>
        </div>       
      </div>
    </Router>
  );
}

export default App;
