import { Box, Input, Heading, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import MyContext from './Context/MyContext'
import { useContext } from 'react'

const Todo = () => {
    let {inpute, setInpute, Add}  = useContext(MyContext)

    return (
        <>
            <Box style={{
                display: "flex", justifyContent: "center", marginTop: "2rem",
                alignItems: "center", flexDirection: "column"
            }}>
                <Box>
                    <Heading>
                        To-Do-Application
                    </Heading>
                </Box>
                <Flex gap="1rem">
                    <Input placeholder='Enter Your Data' size='lg' width="30rem" mt="2rem" value={inpute} onChange={(e) => {
                        setInpute(e.target.value)
                    }} />
                    <Button colorScheme='blue' mt="2rem" size='lg' width="5rem" onClick={Add}>Add</Button>
                </Flex>

            </Box>

        </>
    )
}

export default Todo