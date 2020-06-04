import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import firebase from '../../firebase/firebase';

class Row extends Component {
    constructor(){
        super();

        this.state = {
            inputs: {
                displayName: '',
                description: '',
                link: '',
                type: '',
                id: ''
            }
        }
    }

    componentDidMount(){
        this.setState({
            inputs: {
                displayName: this.props.displayName,
                description: this.props.description,
                link: this.props.link,
                type: this.props.type,
                id: this.props.id
            }
        })
    }

    handleChange = (event) => {
        const { inputs } = this.state;
        inputs[event.target.name] = event.target.value;
        this.setState({ inputs });
    }

    onUpdate = () => {
        const {displayName, description, link, type} = this.state.inputs;

        const db = firebase.firestore();
        db.collection(this.props.location).doc(this.props.id).set({
            ...this.props, displayName, description, link, type
        });
    }

    onDelete = () => {
        const db = firebase.firestore();
        db.collection(this.props.location).doc(this.props.id).delete();

        setTimeout(() => {
            window.location.reload(false);
        }, 500);
    }

    render(){
        const {displayName, description, link, type, id} = this.state.inputs;

        return(
            <tr id={id}>
                <td className="row-title">
                    <TextField
                        variant="outlined"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                    />
                </td>
                <td className="row-description">
                    <TextField
                        variant="outlined"
                        name="description"
                        value={description}
                        onChange={this.handleChange}
                    />  
                </td>
                <td className="row-link">
                    <TextField
                        variant="outlined"
                        name="link"
                        value={link}
                        onChange={this.handleChange}
                    />
                </td>
                <td className="row-type">
                <FormControl variant="outlined">
                    <Select
                        value={type}
                        onChange={this.handleChange}
                        name="type"
                    >
                        <MenuItem value="event">Event</MenuItem>
                        <MenuItem value="fund">Fund</MenuItem>
                        <MenuItem value="organization">Organization</MenuItem>
                        <MenuItem value="petition">Petition</MenuItem>
                        <MenuItem value="resource">Resources</MenuItem>
                    </Select>
                </FormControl>
                </td>
                <td className="row-buttons">
                <Button variant="contained" size="medium" color="default" onClick={this.onUpdate}>Update</Button>
                <Button size="small" onClick={this.onDelete}>Delete</Button>
                </td>
            </tr>
        )
    }
}

export default Row