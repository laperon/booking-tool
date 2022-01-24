import React, {useState} from 'react';

const EditForm = ({record, update}) => {

    const [name, setName] = useState();
    const [username, setUsername] = useState(record.username);
    const [email, setEmail] = useState(record.email);

    function onSubmitHandler(e) {
        e.preventDefault();

        setName(e.target.name.value)
        setUsername(e.target.username.value)
        setEmail(e.target.email.value)


        update({
            id: record.id,
            name: name,
            username: username,
            email: email
        })
    }

    // Async request, waiting for data
    if (record) {
        return (
            //@TODO should in modal
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    ID  <input type="text" name="id" placeholder="id" value={record.id} readOnly/>
                </div>
                <div className="form-group">
                    Name  <input
                        type="text"
                        name="name"
                        onChange={(e)=>{setName(e.target.value)}}
                        placeholder="name"
                        defaultValue={record.name} />
                </div>
                <div className="form-group">
                    Username <input
                        type="text"
                        name="username"
                        onChange={(e)=>setUsername(e.target.value)}
                        defaultValue={record.username}
                        placeholder="username"/>
                </div>
                <div className="form-group">
                    Email <input
                        type="text"
                        name="email"
                        onChange={(e)=>setEmail(e.target.value)}
                        defaultValue={record.email}
                        placeholder="email" />
                </div>
                <input type="submit"/>
            </form>
        );
    } else {
        return (
            ''
        )
    }

};

export default EditForm;