import React from 'react';
import PropTypes from 'prop-types';


// class  Checkbox extends React.Component {
//     constructor(props){
//         super(props);

//         this.state = {
//             checked : this.props.initiallyChecked
//         }
//         this.handleClick = this.handleClick.bind(this);

//     }

//     handleClick(event){
//         this.setState({
//             checked : !this.state.checked
//         },() =>{
//             console.log(this.state.checked)
//         })
        
//     }

//     render(){
    function Checkbox(props){
        return(
            <button className="checkbox icon" onClick={props.onChange}>
                <i className="material-icons">{props.checked ? "check_box" : "check_box_outline_blank"}</i>
            </button>
        );
    }

//}

// Checkbox.propTypes = {
//     initiallyChecked: PropTypes.bool.isRequired
// }
Checkbox.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Checkbox;