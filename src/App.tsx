import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/07/door-company-logo.jpg"/>
            </header>
            <nav className='nav'>
                <div>Profile</div>
                <div>Messages</div>
                <div>Music</div>
            </nav>
            <div className='content'>
                <div><img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJkHIXlWZwX8_MOjlmFPqY5kRRCayLbVVnqA&usqp=CAU'/>
                </div>
                <div>Ava+Description</div>
                <div>My posts
                    <div>New post</div>
                    <div>
                        <div>Post1</div>
                        <div>Post2</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default App;
