import React from 'react'
import { Outlet } from 'react-router-dom';

export default function privacyStatement()
{
    return(
        <div>
            <Outlet />
        </div>
    );
}