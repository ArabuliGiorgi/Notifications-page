import './App.css'
import { useEffect, useState } from 'react';
import Post from './components/post/post'
import Mark from '/images/avatar-mark-webber.webp'
import Angela from '/images/avatar-angela-gray.webp'
import Jacob from '/images/avatar-jacob-thompson.webp'
import Rizky from '/images/avatar-rizky-hasanuddin.webp'
import Kimberly from '/images/avatar-kimberly-smith.webp'
import Nathan from '/images/avatar-nathan-peterson.webp'
import Anna from '/images/avatar-anna-kim.webp'
import Chess from '/images/image-chess.webp'

function App() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      name: "Mark Webber",
      action: "reacted to your recent post",
      post: "My first tournament today!",
      group: "",
      date: "1m ago",
      avatar: Mark,
      message: "",
      picture: null,
      read: false
    },
    {
      id: 2,
      name: "Angela Gray",
      action: "followed you",
      post: "",
      group: "",
      date: "5m ago",
      avatar: Angela,
      message: "",
      picture: null,
      read: false
    },
    {
      id: 3,
      name: "Jacob Thompson",
      action: "has joined your group",
      post: "",
      group: "Chess Club",
      date: "1 day ago",
      avatar: Jacob,
      message: "",
      picture: null,
      read: false
    },
    {
      id: 4,
      name: "Rizky Hasanuddin",
      action: "sent you private message",
      post: "",
      group: "",
      date: "5 days ago",
      avatar: Rizky,
      message: "Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.",
      picture: null,
      read: true
    },
    {
      id: 5,
      name: "Kimberly Smith",
      action: "commented on your picture",
      post: "",
      group: "",
      date: "1 week ago",
      avatar: Kimberly,
      message: "",
      picture: Chess,
      read: true
    },
    {
      id: 6,
      name: "Nathan Peterson",
      action: "reacted to your recent post",
      post: "5 end-game strategies to increase your win rate",
      group: "",
      date: "2 weeks ago",
      avatar: Nathan,
      message: "",
      picture: null,
      read: true
    },
    {
      id: 7,
      name: "Anna Kim",
      action: "left the group",
      post: "",
      group: "Chess Club",
      date: "2 weeks ago",
      avatar: Anna,
      message: "",
      picture: null,
      read: true
    }
  ]);
  useEffect(() => {
    const notification_number = document.getElementById('notif-number');
    let sum = notifications.filter((object) => !object.read).length;
    notification_number.textContent = sum;
  }, [notifications]);

  const markAllAsRead = () => {
    const updatedNotifications = notifications.map((notification) => ({
      ...notification,
      read: true
    }));
    setNotifications(updatedNotifications);
  };

  const markAsRead = (id) => {
    const updatedNotifications = notifications.map((notification) => 
      notification.id === id ? { ...notification, read: true } : notification
    );
    setNotifications(updatedNotifications);
  };

  return (
    <>
      <main>
        <div className="notif-header">
          <div className="notification-numb">
            <h1 className='notification-font'>Notifications</h1>
            <div className="Nnumb">
              <h1 id='notif-number'></h1>
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
