import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import firebase from '../../firebase/firebase';

class NewRow extends Component {
    constructor(){
        super();

        this.state = {
            inputs: {
                displayName: '',
                description: '',
                link: '',
                type: ''
            },
            modalOpen: false
        }
    }

    openModal = () => {
        this.setState({
            modalOpen: true
        })
    }

    closeModal = () => {
        this.setState({
            modalOpen: false
        })
    }

    handleChange = (event) => {
        const { inputs } = this.state;
        inputs[event.target.name] = event.target.value;
        this.setState({ inputs });
    }

    onCreate = (e) => {
        e.preventDefault();

        const {displayName, description, link, type} = this.state.inputs;
        
        const db = firebase.firestore();
        db.collection(this.props.location).add({
            displayName: displayName,
            description: description,
            link: link,
            type: type
        });

        setTimeout(() => {
            window.location.reload(false);
        }, 500);
    }

    render(){
        const {displayName, description, link, type} = this.state.inputs;
        const modalState = this.state.modalOpen ? 'open' : '';

        return(
            <div className="form-section">
                <Button variant="contained" size="large" color="primary" onClick={this.openModal}>Add New Item</Button>
                <div className={`form-modal ${modalState}`}>
                    <div className="form-wrapper">
                        <button className="close" onClick={this.closeModal}>
                            <span></span><span></span>
                        </button>
                        <h3>Add a New Item</h3>
                        <form onSubmit={this.onCreate}>
                            <TextField
                                variant="outlined"
                                name="displayName"
                                label="Title"
                                value={displayName}
                                onChange={this.handleChange}
                                required
                            />
                            <TextField
                                variant="outlined"
                                name="description"
                                label="Description"
                                value={description}
                                onChange={this.handleChange}
                                required
                            />  
                            <TextField
                                variant="outlined"
                                name="link"
                                label="Link"
                                value={link}
                                onChange={this.handleChange}
                                required
                            />
                            <FormControl required variant="outlined">
                                <InputLabel id="select-type">Type</InputLabel>
                                <Select
                                    labelId="select-type"
                                    value={type}
                                    onChange={this.handleChange}
                                    name="type"
                                >
                                    <MenuItem value="event">Event</MenuItem>
                                    <MenuItem value="fund">Fund</MenuItem>
                                    <MenuItem value="organization">Organization</MenuItem>
                                    <MenuItem value="petition">Petition</MenuItem>
                                    <MenuItem value="resources">Resources</MenuItem>
                                </Select>
                            </FormControl>
                            <Button variant="contained" size="large" color="primary" type="submit">Add</Button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewRow;