import React, { useState, useEffect } from 'react';
import * as reimbursementRemote from '../remote/reimbursement.remote';
import { Reimbursement } from '../models/Reimbursement';
import { ReimbursementEmployeeView } from '../models/ReimbursementEmployeeView';
import { ReimbursementPost } from '../models/ReimbursementPost';
import { RouteComponentProps, withRouter } from 'react-router';


const EmployeeComponent: React.FC = () => {

    const [reimbursements, setReimbursements] = useState<Reimbursement[]>([]);
    const [reimbAmount, setReimbAmount] = useState(0);
    const [reimbDescription, setreimbDescription] = useState('');
    const [reimbReceipt, setReimbReceipt] = useState('');
    const [reimbAuthor, setReimbAuthor] = useState(0);
    // const [resolverFirstName, setResolverFirstName] = useState('');
    // const [resolverLastName, setResolverLastName] = useState('');
    // const [reimbStatus, setReimbStatus] = useState(1);
    const [reimbTypeId, setReimbTypeId] = useState(1);
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        // showReimbursements();
    }, []);

    const createReimbursement = async () => {
        const payload = {
            reimbAmount: reimbAmount,
            reimbDescription: reimbDescription,
            reimbReceipt: reimbReceipt,
            reimbAuthor: 2,
            // reimbAuthor: localStorage.getItem('userId'),
            reimbTypeId: reimbTypeId,
        }

        await reimbursementRemote.saveReimbursement(payload);
        setReimbAmount(0);
        setreimbDescription('');
        setReimbReceipt('');
        setReimbAuthor(0);
        setReimbTypeId(0);
        // showReimbursements();
    }

    const handleSubmit = (e: { currentTarget: any; preventDefault: () => void; stopPropagation: () => void; }) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);
    };

    // const loadReimbursements = () => {
    //     reimbursementRemote.getReimbursementsByAuthorId(+JSON.parse(JSON.stringify(localStorage.getItem('reimbAuthorId'))))
    //     .then(reimbursements => {
    //         setReimbursements(reimbursements);
    //     });
    // }

    // const showReimbursements = () => {
    //     reimbursementRemote.getReimbursementsById(+JSON.parse(JSON.stringify(localStorage.getItem('userId'))))
    //     .then(reimbursements => {
    //         setReimbursements(reimbursements);
    //     });
    // }

    return (
        <div>
            <h1>Employee Portal</h1>
            <h2>Get All</h2>
            <table>
                <thead>
                    <th>#</th>
                    <th>Reimbursement Amount</th>
                    <th>Date Submitted</th>
                    <th>Date Resolved</th>
                    <th>Description</th>
                    <th>Receipt</th>
                    <th>Author</th>
                    <th>Status</th>
                    <th>Reimbursement Type</th>
                </thead>
                <tbody>
                    {reimbursements.map(row => {
                        return (
                            <tr>
                            <th></th>
                            <td>{row.reimbAmount}</td>
                            <td>{row.reimbSubmitted}</td>
                            <td>{row.reimbResolved}</td>
                            <td>{row.reimbDescription}</td>
                            <td>{row.reimbReceipt}</td>
                            <td>{row.reimbAuthorName}</td>
                            <td>{row.reimbStatus}</td>
                            <td>{row.reimbType}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>    
            <h2>Post Reimbursements</h2>
                <form onSubmit = {handleSubmit}>
                    <label>Amount</label>
                    <input></input>
                    <br />
                    <label>Description</label>
                    <input></input>
                    <br />
                    <label>Receipt</label>
                    <input></input>
                    <br />
                    {/* <label>Amount</label>
                    <input></input>
                    <br /> */}
                    <label>Type</label>
                    <input></input>
                    <br />
                </form>
                <button type="submit">Submit</button>
        </div>
    );
}

export default withRouter(EmployeeComponent);