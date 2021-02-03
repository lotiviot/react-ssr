import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { blue } from '@material-ui/core/colors';
import uuid from "uuid";
import {db} from '../../../../constants/Fire'
export default function Upload(props) {
  const { onClose, selectedValue, open } = props;
  const [temp, setTemp] = React.useState("")

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  let deleteFunc = () => {
    var ref = db.collection("payments").doc("asdf")
    console.log(ref)
    props.selectedData.map(e=>{
      console.log(e)

      db.collection("payments").doc(e).delete().then("check").catch(function(error){
        console.error("wrong",error);
    })
    })
    console.log("asdf")
    setTemp("")
  }
 
  let test = () =>{
    console.log("thing")
  }

  

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Upload Donation</DialogTitle>
                    <DialogContent>
                    {props.selectedData}
                    </DialogContent>
                    <DialogActions>
                    <button onClick={() => {deleteFunc()
                        }}>test </button>
                    </DialogActions> 
    </Dialog>
  );
}