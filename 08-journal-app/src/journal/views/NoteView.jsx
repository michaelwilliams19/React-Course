import { Button, Grid, TextField, Typography } from '@mui/material'
import { SaveOutlined } from '@mui/icons-material';
import React from 'react'
import { ImageGallery } from '../components';

export const NoteView = () => {
  return (
    //box es como div. G
    //Grid permite definir elementos internamente. jugar con su orden, alineamiento, etc. Permite organizar mejor que un box.
    <Grid container direction='row' justifyContent='space-between' align-items='center' sx={{ mb: 1}}>
        <Grid item>
            <Typography fontSize={39} fontWeight='light'> 28 de agosto, 2022</Typography>
        </Grid>

        <Grid item>
            <Button color="primary" sx={{ padding: 2}}>
                <SaveOutlined sx={{fontSize: 30, mr: 1}}/>
                Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField type="text" variant="filled" fullWidth placeholder='Ingrese un título.' label="Título" sx={{ border: 'none', mb: 1}} />

            <TextField type="text" variant="filled" fullWidth multiline placeholder='Que paso hoy?' label="Descripción" sx={{ border: 'none', mb: 1}} minRows={5}/>

        </Grid>

        <ImageGallery />
    </Grid>
  )
}
