
import React from 'react'
import { useForm } from '../hooks/useForm';

const initialForm = {};

const validationForm = form => {};

const ContactForm = () => {
   const {
      form,
      error,
      loading,
      response,
      handleBlur,
      handleChange,
      handleSubmit
   } = useForm( initialForm, validationForm );
   return (
      <>
         <h2>ContactForm</h2>
         <form onSubmit={handleSubmit}>
            <input
               type='text'
               name='name'
               placeholder='Escribe tu nombre'
               onBlur={handleBlur}
               onChange={handleChange}
               value={form.name}
               required
            />
            <input
               type='email'
               name='email'
               placeholder='Escribe tu correo'
               onBlur={handleBlur}
               onChange={handleChange}
               value={form.email}
               required
            />
            <input
               type='text'
               name='subject'
               placeholder='Asunto a tratar'
               onBlur={handleBlur}
               onChange={handleChange}
               value={form.subject}
               required
            />
            <textarea
               name='comments'
               cols='50'
               rows='5'
               value={form.comments}
               placeholder='Escribe tus comentarios'
            ></textarea>
            <input type='submit' value='Enviar'></input>
         </form>
      </>
   )
}

export default ContactForm;
