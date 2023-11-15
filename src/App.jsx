import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
const App = () => {

	const { handleSubmit, register } = useForm({ mode: "onBlur" })
	const [formValues, setFormValues] = useState({})

	return <>
		<Box justifyContent='center' display='flex'>
			<form onSubmit={handleSubmit(data => { console.log('==========data==========>', data); setFormValues(data) })}>
				<Paper elevation={3} sx={{ display: 'flex', justifyContent: 'center' }}>
					<Grid container justifyContent='center' alignContent='center' minHeight='100vh' width='800px' spacing={2} p={5}>
						<Typography variant="h4" color='primary'>Login prueba fuego xD</Typography>
						<Grid item xs={12}>
							<TextField fullWidth name='user' variant="outlined" placeholder="user" {...register('user', { required: true })} />
						</Grid>
						<Grid item xs={12}>
							<TextField fullWidth name='password' variant="outlined" placeholder="password" {...register('password', { required: true })} />
						</Grid>
						<Grid item xs={12}>
							<Button fullWidth variant="contained" type="submit">
								Ingresar
							</Button>
						</Grid>
						<Grid item xs={12}>

							{
								JSON.stringify(formValues, null, 4)
							}
						</Grid>
					</Grid>
				</Paper>
			</form>
		</Box>
	</>

};
ReactDOM.render(<App />, document.getElementById("app"));
