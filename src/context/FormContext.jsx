import { createContext, useState, useEffect } from "react";

const FormContext = createContext({})

export const FormProvider = ({ children }) => {
  
  const handleChange = e => {
    const type = e.target.type 
    const name = e.target.name 

    const value = type === "checkbox" 
      ? e.target.checked 
      : e.target.value 

      setData(prevData => ({
        ...prevData,
        [name]: value
      }))
  }

  return (
    <FormContext.Provider value = {{handleChange}}>
      {children}
    </FormContext.Provider>
  )
}

export default FormContext