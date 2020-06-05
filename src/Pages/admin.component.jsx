import React, {Component} from 'react';
import firebase from '../firebase/firebase';
import Table from '../Components/Table/table.component';
import { Loader } from '../Components/Loader/loader.component';
import FiltersWrapper from '../Components/Filters-Wrapper/filters-wrapper.component';
import Button from '@material-ui/core/Button';

class Admin extends Component {
  constructor(){
    super()

    this.state = {
      isLoading: true,
      data: [],
      location: 'toronto',
    }

    this.onLocationChange = this.onLocationChange.bind(this);
  }

  onLocationChange(e){
    const selectedLocation = e.value;

    this.setState({
      location: selectedLocation
    })

    this.fetchData(selectedLocation);
  }

  fetchData = async(location) => {
    this.setState({
      isLoading: true
    })

    const db = firebase.firestore()
    const dataRaw = await db.collection(location).get()
    const data = dataRaw.docs.map(doc => ({...doc.data(), id: doc.id}));
    this.setState({
      data: data,
      isLoading: false,
    })
  }

  componentDidMount(){
    this.fetchData('toronto');
  }

  render(){
    const {data, location, isLoading} = this.state;

    const sortedData = data.sort((a, b) => (a.displayName > b.displayName) ? 1 : -1);
    

    return (
      <div className="admin">
          <div className="title-wrapper">
            <h1>TABL - Admin Panel</h1>
            <Button variant="contained" size="small" color="default" onClick={() => firebase.auth().signOut()}>Sign Out</Button>
          </div>
          <div className="container">
            <FiltersWrapper
            location={location}
            handleLocationChange={this.onLocationChange}
            />
            {
            isLoading ?
            <Loader />
            :
            <Table 
                location={location}
                data={sortedData}
            />
            }
          </div>
      </div>
    )
  }
}

export default Admin;