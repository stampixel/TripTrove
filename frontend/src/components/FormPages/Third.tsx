import React from "react";
import { Dispatch, SetStateAction,useEffect } from "react";
import {
  Flex,
  Heading,
  Text,
  Input,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";

import { FormValues } from "../MultiStepForm";
import Fade from "react-reveal/Fade"

type ThirdProp = {
  forms: FormValues;
  setFormData: Dispatch<SetStateAction<FormValues>>;
  transition:boolean;
  timeout:Number;
  setDisabled:Dispatch<SetStateAction<boolean>>;

};

const Third: React.FC<ThirdProp> = ({ forms, setFormData,transition,timeout,setDisabled }) => {
 
 useEffect(()=>{
  if(forms.adults && forms.children && forms.startDate && forms.endDate){
    setDisabled(false)
  }
  else{
    setDisabled(true)
  }
 },[forms])

  return (
    <Fade right>
    <Flex direction="column" align="center">
      <Flex direction="column" width="100%" mt={3}>
        <Text fontWeight={800} mb={1} color="#54C4D6" textAlign="center" >How Many Adults?</Text>
        <NumberInput
            value={forms.adults}
            onChange={(e: any) =>{
              setFormData(f => ({ ...f, adults: parseInt(e || "0") }))}
            }
        >
          <NumberInputField
            boxShadow=" 0px 2px 3px #ccc"
            borderBottom="0.25em solid #c6be9f"
            borderTop="1px solid #ffffff"
            bg="#ffffff"
            outline="none"
            borderColor="transparent"
            borderRadius="20px"
            outlineColor="transparent"
            fontSize={16}
            _focus={{
              // outline: "none",
              border: "1px solid #ffffff",
              boxShadow: "none",
            }}
            _hover={{
              outline: "none",
            }}
          />
        </NumberInput>
      </Flex>
      <Flex direction="column" width="100%" mt={3}>
        <Text fontWeight={800} mb={1} color="#54C4D6" textAlign="center" >How Many Children?</Text>
        <NumberInput
            value={forms.children}
            onChange={(e: any) =>
              setFormData(f => ({ ...f, children: parseInt(e || "0") }))
            }
        >
          <NumberInputField
            boxShadow=" 0px 2px 3px #ccc"
            borderBottom="0.25em solid #c6be9f"
            borderTop="1px solid #ffffff"
            bg="#ffffff"
            outline="none"
            borderColor="transparent"
            borderRadius="20px"
            outlineColor="transparent"
            fontSize={16}
            _focus={{
              // outline: "none",
              border: "1px solid #ffffff",
              boxShadow: "none",
            }}
            _hover={{
              outline: "none",
            }}
          />
        </NumberInput>
      </Flex>
      <Flex direction="column" width="100%" mt={3}>
        <Text fontWeight={800} mb={1} color="#54C4D6" textAlign="center" >When are you planning on going?</Text>
        <Flex direction="row" align="center">
          <Text mr={2}>From </Text>
          <Input
            boxShadow=" 0px 2px 3px #ccc"
            borderBottom="0.25em solid #c6be9f"
            borderTop="1px solid #ffffff"
            bg="#ffffff"
            outline="none"
            borderColor="transparent"
            borderRadius="20px"
            outlineColor="transparent"
            fontSize={16}
            _focus={{
              // outline: "none",
              border: "1px solid #ffffff",
              boxShadow: "none",
            }}
            _hover={{
              outline: "none",
            }}
            w="50%"
            type="datetime-local"
            mr={2}
            value={forms.startDate}
            onChange={(e: any) => {
              setFormData(f => ({
                ...f,
                startDate: e.target.value,
              }));
            }}
          />
          <Text mr={2}>To:</Text>
          <Input
            boxShadow=" 0px 2px 3px #ccc"
            borderBottom="0.25em solid #c6be9f"
            borderTop="1px solid #ffffff"
            bg="#ffffff"
            outline="none"
            borderColor="transparent"
            borderRadius="20px"
            outlineColor="transparent"
            fontSize={16}
            _focus={{
              // outline: "none",
              border: "1px solid #ffffff",
              boxShadow: "none",
            }}
            _hover={{
              outline: "none",
            }}
            w="50%"
            type="datetime-local"
            mr={2}
            value={forms.endDate}
            onChange={(e: any) => {
              setFormData(f => ({ ...f, endDate: e.target.value }));
            }}
          />
        </Flex>
      </Flex>
    </Flex>
    </Fade>
  );
};

export default Third;
