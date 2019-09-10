import React from 'react';
import { Api, Axios } from '../../utils';
import StoriesList from '../../components/StoriesList';

export default class extends React.Component {
    state = {
        stories: []
    };

    componentDidMount() {
        Axios.get(Api.latest).then(( { data: { stories } } ) => {
            this.setState({
                stories
            })
        })
    }

    render() {
        return (
            <StoriesList
                data={this.state.stories}
            >

            </StoriesList>
        )
    }
}
