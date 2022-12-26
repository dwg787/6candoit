//초대하기 버튼 눌러서 input에 email계정 입력 후 제출 버튼
// db.json의 allUserList에 있는 계정인지 검증
// 있다면 => 초대! posts(이전글, 이제쓸글), user(이제쓸글에 추가하기위해)에 dispatch
// 없다면 => alert

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../../firebase';
import {
  __getUserList,
  __updateUserList,
} from '../../redux/modules/allUserListSlice';
import { __updateUser } from '../../redux/modules/userSlice';

function InvitePage() {
  const { allUserList } = useSelector((state) => state.allUserList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getUserList());
  }, [dispatch]);

  const onCheckRegistered = (e) => {
    e.preventDefault();
    const emailList = allUserList.map((user) => user.email);
    // console.log(emailList);
    // console.log(e.target[0].value);
    const checked = emailList.indexOf(e.target[0].value);
    checked === -1
      ? alert('해당하는 회원이 없습니다.')
      : dispatch(
          __updateUser({
            id: auth.currentUser.uid,
            invitedUid: allUserList[checked].id,
            invitedEmail: allUserList[checked].email,
          })
        ) &&
        dispatch(
          __updateUserList({
            id: auth.currentUser.uid,
            invitedUid: allUserList[checked].id,
            invitedEmail: allUserList[checked].email,
          })
        ) &&
        alert('추가되었습니다.');
  };

  return (
    <div>
      초대할 친구
      <form onSubmit={onCheckRegistered}>
        <input type='email' />
        <input type='submit' />
      </form>
    </div>
  );
}

export default InvitePage;