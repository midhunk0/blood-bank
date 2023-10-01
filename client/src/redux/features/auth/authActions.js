// @ts-nocheck
import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";
import { toast } from "react-toastify"; 

//login
export const userLogin = createAsyncThunk(
    "auth/login",
    async ({role, email, password}, {rejectWithValue}) => {
        try{
            const { data } = await API.post("/auth/login", {role, email, password})
            //store token
            if(data.success){
                localStorage.setItem("token", data.token)
                toast.success(data.message)
                window.location.replace("/")
            }
            return data
        }
        catch(error){
            if(error.response && error.response.data.message){
                return rejectWithValue(error.response.data.message)
            }
            else{
                return rejectWithValue(error.message)
            }
        }
    }
)

//register
export const userRegister = createAsyncThunk(
    "auth/register",
    async ({
        role, 
        name, 
        email,
        password, 
        organisation, 
        hospital, 
        website, 
        address, 
        phone}, {rejectWithValue}) => {
            try{
                const { data } = await API.post("/auth/register", {
                    role, 
                    name, 
                    email,
                    password, 
                    organisation, 
                    hospital, 
                    website, 
                    address, 
                    phone
                })
                if(data.success){
                    toast.success(data.message)
                    window.location.replace("/login")
                }
            }
            catch(error){
                console.log(error)
                if(error.response && error.response.data.message){
                    return rejectWithValue(error.response.data.message)
                }
                else{
                    return rejectWithValue(error.message)
                }
            }
    }
)