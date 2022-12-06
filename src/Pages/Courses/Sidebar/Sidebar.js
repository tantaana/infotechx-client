import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://infotechx-server.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data))


    })

    return (
        <div className='py-5 sideDesign sticky-top'>
            <h3 className='text-center'>Your tech related courses are here! 💥</h3>

            <div className='p-2'>
                {
                    courses.map(course => <h4 className='m-3' key={course.id}><Link to={`/courses/${course.id}`} className='text-decoration-none allname'>✔️ {course.name}</Link></h4>)
                }
            </div>
        </div>
    );
};

export default Sidebar;