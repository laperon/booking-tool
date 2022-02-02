import React, {useState} from 'react';
import OrderItem from "./OrderItem";
import cl from "./Orders.module.css";
import EditForm from "../../blocks/EditForm";
import useTestData from "../../hooks/useTestData";
import {Button, Box, Typography, Modal} from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const OrdersList = ({records, add, remove, update}) => {

    const [record, setRecord] = useState(false);
    const handleOpen = () => setRecord(true);
    const handleClose = () => setRecord(false);
    const [selected, setSelected] = useState(false);

    function selectToEdit(prop) {
        setRecord(prop)
    }

    return (
        <div>
            <Modal
                open={record}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit From
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <EditForm record={record} />
                    </Typography>
                </Box>
            </Modal>

            <div className={cl.order_list + (selected ? ' selected' : ' ')}>
                {records.map((record) =>
                    <OrderItem
                        selectToEdit={selectToEdit}
                        remove={remove}
                        record={record}
                        key={record.id}
                    />
                )}
            </div>
        </div>

    );
};

export default OrdersList;