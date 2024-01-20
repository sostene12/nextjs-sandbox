import React, { ReactNode } from 'react';

interface Props{
    children:ReactNode;
}

const AdminLayout = ({ children }:Props) => {
  return (
    <div className='flex'>
        <aside className='bg-slate-200 mr-5 pr-5'>Admin sidebar</aside>
        <div>{children }</div>
    </div>
  )
}

export default AdminLayout