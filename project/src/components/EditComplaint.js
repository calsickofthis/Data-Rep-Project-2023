// importing libraries
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


function EditComplaint() {
    // The useParams hook returns an object of key/value pairs of
    // the dynamic params from the current URL that were matched by the <Route path>.
    let { id } = useParams();

    //sets and variables use to edit the trainer details
    const [ComplaintArray, SetComplaintArray] = useState([]);
    const [title, setTitle] = useState("");
    const [POC, setPOC] = useState("");
    const [status, setStatus] = useState("");

    // navigate from react-router-dom to return us to a page the function is called
    const navigate = useNavigate();

    // styling
    const inputCss = {
        border: '2px solid blue',
        borderRadius: '20px',
        margin: '10px',
        textAlign: 'center'
    }

    const submitCss = {
        border: '2px solid blue',
        borderRadius: '10px',
        color: 'black',
        backgroundColor: 'green'
    }

    //submit method
    const EditComplaint = (e) => {
        e.preventDefault();

        const ComplaintDetails = {
            title: title,
            POC: POC,
            status: status
        }

        axios.put('http://localhost:4000/EditComplaint/' + id, ComplaintDetails)
            .then((response) => {
                navigate('/ViewComplaints');
            });
    }

    useEffect(
        () => {
            const fetchData = async () => {
                await axios.get('http://localhost:4000/complaint/' + id)
                    .then((response) => {
                        SetComplaintArray(response.data);
                    })
                    .catch((error) => {
                        console.log('EditComplaint.js based error : ' + error);
                    });
            }
            fetchData();
            console.log('http://localhost:4000/complaint/' + id);
        }, []
    );

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h1>Edit status of task</h1>
            {ComplaintArray ? (
                <form onSubmit={EditComplaint} style={{ fontSize: '20px' }}>
                    <input placeholder={ComplaintArray.title} style={inputCss} onChange={(e) => setTitle(e.target.value)}></input><br></br>
                    <input placeholder={ComplaintArray.POC} style={inputCss} onChange={(e) => setPOC(e.target.value)}></input><br></br>
                    <input placeholder={ComplaintArray.status} style={inputCss} onChange={(e) => setStatus(e.target.value)}></input><br></br>
                    <input type="submit" value='confirm' style={submitCss}></input>
                </form>
            ) : (
                <p>Somethings gone wrong :(</p>
            )}
        </div>
    );
}

export default EditComplaint;