import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

class Form extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
  
    handleSubmit(event){
        event.preventDefault();
        //console.log(this.refs.title.value);
        let title= this.state.title;
        if(title){
            this.props.onAdd(title);
            this.setState({ title: " " })
        }
    }

    handleChange(event){
        let title = event.target.value;
        this.setState({ title })
    }


    render(){
        return(
            <form className="todo-form" onSubmit={this.handleSubmit}>
                <input 
                type="text" 
                value={this.state.title} 
                ref="title" 
                placeholder="inch anel"
                onChange={this.handleChange}
                />
                <Button type="submit">Avelacnel</Button>
            </form>
        )
    }
}



Form.propTypes = {
    onAdd: PropTypes.func.isRequired
}

export default Form;