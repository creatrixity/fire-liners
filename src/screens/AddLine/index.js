import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box, Flex, Label, Select, RedButton, Text } from 'pcln-design-system';
import { ScaleLoader } from 'react-spinners';
import Textarea from '../../components/Form/Textarea';
import { addLiner } from '../Home/actions';
import { addNotification } from '../../containers/App/actions';
import { getAppState } from '../../containers/App/reducer';

class AddLine extends Component {
    constructor (props) {
        super(props);
        this.state = {
            author: 'Immortal Technique',
            body: 'The genesis of genocide is like a pagan religion, carefully interwoven  into the holidays of a Christian.',
            isSubmitting: false
        }
    }

    render () {
        let authors = this.props.authors.map((author, index) => (
            <option value={author.name} key={index}>{ author.name }</option>
        ));

        return (
            <Flex mt={4} justify="center" alignItems="center">
                <Flex flexDirection="column" width={[ 0.8, 0.8, 0.5 ]}>
                    <Text bold mb={3} fontSize={3}>Add. The Dopest Lines. Ever.</Text>
                    <Box mb={3}>
                        <form onSubmit={e => this.handleSubmit(e)}>
                            <Flex flexDirection="column" mb={3}>
                                <Label mb={2}>Author</Label>
                                <Select onChange={e => this.setState({
                                    author: e.target.value
                                })} placeholder="Which cat dropped this line?" value={this.state.author}>
                                {authors}
                                </Select>
                            </Flex>

                            <Flex flexDirection="column" mb={3}>
                                <Label mb={2}>Lyrics</Label>
                                <Textarea rows={7} value={this.state.body} onChange={e => this.setState({
                                    body: e.target.value
                                })} placeholder="Spit that line here, dawg..."></Textarea>
                            </Flex>

                            <RedButton
                                disabled={this.state.isSubmitting}
                                type="submit">
                                {
                                    !this.state.isSubmitting ?
                                    <span>Save and go back</span>:
                                    <Flex>
                                        <Text mr={2}>Submitting</Text>

                                        <ScaleLoader
                                          color={'#fff'}
                                          height={17}
                                          loading={true}
                                        />
                                    </Flex>
                                }
                            </RedButton>
                        </form>
                    </Box>
                </Flex>
            </Flex>
        )
    }

    handleSubmit (e) {
        e.preventDefault();
        this.setState({
            isSubmitting: true
        })
        setTimeout(() => {
            let newID = this.props.liners.reduce((maxId, liner) => Math.max(maxId, liner.id), 0) + 1;

            this.props.addLiner({
                id: newID,
                author: this.state.author,
                body: this.state.body
            })
            this.props.addNotification({
                type: 'info',
                message: 'Added new liner.'
            })
            this.props.history.push('/')
        }, 3500)

    }
}

const mapStateToProps = (state) => {
    return {
        liners: getAppState(state).get('liners').toJS(),
        authors: getAppState(state).get('authors')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addLiner: data => dispatch(addLiner(data)),
        addNotification: data => dispatch(addNotification(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddLine);
