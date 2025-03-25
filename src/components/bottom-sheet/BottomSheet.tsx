import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import * as React from 'react';

const style = {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translate(-50%, 0%)',
    width: "100vw",
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: "24px 24px 0px 0px",
    padding: "12px 0px"
};

export const BottomSheet = (props: { setOpen: Function, open: boolean, children: React.ReactNode }) => {
    const handleClose = () => props.setOpen(false);

    return (
        <div>
            <Modal
                open={props.open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {props.children}
                </Box>
            </Modal>
        </div>
    );
}
