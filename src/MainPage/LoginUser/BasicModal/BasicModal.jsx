import * as React from "react";
import { Box, Button, Typography, Modal } from "@material-ui/core";
import { red, grey } from "@material-ui/core/colors";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const myRed = red[50];

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen} variant="contained" color="secondary">
                Get users logins
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" color={myRed}>
                        Users
                    </Typography>
                    <Box id="modal-modal-description" sx={{ mt: 2 }}>
                        <Typography>user: felipe, password: felipe</Typography>
                        <Typography>user: jennifer, password: jennifer</Typography>
                        <Typography>user: micaela, password: micaela</Typography>
                        <Typography>user: liliana, password: liliana</Typography>
                        <Typography>user: ned, password: ned</Typography>
                        <Typography>user: cookie, password: cookie</Typography>
                        <Typography>user: mulder, password: mulder</Typography>
                        <Typography>user: jorgelina, password: jorgelina</Typography>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
