import React,{useState} from 'react
import { useSelector } from 'react-redux'
import './Home.css'
import Chart from '../../Dashboard/Chart/Chart'
import FeaturedInfo from '../../Dashboard/FeaturedInfo/FeaturedInfo'
import WidgetLg from '../../Dashboard/WidgetLg/WidgetLg'
import WidgetSm from '../../Dashboard/WidgetSm/WidgetSm'
import { userData } from '../../DummyData/Dummy.js'
import { userRequest } from '../../../requestMethod';
import Topbar from '../../Dashboard/Topbar/Topbar';
import Sidebar from '../../Dashboard/SideBar/Sidebar'
const AdminHome = () => {
  const [userStats,setUserStats] = useState([]);
  const user = useSelector((state)=>state.user?.currentUser?.data.username)
  const auctions = useSelector((state)=>state.auction.auctions.data[0].filter(auction=>auction.Owner == user));
  console.log(userStats);
  return (
    <div className="home">
      <div className='container'>
        <div className='maincontent'>
        <FeaturedInfo />
    <Chart data={userData} title="Auction Analytics" grid dataKey="Auctions"/>
    <div className="homeWidgets">
      <WidgetSm/>
      <WidgetLg/>
    </div>
        </div>
      </div>
  </div>
  )
}

export default AdminHome
