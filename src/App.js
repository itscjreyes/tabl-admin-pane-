import React, {Component} from 'react';
import firebase from './firebase/firebase';
import Table from './Components/Table/table.component';
import './App.scss';
import { Loader } from './Components/Loader/loader.component';
import NewRow from './Components/Row/new-row.component';
import FiltersWrapper from './Components/Filters-Wrapper/filters-wrapper.component';

class App extends Component {
  constructor(){
    super()

    this.state = {
      isLoading: true,
      data: [],
      location: 'toronto'
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
      isLoading: false
    })
  }

  componentDidMount(){
    this.fetchData('toronto');
  }

  render(){
    const {data, location, isLoading} = this.state;
    console.log(data)

    return (
      <div>
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
            data={data}
          />
        }
        <NewRow 
          location={location}
        />
      </div>
    )
  }
}

export default App;