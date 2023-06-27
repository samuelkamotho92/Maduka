import React,{useState,useEffect} from 'react';
import './WidgetLg.css';
// import { userRequest } from '../../../requestMethod.js';
// import {format} from 'timeago.js';
const WidgetLg = () => {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
      };
      const [orders,setOrders] = useState([]);

      // useEffect(() => {
      //   const getOrders = async () => {
      //     try {
      //       const res = await userRequest.get("/order/getOrders/");
      //       console.log(res.data)
      //       setOrders(res.data);
      //     } catch {}
      //   };
      //   getOrders();
      // }, []);
      // console.log(orders)
  return (
<div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Auctions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>

        {/* {
        orders?.map((order)=>( */}
          <tr className="widgetLgTr" key='dsfsd'>
          <td className="widgetLgUser">
            <span className="widgetLgName">fadf</span>
          </td>
          <td className="widgetLgDate">Today</td>
          <td className="widgetLgAmount">2000ksh </td>
          <td className="widgetLgStatus">
            <Button type='bought'/>
          </td>
        </tr>

        {/* ))
        } */}

       
      </table>
    </div>
  )
}

export default WidgetLg
