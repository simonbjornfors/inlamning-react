import React from 'react';
import { TodoList } from '../components';
import "../css/style.css"

const Home = () => {
    return (
        <div className='App-body'>
            <h2>TodoList</h2>
            <TodoList />
        </div>
    );
}

export default Home;
