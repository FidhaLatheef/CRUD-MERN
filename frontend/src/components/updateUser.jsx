import React from 'react'

function UpdateUser() {
  return (
    <div style={{ backgroundColor: "#e6e6e6" }} className='d-flex vh-100 justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3'>
      <form >
        <h2 className="text-center">Update User</h2>
        <div className='mb-2'>
          <label htmlFor='name'>Name: </label>
          <input
            type='text'
            id='name'
            name='name'

            className="form-control" />
        </div>
        <div className='mb-2'>
          <label htmlFor='address'>Address: </label>
          <input
            type='text'
            id='address'
            name='address'
            className="form-control"
            />
        </div>
        <div className='mb-2'>
          <label htmlFor='password'>Password: </label>
          <input
            type="password"
            name="password"
            className="form-control"
         
          />
        </div>
        <div className='mb-2'>
          <label htmlFor='name'>Mobile: </label>
          <input
            type='number'
            id='mobile'
            name='mobile'
      
            className="form-control" />
        </div>
        <div className='mb-2'>
          <label htmlFor='name'>Image: </label>
          <input
            type='file'
            id='image'
            name='image'
 
            className="form-control" />
        </div>
        <button type='submit' className='btn btn-success'>Update</button>

      </form>
    </div>
  </div>
  )
}

export default UpdateUser
