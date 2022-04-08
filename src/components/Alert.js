import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        var words = word.toLowerCase();
        return words.charAt(0).toUpperCase() + words.slice(1);


    }
    return (
        //alert value=>dekhaunu
        //alert value!=na adekhaunu
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show  `} role="alert">
            <b>{capitalize(props.alert.type)}</b>  :<strong> {props.alert.msg} </strong>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}
