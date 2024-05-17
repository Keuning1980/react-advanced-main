import { useState } from "react";
import {useForm} from "react-hook-form"
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Text,

  
  } from "@chakra-ui/react";

export const Form = () => {
  const [inputValue, setInputValue] = useState(" ");
  const[ startTime,setStartTime]=useState ( "")

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="date" value={inputValue} onChange={handleChange} />
      <input type="time" value={inputValue} onChange={handleChange} />
      <input type="time" value={inputValue} onChange={handleChange} />
  

      <button type="Submit"> Add Event </button>
    </form>
  );
};
