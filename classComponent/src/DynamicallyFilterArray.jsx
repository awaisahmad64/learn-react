import React from "react";
class DynamicallyFilterArray extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        users: [
          {
            username: 'Jeff',
            online: true
          },
          {
            username: 'Alan',
            online: false
          },
          {
            username: 'Mary',
            online: true
          },
          {
            username: 'Jim',
            online: false
          },
          {
            username: 'Sara',
            online: true
          },
          {
            username: 'Laura',
            online: true
          }
        ]
      };
  }
  render() {
    const usersOnline = this.state.users.filter((onlineUsers)=>(onlineUsers.online ==true)); // Change this line
    const renderOnline =usersOnline.map((onlinePerson,index)=>(<li key={index}>{onlinePerson.username} online</li>)); // Change this line
    return (<div>
        <h1>Current Online Users:{console.log(usersOnline)}</h1>
        <ul>{renderOnline}</ul>
      </div>);
  }
}
export default DynamicallyFilterArray;
