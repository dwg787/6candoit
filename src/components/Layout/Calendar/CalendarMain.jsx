import React, { useEffect } from 'react';
import Calendar from '@fullcalendar/react';
import * as S from './CalendarMainStyle';
import { useSelector } from 'react-redux';
import dayGridPlugin from '@fullcalendar/daygrid';
import { __getPost } from '../../../redux/modules/posts';
import { useDispatch } from 'react-redux';

function CalendarMain() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(__getPost());
  }, [dispatch]);

  const calendarEvents = posts.map((post) => {
    // if (finished.at == true){
    // 객체반환 title,created_at:post.created_at start,end 넣기
    //} else

    return {
      title: post.title,
      start: post.fromDate,
      end: post.toDate,
      // 조건문을 주어 해당 영역을 수정 true/false로
    };
  });

  return (
    <>
      <S.Wrapper>
        <S.MainContainer>
          <S.Header>
            <h2>Calendar</h2>
          </S.Header>
          <S.StyleWrapper>
            <Calendar
              defaultView='dayGridMonth'
              plugins={[dayGridPlugin]}
              events={calendarEvents}
              style={{ width: '285px' }}
            />
          </S.StyleWrapper>
        </S.MainContainer>
      </S.Wrapper>
    </>
  );
}

export default CalendarMain;
