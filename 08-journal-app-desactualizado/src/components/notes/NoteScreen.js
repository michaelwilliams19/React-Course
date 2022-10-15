import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  const dispatch = useDispatch();

  const { activeNote } = useSelector(state => state.notes);

  const [formValues, handleInputChange, reset] = useForm(activeNote);

  //Desde aca
  const activeId = useRef(activeNote.id)

  useEffect(() => {
    if (activeNote.id !== activeId.current)
    {
      reset(activeNote);
      activeId.current = activeNote.id;
    }
  
  }, [activeNote, reset])
  //Hasta aca: Esta parte se hace para que actualice el ID de la nota al seleccionar otra y asi poder actualizar los datos como por ej el titulo, cuerpo, etc.
  //De lo contrario, siempre me va a estar mostrand la info de la primer nota seleccionada.
 
  return (
    <div className="notes__main-content">
        
        <NotesAppBar />

        <div className="notes__content">
            <form>
                <input type="text" placeholder="Titulo de la nota" className="notes__title-input" value={formValues.title} onChange={handleInputChange}/>
                <hr />
            </form>

            <textarea placeholder="Explayate..." className="notes__textarea mt-5" value={formValues.body} onChange={handleInputChange}></textarea>

            { 
              activeNote.url
              && 
                (<div className="notes__image">
                    <img src="https://www.ngenespanol.com/wp-content/uploads/2018/08/La-primera-imagen-de-la-historia-770x413.jpg" alt="imagen"/>
                </div>)
            }
        </div>

    </div>
  )
}
