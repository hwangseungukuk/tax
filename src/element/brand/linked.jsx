import React from 'react'
import { Outlet } from 'react-router-dom';

export default function linked()
{
    return(
        <div>
            <Outlet />
        </div>
    );
}