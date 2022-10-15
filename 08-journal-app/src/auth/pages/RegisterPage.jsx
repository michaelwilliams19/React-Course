import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Google } from "@mui/icons-material"
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
  return (
   <AuthLayout title="Crear cuenta">
      <form>
        <Grid container>
          <Grid item xs = {12}>
            <TextField label="Nombre completo" type='text' placeholder="Tu nombre" fullWidth/>
          </Grid>

          <Grid item xs = {12} sx={{mt: 2}}>
            <TextField label="Correo" type='email' placeholder="Correo@gmail.com" fullWidth/>
          </Grid>

          <Grid item xs = {12} sx={{mt: 2}}>
            <TextField label="Contraseña" type='password' placeholder="Contraseña" fullWidth/>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
          <Grid item xs={12}>
            <Button variant='contained' fullWidth >Crear cuenta</Button>
          </Grid>


          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to="/auth/login">
              <Typography sx={{mr: 1, mt: 1}}>¿Ya tienes cuenta?</Typography>
            </Link>
          </Grid>
        </Grid>
      </form>
   </AuthLayout>
  )
}

