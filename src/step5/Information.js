import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom'
<<<<<<< HEAD
import Form from '../step6/Form'
import Table from '../step6/Table'
=======
import RequestForm from '../step6/RequestForm'
import ListTable from '../step6/ListTable'
>>>>>>> bed0e0c8f429c7cdda471992fca2af557ed94cc4

class Information extends Component {
    constructor(props) {
        super(props);
        this.state = {
<<<<<<< HEAD
            characters: [
                {name: 'Hello world', 'job': "William Jiang"}
=======
            requests: [
                {
                    name: 'Chinasoft Employee',
                    fDate: new Date().toDateString(),
                    tDate: new Date().toDateString(),
                    reason: 'Medical check',
                    status: 'Approved'
                },
                {
                    name: 'HSBC Employee',
                    fDate: new Date().toDateString(),
                    tDate: new Date().toDateString(),
                    reason: 'Technical Training',
                    status: 'Not Approved'
                }
>>>>>>> bed0e0c8f429c7cdda471992fca2af557ed94cc4
            ]
        };
    }

<<<<<<< HEAD
    removeCharacter = index => {
        const {characters} = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
=======
    removeRequest = index => {
        const {requests} = this.state;

        this.setState({
            requests: requests.filter((character, i) => {
>>>>>>> bed0e0c8f429c7cdda471992fca2af557ed94cc4
                return i !== index;
            })
        });
    };

    handleSubmit = character => {
        if (character) {
<<<<<<< HEAD
            this.setState({characters: [...this.state.characters, character]});
=======
            this.setState({requests: [...this.state.requests, character]});
>>>>>>> bed0e0c8f429c7cdda471992fca2af557ed94cc4
        }
    };

    render() {
        const {match} = this.props;
        return (
            <div>
                <div>
<<<<<<< HEAD
                    <Link to={`${match.url}/request`}>Request</Link>&nbsp;|&nbsp;
                    <Link to={`${match.url}/list`}>List</Link>
                </div>
                <Route path={`${match.url}/request`} component={Form}/>
                <Route
                    path={`${match.url}/list`}
                    render={(routeProps) => (
                        <Table
                            characterData={this.state.characters}
                            removeCharacter={this.removeCharacter}
=======
                    <Link to={`${match.url}/request`}>On Leave Request</Link>&nbsp;|&nbsp;
                    <Link to={`${match.url}/list`}>List</Link>
                </div>
                <Route path={`${match.url}/request`} component={RequestForm}/>
                <Route
                    path={`${match.url}/list`}
                    render={(routeProps) => (
                        <ListTable
                            requests={this.state.requests}
                            removeRequest={this.removeRequest}
>>>>>>> bed0e0c8f429c7cdda471992fca2af557ed94cc4
                            {...routeProps}
                        />
                    )}
                />
                <Route
                    exact
                    path={match.url}
                    render={() => <h3>Please select a topic.</h3>}
                />
            </div>
        )
    }
}


export default Information;
