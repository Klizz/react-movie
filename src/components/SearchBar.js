import React, {Component} from 'react';

class SearchBar extends Component  {
    state = {
        value: ''
    }
    timeout = null;

    doSearch = (event) => {
        this.setState({ value: event.target.value })
        clearTimeout(this.timeout);

        this.timeout = setTimeout( () => {
            this.props.callback(this.state.value);
        }, 500);
    }

    render(){
        return (
            <div class="row">
            <div class="input-field col s12">
              <input 
              placeholder="Buscar" 
              id="first_name" 
              type="text" 
              class="validate" 
              onChange={this.doSearch}
              value={this.state.value}
               />
              <label for="first_name"></label>
            </div>
            </div>
        )
    }
}

export default SearchBar;