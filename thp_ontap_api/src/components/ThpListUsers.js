import React from 'react'

export default function ThpListUsers({renderThpListUsers}) {
    console.log("ThpListUsers:",renderThpListUsers);
    //Hien thi du lieu
    let thpElementUser = renderThpListUsers.map((thpUser,index)=>{
        return(
            <>
             <tr>
                    <td>{thpUser.id}</td>
                    <td>{thpUser.UserName}</td>
                    <td>{thpUser.Password}</td>
                    <td>{thpUser.Email}</td>
                    <td>{thpUser.Phone}</td>
                    <td>...</td>

                </tr>
            </>
        )
    })


  return (
    <div className='row '>
       <div className='col-md-12'>
       <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>UserName</th>
                    <th>Password</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Chuc nang</th>
                </tr>
            </thead>
            <tbody>
                {thpElementUser}
            </tbody>
        </table>
       </div>
      
    </div>
  )
}
