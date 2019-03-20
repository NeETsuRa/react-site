import React, {Component} from "react";

var ip
class IPAdress extends Component{
    constructor (props, context){
        super(props, context);
        this.state = {
            ip_address: "..."
        };
        this.processRequest = this.processRequest.bind(this);
    }

    componentDidMount(){
        ip = new XMLHttpRequest();
        ip.open("GET","https://ipinfo.io/json", true);
        ip.send;

        ip.addEventListener("readystatechange", this.processRequest, false);
    }

    processRequest(){
        if(ip.readyState === 4 && ip.status === 200){
            var response = JSON.parse(ip.responseText);
            this.state({
                ip_address:response.ip
            });
        }
    }

    render(){
        return(
            <div> 
                {this.props.ip} 
                {this.state.ip_address}
            </div>
        )
    }
}

export default IPAdress;