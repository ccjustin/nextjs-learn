// use "rafce" extension to generate a React Arrow Function Component 
// css files cannot be created within this route
import React from 'react'

// defining a "type" User to provide structure for the 
// data coming in from fetch
interface User 
{
  id: number;
  name: string;
  email: string;
}

// pattern for avoiding use of state + hook
// also avoids an extra fetch to the server
const UserPage = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users',
    // {cache: 'no-store'} for data that changes frequently 
    // {next: {revalidate: 10}} to schedule updates on data
  );
  const users: User[] = await res.json();
  return (
    <>
      <h1>Users</h1>

      {/* 
      simulating static vs dynamic rendering
      if static data exists, the page will be rendered as static unless
      cache no-store is enabled
       */}
      <p>{new Date().toLocaleDateString()}</p>

      {/* can style using DaisyUI components such as table-borderd */}
      <table>
        <thead>
          <tr>
            <th> Name </th>
            <th> Email </th>
          </tr>
        </thead>

        {users.map(user => <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          </tr>)}
      </table>
    </>
  )
}

export default UserPage