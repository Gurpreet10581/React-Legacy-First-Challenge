import React, {Component} from 'react';
import {Input} from 'reactstrap';
 
class SearchIndex extends Component {
  constructor(props){
    super(props);

    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
    }

    this.state ={
      search: ""
    }

    this.state ={
      result: []
    }

  }

  
  
  searchFunction=(searchWord)=> {
    this.setState({
      results: this.state.things.filter(element => element.includes(searchWord))
    });
  }
  componentWillMount(){
    this.setState ( {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
    })

    this.setState ({
      results: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
    })
  }
  
  render() {
    return(
      
      <div>
            <Input placeholder='Search Here' onChange={e => {
              this.setState({ search: e.target.value});
              {this.searchFunction(e.target.value)};
            }} />
            <h3>Results:</h3>
            <div>
              {this.state.results.map((item,index) => <li key={index}>{item}
              </li>)}
            </div>
          </div>
      )}
      
      
}
export default SearchIndex;
