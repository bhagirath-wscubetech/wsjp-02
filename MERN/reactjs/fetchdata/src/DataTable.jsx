import React, { useState } from 'react';

const DataTable = (props) => {
    const tableRows = props.data.map(
        // (d, i) => <TableRow {...d} key={i} />
        (d, i) => <TableRow key={i} name={d.name} email={d.email} username={d.username} website={d.website} />
    )

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>User Name</th>
                    <th>Website</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.loading == true
                        ?
                        <tr className='text-center'>Loading...</tr>
                        :
                        tableRows
                }
            </tbody>
        </table>
    );
}

export default DataTable;


const TableRow = (props) => {
    return <tr>
        <td>{props.name}</td>
        <td>{props.email}</td>
        <td>{props.username}</td>
        <td>{props.website}</td>
    </tr>
}