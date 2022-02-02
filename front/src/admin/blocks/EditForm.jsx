import React, {useState} from 'react';
import { Stack, TextField, Button, Select, MenuItem } from '@mui/material';
import cl from  './EditForm.module.css'

const EditForm = ({record, update}) => {

    const [dateTo, setDateTo] = useState(record.date_to);
    const [dateFrom, setDateFrom] = useState(record.date_from);
    const [status, setStatus] = useState(record.status)

    // function onSubmitHandler(e) {
    //     e.preventDefault();

    //     setStatus(e.target.status.value);

    //     update({
    //         id: record.id,
    //         status: status
    //     });
    // }

    // Async request, waiting for data
    if (record) {

        return (

            <Stack
                component="form"
                sx={{
                    width: '37ch',
                }}
                spacing={2}
                noValidate
                autoComplete="off"
            >
                <TextField
                    hiddenLabel
                    disabled
                    fullWidth
                    id="name"
                    label="Name"
                    size="small"
                    defaultValue={record.name}
                />
                <TextField
                    hiddenLabel
                    disabled
                    fullWidth
                    id="username"
                    label="Username"
                    size="small"
                    defaultValue={record.username}
                />
                <TextField
                    hiddenLabel
                    disabled
                    id="email"
                    label="Email"
                    size="small"
                    defaultValue={record.email}
                />
                <TextField
                    hiddenLabel
                    disabled
                    id="vaccinated"
                    label="Vaccinated"
                    size="small"
                    defaultValue={record.vaccinated == true ? 'Yes' : 'No'}
                />
                <TextField
                    hiddenLabel
                    id="date_from"
                    label="Date From"
                    size="small"
                    defaultValue={record.date_from}
                />
                <TextField
                    hiddenLabel
                    id="date_to"
                    label="Date To"
                    size="small"
                    defaultValue={record.date_to}
                />
                <Select
                    labelId="status"
                    id="status"
                    value={status}
                    label="Status"
                    onChange={(prop) => {
                        setStatus(prop.target.value)
                    }}
                    >
                    <MenuItem value={true}>Approve</MenuItem>
                    <MenuItem value={false}>Unapproved</MenuItem>
                </Select>
                <Button variant="contained" color="success">
                    Save
                </Button>
            </Stack>

            //@TODO should in modal
            // <div className={cl.edit_form}>
            //     <form className={cl.form} onSubmit={onSubmitHandler}>
            //         <div className="form-group">
            //             ID  <input type="text" name="id" placeholder="id" value={record.id} readOnly/>
            //         </div>
            //         <div className="form-group">
            //             Name  <input readOnly
            //             type="text"
            //             name="name"
            //             placeholder="name"
            //             defaultValue={record.name} />
            //         </div>
            //         <div className="form-group">
            //             Username <input readOnly
            //             type="text"
            //             name="username"
            //             defaultValue={record.username}
            //             placeholder="username"/>
            //         </div>
            //         <div className="form-group">
            //             Email <input readOnly
            //             type="text"
            //             name="email"
            //             defaultValue={record.email}
            //             placeholder="email" />
            //         </div>
            //         <div className="form-group">
            //             Date From <input
            //              type="datetime-local"
            //              name="date_from"
            //              onChange={(e)=>setDateFrom(e.target.value)}
            //              defaultValue={record.date_from}
            //              placeholder="email" />
            //         </div>
            //         <div className="form-group">
            //             Date From <input
            //             type="datetime-local"
            //             name="date_to"
            //             onChange={(e)=>setDateTo(e.target.value)}
            //             defaultValue={record.date_to}
            //             placeholder="email" />
            //         </div>
            //         <div className="form-group">
            //             Status {record.status == true ? 'Approved' : 'Not Approved'}
            //         </div>
            //         <div className="form-group">
            //             <div>
            //                 True <input
            //                     type="radio"
            //                     name="status"
            //                     onChange={(e) => e.target.value }
            //                     value="true" />
            //                 False <input
            //                     type="radio"
            //                     name="status"
            //                     onChange={(e) => e.target.value }
            //                     value="false" />
            //             </div>

            //         </div>
            //         <input type="submit"/>
            //     </form>
            // </div>
        );
    } else {
        return (
            ''
        )
    }

};

export default EditForm;