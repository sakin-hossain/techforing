import { Container, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

const CreateJobs = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const inputStyle = {
        padding: "15px",
        width: "100%",
        margin:"15px 0"
    }
    const inputButton = {
        padding: "10px 24px",
        border: "none",
        background: "lightgreen"
    }
    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:5000/jobs',{
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
        .then(res => res.json()) 
        .then(result => {
          if(result.insertedId){
            alert("Jobs added");
            reset();
          }
        })
    };
    return (
        <Container sx={{mt:5}}>
            <Typography variant='h3' sx={{textAlign:"center"}}>Create A Job</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input style={inputStyle}
                {...register("name")}
                placeholder="name"
                />
                <br />
                <input style={inputStyle}
                {...register("vacancies")}
                placeholder="vacancies"
                />
                <br />
                <input style={inputStyle}
                {...register("shift")}
                placeholder="shift"
                />
                <br />
                <input style={inputStyle}
                {...register("type")}
                placeholder="type"
                />
                <br />
                <input style={inputStyle}
                {...register("salary")}
                placeholder="salary"
                />
                <br />

                <input style={inputStyle}
                {...register("postDate")}
                placeholder="Post Date"
                />
                <input style={inputStyle}
                {...register("expireDate")}
                placeholder="Expire Date"
                />
                <input style={inputStyle}
                {...register("status")}
                placeholder="status"
                />
                <textarea style={inputStyle}
                {...register("description")}
                placeholder="description"
                />
                <br />

                {errors.exampleRequired && <span>This field is required</span>}

                <input style={inputButton} type="submit" value="Add" />
            </form>
        </Container>
    );
};

export default CreateJobs;