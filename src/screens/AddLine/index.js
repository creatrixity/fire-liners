import React, { Component } from 'react';
import { Box, Flex, Input, Label, RedButton, Text } from 'pcln-design-system';
import Textarea from '../../components/Form/Textarea';

class AddLine extends Component {
    render () {
        return (
            <Flex mt={4} justify="center" alignItems="center">
                <Flex flexDirection="column" width={[ 0.8, 0.8, 0.5 ]}>
                    <Text bold mb={3} fontSize={3}>Add. The Dopest Lines. Ever.</Text>
                    <Box mb={3}>
                        <Flex flexDirection="column" mb={3}>
                            <Label mb={2}>Author</Label>
                            <Input id="author" placeholder="Which cat dropped this line?" />
                        </Flex>

                        <Flex flexDirection="column" mb={3}>
                            <Label mb={2}>Lyrics</Label>
                            <Textarea rows={7} placeholder="Spit that line here, dawg..."></Textarea>
                        </Flex>

                    </Box>
                    <RedButton>Save and go back</RedButton>
                </Flex>
            </Flex>
        )
    }
}


export default AddLine;
