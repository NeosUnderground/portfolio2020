import React, { Component, useState } from 'react'
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import './modal.css'



Modal.setAppElement('#root');

  export default class modal extends React.Component {
    constructor () {
      super();
      //set to false if using button
      this.state = {
        showModal: true
      };
      
    //   this.handleOpenModal = this.handleOpenModal.bind(this); used for button click
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }
    
   
    render () {
  
      return (
        <div>
         {/*<button onClick={this.handleOpenModal}>Trigger Modal</button>*/}
          <Modal 
            isOpen={this.state.showModal}
            contentLabel="onRequestClose Example"
            onRequestClose={false}
            shouldCloseOnEsc={false}
            style={
                {
                    overlay:{
                       backgroundColor:'rgba(90,90,90, 0.95)',
                       display:'flex',
                       flexDirection:'column',
                       justifyContent:'center',
                       alignItems:'center'
                    },
                    content:{
                        postiion:'inherit',
                        top:'0px !important',
                        left:'0px !important',
                        right:'0px !important',
                        bottom:'0px !important',
                        border: '2px solid #ccc',
                        background:'rgba(250,250,250,1.0)',
                        overflow:'auto',
                        WebkitOverflowScrolling:'touch',
                        borderRadius:'10px',
                        outline:'none',
                        padding:'20px',
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center',
                        alignItems:'center'
                    },
                }
            }                          
          >
            <p>{this.props.message}</p>
            <p>{this.props.caption}</p>
             {/*<button onClick={this.handleCloseModal}>Close Modal</button>*/}
          </Modal>
        </div>
      );
    }
  }
  
  const props = {};
  
  ReactDOM.render(<modal {...props} />, document.getElementById('root'))
  