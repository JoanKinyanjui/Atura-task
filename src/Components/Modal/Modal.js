import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./Modal.css";
import { TbNotes } from "react-icons/tb";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  outline: 0,
};

export default function BasicModal({ open, handleClose, name,img,description,tokenStandards,symbol,address,permalink,tokenId }) {
 
  function slash(data){
   return 
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ outline: "0" }}
      >
        <Box sx={style}>
          <div className="Modal grid ">
            <div className="modal-one flex py-2">
              <div className="modal-one-img">
                <img src={img} className="modal-one-img-spec" />
              </div>
              <div className=" modal-one-content grid items-center">
                <p className="font-medium text-lg md:text-xl">{name}</p>
                <p>Price </p>
                <Link to={permalink}>
                  <button className="Buy-now">Buy Now</button>
                </Link>
              </div>
            </div>
            {/* Details */}
            <div className="grid w-full py-4  ">
              <div className="grid w-11/12 py-2  mx-auto">
                <div className="flex justify-between w-full ">
                  <p className="text-neutral-700">Symbol</p>
                  <p className="text-neutral-900">{symbol}</p>
                </div>
                <div className="flex justify-between w-full ">
                  <p className="text-neutral-700">Token Standard</p>
                  <p className="text-neutral-900 break-words">{tokenStandards}</p>
                </div>
                <div className="flex justify-between w-full ">
                  <p className="text-neutral-700">Contract Address</p>
                  <p className="text-neutral-900">{address.slice(0,5) 
                  +'...' +address.slice(-4,-1)}</p>
                </div>
                <div className="flex justify-between w-full ">
                  <p className="text-neutral-700">Token Id</p>
                  <p className="text-neutral-900 ">{tokenId}</p>
                </div>
              </div>
            </div>
            {/* Description */}
            <div className="grid w-11/12 py-4 mx-auto">
              <div className="flex items-center">
                <TbNotes className="font-semibold text-lg " />
                <p className=" text-lg md:text-xl  font-medium">Description</p>
              </div>
              <p className="descriptiontext-neutral-900">{description}</p>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
