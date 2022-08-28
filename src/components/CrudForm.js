
import React, { useState, useEffect } from "react";

const initialForm = {
  id: null,
  name: '',
  poder: 0
}


function CrudForm({ createData, updateData, dataToEdit, setDataToEdit }) {

  const [form, setForm] = useState( initialForm );


  useEffect(() => {
    if ( dataToEdit ) {
      setForm( dataToEdit )
    } else {
      setForm( initialForm )
    }
  }, [ dataToEdit ])

  const handlerChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handlerSubmit = e => {
    e.preventDefault();
    if ( !form.name || !form.poder ) {
      alert('Campos incompletos');
      return;
    }
    if ( form.id === null ) {
      createData( form )
    } else {
      updateData( form )
    }
    handlerReset();
  }

  const handlerReset = e => {
    setForm( initialForm );
    setDataToEdit( null )
  }


  return (
    <>
      <h3>{dataToEdit ? 'Editar' : 'Agregar'}</h3>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handlerChange}
          value={form.name}
        />
        <input
          type="text"
          name="poder"
          placeholder="Poder"
          onChange={handlerChange}
          value={form.poder}
        />
        <input type="submit" value="Enviar"/>
        <input type="reset" onClick={handlerReset} value="Limpiar formulario"/>
      </form>
    </>
  )
}

export default CrudForm;
