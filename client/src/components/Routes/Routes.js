import { Route, Routes } from 'react-router-dom'

import Form from '../Form/Form'
import FormData from '../FormData/FormData'
import User from '../User/User'
import EditUser from '../editUser/EditUser'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/register' element={ <Form /> } />
            <Route path='/users' element={ <FormData /> } />
            <Route path='/users/:id' element={ <User /> } />
            <Route path='/users/edit/:id' element={ <EditUser /> } />
        </Routes>
    )
}