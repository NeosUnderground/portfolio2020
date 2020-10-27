import React, { Component, Suspense } from 'react'
import axios from 'axios'; 
import './inputForm.css'
import Modal from '../Modal/modal'

export default class inputForm extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.textInput = React.createRef();
        this.state={
            name:'',
            email:'',
            message:'',
            successMessage:'',
            errorMessage:'',
        };
    }
    //Gets the values from the input fields when a change is detected via the name value of the input field
    onInputChange=(event)=>{
        this.setState({[event.target.name]: event.target.value}, this.handleSubmit);    
        console.log(this.state.anonymousMessage);    
      }

    // used for testing server connnection. change URL to server route
      componentDidMount(){
        fetch('https://api-express-master-server.herokuapp.com/preFlight')
          .then(response => response.json())
          .then(console.log);
    }
    
    onClickHandler = () => {

        //add local variable for anonymous message
        let name = this.state.name
        let email = this.state.email
        let message = this.state.message

       
        if (message === '' || name ==='' || email === '')
         {
            this.setState({errorMessage:'Please complete the form'})
            setTimeout(function(){window.location.reload()}, 3000)
        }

        else {
            const messageData = {
                name:name,
                email:email,    
                message:message,                    
               }
            
            axios.post("https://api-express-master-server.herokuapp.com/sendPortfolioMail", messageData, { // receive two parameter endpoint url ,form data 
                })
                .then(res => { // then print response status
                console.log(res.statusText)
                })
                .then(
                    setTimeout(function(){window.location.reload()}, 3000)

                )

            this.setState({errorMessage:''})
            this.setState({successMessage:'Your submission was successful, Thank you. '})
        }   
    }

    render() {

        let errorMessage = this.state.errorMessage;
        let successMessage = this.state.successMessage;
        let caption = 'Window will refresh'
        let modal;

        if (errorMessage.length > 1){
            modal = <Modal message={errorMessage} caption={caption}/>    
        }
        if(successMessage.length > 1){
           modal = <Modal message={successMessage}/>   
        }
       
        return (

            <div>
                <form className='inputForm' method="post" encType="multipart/form-data">    
                    <h1>Contact Me!</h1>
                    <p className='white'>Please enter your name, email address, and short message to complete the form and I will respond shortly!</p>
                    <input type='text' placeholder='name' name='name' onChange={this.onInputChange}></input>
                    <input type='email' placeholder='email' name='email' onChange={this.onInputChange}></input>
                    <textarea placeholder="Type your message here" name='message' onChange={this.onInputChange}></textarea>   
                        {/* Label for custom style for upload button 
                        <label className="custom-file-uploadBtn pointer">
                        <input type="file" name="file" onChange={this.onChangeHandler}/>
                            Upload Image
                        </label>
                        */}   
                    <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Submit</button>               
                </form>
                {modal}
            </div>
        )
    }
}
