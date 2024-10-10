import './App.css'
import { useState } from 'react';
import Post from './components/post/post'
import data from './data.json'

function App() {
  const [notifications, setNotifications] = useState(data);
  const [notifNum, setNotifNum] = useState(notifications.filter((object) => !object.read).length);

  const markAllAsRead = () => {
    const updatedNotifications = notifications.map((notification) => ({
      ...notification,
      read: true
    }));
    setNotifications(updatedNotifications);
    setNotifNum(0);
  };

  const markAsRead = (id) => {
    let readNotif = false;
    const updatedNotifications = notifications.map((notification) => {
      if(notification.id === id && !notification.read){
        readNotif = true;
        return { ...notification, read: true };
      }
      return notification;
    });
    setNotifications(updatedNotifications);
    setNotifNum(notifNum - (readNotif ? 1 : 0));
  };

  return (
    <>
      <main>
        <div className="notif-header">
          <div className="notification-numb">
            <h1 className='notification-font'>Notifications</h1>
            <div className="Nnumb">
              <h1 id='notif-number'>{notifNum}</h1>
            </div>
          </div>
          <h1 id='mark-all' onClick={markAllAsRead}>Mark all as read</h1>
        </div>
        {notifications.map((post) => (
          <Post key={post.id} obj={post} markAsRead={markAsRead}/>
        ))}
      </main>
    </>
  )
}

export default App
