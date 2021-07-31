import React, { useMemo } from 'react'
import useFetchAllChatData from '../../../hooks/useFetchAllChatData';
import MessageLeft from './MessageLeft';
import MessageRight from './MessageRight';
import moment from 'moment';
import { connect } from 'react-redux';

const ChatScreen = ({ uid, otherId }) => {
  const { data } = useFetchAllChatData(uid, otherId);
  const dataList = useMemo(() => Object.entries(data || {}).map(([key, value]) => ({ key, value })), [data]);
  console.log(dataList);
  let viewDate = '';

  const showViewDate = (value) => {
    const formattedCreatedAt = moment(value.createdAt).format('YYYY/MM/DD')
    if (viewDate !== formattedCreatedAt) {
      viewDate = formattedCreatedAt;
      return viewDate;
    }
  }

  return (
    <div>
      <div>{dataList.length === 0 && "loading..."}</div>
      {dataList.map(({ key, value }) => (
        <React.Fragment key={`${key}`}>
          <div>{showViewDate(value)}</div>
          {

          }
        </React.Fragment>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  uid: state.userAccount.id
});

export default connect(mapStateToProps)(ChatScreen);
