import React, { useState } from "react";
import { Card, Alert, Button } from "react-bootstrap";
import { useAuth } from "./../contexts/AuthContext";
import { Link } from "react-router-dom";
const Dashboard = () => {
    const [error, setError] = useState('');
    const { currentUser, logout } = useAuth();
    const handleLogout = async () => {
        setError('')
        try {

        } catch (error) {
            setError(error)
        }
    }
    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Profile</h2>
                    {error ? <Alert variant='danger'>{JSON.stringify(error)}</Alert> : ""}
                    <strong>Email: </strong>
                    {currentUser.email}
                    <Link to="/profile" className='btn btn-primary w-100 mt-3'> Update </Link>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                <Button variant="Link" onClick={handleLogout}>Log Out</Button>
            </div>
        </div>
    )
}

export default Dashboard;