import { useState } from 'react';
import BasicForm from '../Components/basicForm';
import { removeTask } from '../rtk/Reducers';
import { useDispatch, useSelector } from 'react-redux';
import './studentList.css'

function StudentList(){
    const students = useSelector(state=>state.students.students);
    const [selectedStudent,setSelectedStudent] = useState(null);
    const dispatch = useDispatch();

    const handleEdit = (student)=>{
        setSelectedStudent(student);
    }
    const handleRemove = (id)=>{
        dispatch(removeTask(id));
    }

    return(
        <div className='displaypage'>  
            <BasicForm selectedStudent={selectedStudent} setSelectedStudent ={setSelectedStudent} />
            {students.map(student =>(
                <div className='ulElement'>
                    <ul key={student.id} >
                            <li>{student.Name}</li>
                            <li>{student.Department}</li>
                            <li>{student.Year}</li>
                            <li><button className='editbtn' onClick={()=>handleEdit(student)}>Edit</button></li>
                            <li><button className='removebtn' onClick={()=>handleRemove(student.id)}>Remove</button></li>
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default StudentList;