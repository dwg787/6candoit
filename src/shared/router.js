import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
// import MainPage from '../components/Layout/Container/PostsContainer';
// import MainPage from '../pages/PostListPage/PostsContainer';
import MainPage from '../pages/MainPage/MainPage';
import DetailPage from '../pages/DetailPage/DetailPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import CalendarPage from '../pages/CalendarPage/CalendarPage';

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Header></Header> */}
      <Wrap>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/:id' element={<DetailPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/Calendar' element={<CalendarPage />} />
          {/* <Route path="/" element={<Main />} /> */}
          {/* <Route path="/addform" element={<PostAddForm />} /> */}
        </Routes>
      </Wrap>
    </BrowserRouter>
  );
};

export default Router;

const Wrap = styled.div`
  max-width: 96.25rem;
  max-height: 56.25rem;
  height: 95vh;
  display: flex;
  overflow: hidden;
  border-radius: 20px;
  width: 96rem;
  font-size: 16px;
  font-weight: 500;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  position: relative;
`;
