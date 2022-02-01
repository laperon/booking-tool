import React, {useState} from 'react';
import cl from  './EditForm.module.css'

const EditForm = ({record, update}) => {

    const [dateTo, setDateTo] = useState(record.date_to);
    const [dateFrom, setDateFrom] = useState(record.date_from);
    const [status, setStatus] = useState(record.status)

    function onSubmitHandler(e) {
        e.preventDefault();

        setStatus(e.target.status.value);

        update({
            id: record.id,
            status: status
        });
    }

    // Async request, waiting for data
    if (record) {

        return (
            //@TODO should in modal
            <div className={cl.edit_form}>
                <form className={cl.form} onSubmit={onSubmitHandler}>
                    <div className="form-group">
                        ID  <input type="text" name="id" placeholder="id" value={record.id} readOnly/>
                    </div>
                    <div className="form-group">
                        Name  <input readOnly
                        type="text"
                        name="name"
                        placeholder="name"
                        defaultValue={record.name} />
                    </div>
                    <div className="form-group">
                        Username <input readOnly
                        type="text"
                        name="username"
                        defaultValue={record.username}
                        placeholder="username"/>
                    </div>
                    <div className="form-group">
                        Email <input readOnly
                        type="text"
                        name="email"
                        defaultValue={record.email}
                        placeholder="email" />
                    </div>
                    <div className="form-group">
                        Date From <input
                         type="datetime-local"
                         name="date_from"
                         onChange={(e)=>setDateFrom(e.target.value)}
                         defaultValue={record.date_from}
                         placeholder="email" />
                    </div>
                    <div className="form-group">
                        Date From <input
                        type="datetime-local"
                        name="date_to"
                        onChange={(e)=>setDateTo(e.target.value)}
                        defaultValue={record.date_to}
                        placeholder="email" />
                    </div>
                    <div className="form-group">
                        Status {record.status == true ? 'Approved' : 'Not Approved'}
                    </div>
                    <div className="form-group">
                        <div>
                            True <input
                                type="radio"
                                name="status"
                                onChange={(e) => e.target.value }
                                value="true" />
                            False <input
                                type="radio"
                                name="status"
                                onChange={(e) => e.target.value }
                                value="false" />
                        </div>

                    </div>
                    <input type="submit"/>
                </form>
            </div>
        );
    } else {
        return (
            ''
        )
    }

};

export default EditForm;