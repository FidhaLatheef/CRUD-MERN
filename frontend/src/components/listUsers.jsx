import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"


function listUsers() {
    return (
        <div style={{ backgroundColor: "#e6e6e6" }} className='d-flex vh-100 justify-content-center align-items-center'>
            <div className='w-70 bg-white rounded p-3'>
                <button className='btn btn-success'>Add +</button>
                <table className='table'>
                    <thead>
                        <tr>
                            <th className='fw-bold' scope="col">Image</th>
                            <th className='fw-bold' scope="col">Name</th>
                            <th className='fw-bold' scope="col">Mobile</th>
                            <th className='fw-bold' scope="col">Address</th>
                            <th className='fw-bold' scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src='' alt="" width='40px' height='4' /></td>
                            <td>John Doe</td>
                            <td>+91786268765</td>
                            <td>Mumbai, India</td>
                            <td>
                                <div className="d-flex gap-2">
                                    <button className='btn btn-warning'>Update</button>
                                    <button className='btn btn-danger'>Delete</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default listUsers
