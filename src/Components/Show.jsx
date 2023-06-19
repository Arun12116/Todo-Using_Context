import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import MyContext from './Context/MyContext'
import { useContext } from 'react'

const Show = () => {
    let { state, Delete } = useContext(MyContext)
    // console.log(state);
    return (
        <>
            <Box style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                {
                    state.map((items, index) => {
                        console.log(items);

                        return (

                            <>
                                <Heading p="5px">
                                    <Flex >
                                        {items}

                                        <Box>

                                            <Button colorScheme='green' size={"sm"} m={"5px"}>Edit</Button>
                                            <Button colorScheme='red' size={"sm"} onClick={() => Delete(index)}>
                                                Delete
                                            </Button>


                                        </Box>
                                    </Flex>

                                </Heading>

                            </>
                        )


                    })
                }


            </Box>
        </>
    )
}

export default Show