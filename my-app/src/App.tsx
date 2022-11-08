import {FC} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import styled from "styled-components";
import {Home} from "./components/Common/Routes/Home/Home"
import { Posts } from "./components/Common/Routes/Posts/posts";
import { Profile } from "./components/Common/Routes/Profile/profile";
import {Photos} from "./components/Common/Routes/Photos/photos";
import { Comments } from "./components/Common/Routes/Comments/Comments";
import { Layout } from "./components/Common/layout";
import NavBar from "./components/NavBar/NavBar"
export const App: FC = () => {
  return (
    
    
    <Router>
      
      
      <NavBar />
      <Layout>
      <Routes>
        <Route path="posts" element={<Posts />} />
        <Route path="profile" element={<Profile />} />
        <Route path="comments" element={<Comments />} />
        <Route path="photos" element={<Photos />} />
        <Route index element={<Home />} />

      </Routes>
      </Layout>
    </Router>
  );
}