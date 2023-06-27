import React,{useState,useEffect,useMemo} from 'react'
import './Home.css'
import Chart from '../../Dashboard/Chart/Chart'
import FeaturedInfo from '../../Dashboard/FeaturedInfo/FeaturedInfo'
import WidgetLg from '../../Dashboard/WidgetLg/WidgetLg'
import WidgetSm from '../../Dashboard/WidgetSm/WidgetSm'
import { userData } from '../../DummyData/Dummy'
import Topbar from '../../Dashboard/Topbar/Topbar';
import Sidebar from '../../Dashboard/Sidebar/Sidebar'
const AdminHome = () => {
  const [userStats,setUserStats] = useState([]);
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  // useEffect(() => {
  //   const getStats = async () => {
  //     try {
  //       const res = await userRequest.get("/users/stats");
  //       res.data.map((item) =>
  //         setUserStats((prev) => [
  //           ...prev,
  //           { name: MONTHS[item._id - 1], "Active User": item.total },
  //         ])
  //       );
  //     } catch {}
  //   };
  //   getStats();
  // }, [MONTHS]);
  // console.log(userStats);
  return (
    <div className="home">
      <div className='container'>
        <div className='maincontent'>
        <FeaturedInfo />
    <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
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
