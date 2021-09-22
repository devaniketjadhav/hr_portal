import { Component } from 'react';
import '../css/search.css';
import { Employee } from './employee';

export class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchValue: null,
            errorMessage: '',
            employeeData: [],
            searchResult: []
        };
        this.searchEmployees = this.searchEmployees.bind(this);
        this.setSearchValue = this.setSearchValue.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
    };

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => this.setState({employeeData : json}))
            .catch(err => console.log(err))
    }

    searchEmployees = () => {
        if(this.state.employeeData.length === 0){
            this.setState({errorMessage:'Data is currently unavailable!'});
        } else {
            this.setState({errorMessage:''});
            let filteredEmployees = [];

            this.state.employeeData.map(employee => {
                if(employee.name.toLowerCase().includes(this.state.searchValue.toLowerCase()) ||
                employee.address.city.toLowerCase().includes(this.state.searchValue.toLowerCase()))
                filteredEmployees.push(employee);
            });

            if(filteredEmployees.length === 0) 
                this.setState({errorMessage:'No matching results!'});
            else
                this.setState({searchResult: filteredEmployees});
        }
    };

    setSearchValue = (e) => {
        this.setState({
            searchValue: e.target.value
        });
    };

    clearSearch = () => {
        this.setState({
            searchValue: null,
            errorMessage: '',
            searchResult: []
        })
    }

    render(){
        return (
            <>
                <div className='search'>
                    <input 
                        className='searchbar' 
                        placeholder='Enter employee name or city' 
                        onChange={this.setSearchValue}
                    />
                    <button 
                        className='searchSubmit' 
                        value={this.state.searchValue} 
                        onClick={this.searchEmployees}
                    >Search</button>
                    <button className='searchClear' onClick={this.clearSearch}>Clear</button>
                </div>
                <div className='searchError'
                    style={{'display': (this.state.errorMessage) ? 'block' : 'none'}}
                >{this.state.errorMessage}</div>
                <div className='resultContainer'>
                    {
                        this.state.searchResult.map(employee => {
                            return <Employee key={employee.id} data={employee}></Employee>
                        })
                    }
                </div>
            </>
        );
    };
}