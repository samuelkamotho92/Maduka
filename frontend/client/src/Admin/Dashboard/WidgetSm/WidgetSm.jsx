import React,{useEffect,useState} from 'react';
import  './WidgetSm.css';
import { Visibility } from "@material-ui/icons";
// import { userRequest } from '../../../requestMethod';
const WidgetSm = () => {
  const [users,setUsers] = useState([]);

  //latest auctions posted



  // useEffect(() => {
  //   const getUsers = async () => {
  //     try {
  //       const res = await userRequest.get("/users/getUser/?new=true");
  //       console.log(res.data)
  //       setUsers(res.data);
  //     } catch {}
  //   };
  //   getUsers();
  // }, []);
  // console.log(users)
  return (
    <div className="widgetSm">
    <span className="widgetSmTitle">Messages</span>
    <ul className="widgetSmList">
    {/* {users.map((user) => ( */}
          <li className="widgetSmListItem" key='dsfaf'>
            <img
              src=
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">username</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        {/* ))} */}
    </ul>
  </div>
  )
}

export default WidgetSm
