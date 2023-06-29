import React from 'react'
import {userRows} from '../../DummyData/Dummy'
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import './Auctionlist.css';
import { deleteAuction } from '../../../redux/apiCall';
const Auctionlist = () => {
  const dispatch = useDispatch();
const user = useSelector((state)=>state.user?.currentUser?.data.username)
console.log(user)
const auctions = useSelector((state)=>state.auction.auctions.data[0].filter(auction=>auction.Owner == user));
console.log(auctions);
const handleDelete = (id)=>{
    console.log("Delete Outline");
  deleteAuction(id,dispatch)
}

    const columns = [
        { 
        field: "id", 
        headerName: "id", 
        width: 220 
      },
      {
        field: "Photos",
        headerName: "Photo",
        width: 200,
        renderCell: (params) => {
            const img = params.row.photos?.replace(/\[|\]/g, '').split(',')[0].replace(/"/g, '')
            console.log(img);
          return (
            <div className="auctionListauct">
              <img className="auctionListImg" src={img} alt="" />
            </div>
          );
        },
      },
      { 
        field: "title", 
        headerName: "Title", 
        width: 220 
      },
      { 
        field: "price", 
        headerName: "Price", 
        width: 220 
      },
      { 
        field: "brand", 
        headerName: "Brand", 
        width: 220 
      },
      { 
        field: "category", 
        headerName: "Category", 
        width: 220 
      },
      { 
        field: "description", 
        headerName: "Description", 
        width: 220 
      },
      { 
        field: "paymentMethod", 
        headerName: "Payment Method",  
        width: 220 
      },
      { 
        field: "phoneNumber", 
        headerName: "Phone Number", 
        width: 220 
      },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                <Link to={"/admin/auction/" + params.row.id}>
                  <button className="auctionListEdit">Edit</button>
                </Link>
                <DeleteOutline
                  className="auctionListDelete"
                  onClick={() => handleDelete(params.row.id)}
                />
              </>
            );
          },
        },
      ];
  return (
    <div className="auctionList" style={{ height: '100vh', width: '100%' ,margin:'10px 2px' }}>
    <DataGrid
      rows={auctions}
      disableSelectionOnClick
      columns={columns}
      getRowId={(row)=>row.id}
      pageSize={8}
      checkboxSelection
    style={{margin:'3px'}}
    />

  </div>
  )
}

export default Auctionlist