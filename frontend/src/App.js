import './App.css';
import Homepage from './Components/Homepage';
import CreateScreen from './Components/CreateScreen';
import CreatePost from './Components/CreatePost';
import GallaryScreen from './Components/GallaryScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResizeScreen from './Components/ResizeScreen';
import { useContext } from 'react';
import { Store } from './Components/Store';
import PostScreen from './Components/PostScreen';

function App() {
  const value = useContext(Store);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<CreateScreen />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/gallary" element={<GallaryScreen state={value} />} />
        <Route path="/resize" element={<ResizeScreen />} />
        <Route path="/newpost" element={<PostScreen state={value}/>} />
      </Routes>
      {/* <div className="">
        <img src="https://picsum.photos/200/300?image=0" alt="random img" />
        <img src="https://picsum.photos/200/300?image=0" alt="random img" />
        <img src="https://picsum.photos/200/300?image=0" alt="random img" />
      </div> */}
    </BrowserRouter>
  );
}

export default App;
