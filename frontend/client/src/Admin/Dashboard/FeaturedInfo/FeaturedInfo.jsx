import React,{useState,useEffect} from 'react';
import "./FeaturedInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
// import { userRequest } from '../../../requestMethod.js';
const FeaturedInfo = () => {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  // useEffect(() => {
  //   const getIncome = async () => {
  //     try {
  //       const res = await userRequest.get("/order/income");
  //       setIncome(res.data);
  //       setPerc((res.data[1].total * 100) / res.data[0].total - 100);
  //     } catch {}
  //   };
  //   getIncome();
  // }, []);
  // console.log(income)
  return (
<div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Sold Auctions</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">20</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Traffic</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2000</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  )
}

export default FeaturedInfo
