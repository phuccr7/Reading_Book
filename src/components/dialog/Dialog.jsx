import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import "./dialog.css"
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const agree = (type, icon) => {
    alert(type);
}
export default function AlertDialogSlide(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div  >
            <img className='icon' src={props.icon} alt="" onClick={handleClickOpen} />
            <div >
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                // fullWidth="true"
                >
                    <DialogTitle>{"Comfirm Dialog"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            Are you sure to {props.type} this account ?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions className='dialog'>
                        <Button onClick={() => {
                            setOpen(false);
                            agree(props.type, props.user);

                        }} className="buttonAgree"> {props.type}</Button>
                        <Button onClick={handleClose} className="buttonDisagree"> Cancel </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}
