import { createSlice,nanoid } from "@reduxjs/toolkit";
import {toast} from 'react-toastify'


const initialState = {
    students:[
        {id:1,Name:"Ganesh",Department:"CSE",Year:"2022"},
        {id:2,Name:"Mahesh",Department:"CSE",Year:"2022"}
    ]
}

const studentReducer = createSlice({
    name : 'students',
    initialState,
    reducers:{
        addTask(state,action){
            const {name,department,year} = action.payload;
            state.students.push({
                id: nanoid(),
                Name:name,
                Department:department,
                Year:year,
            });
            toast.success("Successfully Added",{position:"top-right", autoClose:"1"})
        },
        removeTask(state,action){
            state.students = state.students.filter(student => student.id !== action.payload);
            toast.success("Removed Successfully",{position:"top-right", autoClose:"1"})
        },
        editTask(state,action){
           const {id,name,department,year} = action.payload;
           const existingStudent = state.students.find(student => student.id === id);
           if(existingStudent){
            existingStudent.Name = name;
            existingStudent.Department = department;
            existingStudent.Year= year;
           }
           toast.success("Edited Successfully",{position:"top-right", autoClose:"1"})
        },
    },
    
});

export const {addTask,removeTask,editTask}  = studentReducer.actions;

export default studentReducer.reducer;
