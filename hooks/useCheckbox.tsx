"use client"
import { useState } from 'react'

export const useCheckbox = () => {
    const [checkboxValue, setValue] = useState(false);
    const handleChangeCheckbox = () => {
      setValue(!checkboxValue);
    };
    return { checkboxValue, handleChangeCheckbox}
}
