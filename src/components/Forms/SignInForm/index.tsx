import signInSchema from "@/schemas/signInFormSchema";
import { Box, Button, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const SignInForm = () => {
    const form = useForm<z.infer <typeof signInSchema>>();
    const handleForm = (data: z.infer<typeof signInSchema>) => {
        console.log(data);
    }
    return (
        <Box component='form' onSubmit={form.handleSubmit(handleForm)} width='100%' p='1rem 2rem 2rem' display='flex' flexDirection='column' gap='2rem' alignItems='center'>
            {/* Email */}
            <Controller control={form.control} name="email" render={({ field, fieldState }) => (
                <TextField {...field} type="email" helperText={fieldState.error ? fieldState.error.message : ""} error={!!fieldState.error} label={'Email'} fullWidth variant="standard"  />
            )} />
            {/* Password  */}
            <Controller control={form.control} name="password" render={({field, fieldState}) => (
                <TextField {...field} type="password" label='Password' variant="standard" error={!!fieldState.error} helperText={fieldState.error ? fieldState.error.message : ""} fullWidth />
            )} />

            <Button type='submit' variant='contained' sx={{ maxWidth: '50%', width: '100%', color: 'white' }} >Sign In</Button>
        </Box>
    );
};

export default SignInForm;