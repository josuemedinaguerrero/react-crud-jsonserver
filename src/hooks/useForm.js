
import React, { useState } from 'react'

export const useForm = ( initialForm, validateForm ) => {

   const [form, setform] = useState( initialForm );
   const [error, seterror] = useState({});
   const [loading, setloading] = useState( false );
   const [response, setresponse] = useState(null);

   const handleChange = e => {

   }

   const handleBlur = e => {

   }

   const handleSubmit = e => {

   }

   return {
      form,
      error,
      loading,
      response,
      handleChange,
      handleBlur,
      handleSubmit
   }

}
