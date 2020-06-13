import React, { Component } from 'react';
import imgs from '../components/images/img.jpg'
class Users extends Component {
    constructor(props){
        super(props)

        this.state={
            data:[]
        }
    }

    arrayBufferToBase64=(buffer)=>{
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };



    componentDidMount(){
        fetch('http://localhost:5000/admin/viewhostel')
        .then(res=>res.json())
        .then(hostels=>{
                this.setState({
                        data:hostels,
                        
                })
            }
         
        )}
    render() {
        const renderusers = this.state.data.map(hostel=>{
            return(
                <div key={hostel.id} style={{height:'auto',width:'auto',backgroundColor:'gray'}}>
                    <h1>Name:{hostel.hostelName}</h1>
                    <h2>{hostel.description}</h2>
                    <h3 style={{color:'blue'}}>Price:{hostel.price}</h3>
                    <img src=""  height='auto' />
                 <h1>Private Room : {hostel.privateRoom}</h1>

                </div>
            )
        })
        return (
            <div>
                {renderusers}
                
            </div>
        );
    }
}

export default Users;