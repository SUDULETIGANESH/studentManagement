import { useEffect, useState, useRef} from 'react';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../rtk/Reducers';
import './basicForm.css';


function BasicForm({selectedStudent,setSelectedStudent}){
    const [name,setName] = useState('');
    const [department,setDepartment] = useState('');
    const [year,setYear] = useState('');
    const inputValue = useRef(null);
    const dispatch = useDispatch();
    const presentData = new Date().getFullYear();

    useEffect(()=>{
        inputValue.current.focus();
    },[])

    const formbtn = name.trim() !== '' && department.trim() !=='' && year.trim() !== '' && year.length === 4 && year <= presentData - 1 && year > presentData - 10 ;

    useEffect(()=>{
        if(selectedStudent){
            setName(selectedStudent.Name);
            setDepartment(selectedStudent.Department);
            setYear(selectedStudent.Year)
        }  
    },[selectedStudent]);

    const handleSubmit = (e)=>{
        e.preventDefault()

        if(selectedStudent){
            dispatch(editTask({id:selectedStudent.id , name, department,year}))
            setSelectedStudent(null);
        }
        else{
            dispatch(addTask({name,department,year}));
        }
        setName('')
        setDepartment('')  
        setYear('')
    };

    return(
        <div className='basicform'>
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    value={name}
                    ref={inputValue}
                    placeholder="Name"
                    required
                    className='namefield'
                    onChange = {e => {setName(e.target.value)}}
                />
                <select id='department' value={department} onChange={e => {setDepartment(e.target.value)}}>
                    <option value="empty">Select Department</option>
                    <optgroup label='CSE'>
                        <option value="AI">AI</option>
                        <option value="ML">ML</option>
                        <option value="DataScience">DataScience</option>
                    </optgroup>
                    <option value="ECE">ECE</option>
                    <option value="EEE">EEE</option>
                    <option value="CIVIL">CIVIL</option>
                    <option value="MECH">MECH</option>
                </select>
                <input 
                    type='year' 
                    value={year}
                    placeholder='passout Year'
                    className='yearfield'
                    onChange={e => {setYear(e.target.value)}}
                    />
                {formbtn && <button className='formbtn' type='submit'>{selectedStudent?"Edit Details":"Add Student"}</button>}
            </form>
           
        </div>
    )
}

export default BasicForm;