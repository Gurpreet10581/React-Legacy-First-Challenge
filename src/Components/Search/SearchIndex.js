import React from 'react';
import {Input} from 'reactstrap';
 
class SearchIndex extends Component {
  constructor(props){
    super(props);

    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
    }

    this.state ={
      search: "",
    }

  }
  
  searchFunction() {

  }
  
  render() {
    return(
      
      <div>
            <Input placeholder='Search Here' onChange={e => {
              this.setState({ search: e.target.value});
              console.log(e.target.value)
            }} />
            <h3>Results:</h3>
          </div>
      )}
      
      
}
export default SearchIndex;
