import React, { Component, ErrorInfo } from 'react';

interface Props {
 children: React.ReactNode
};

interface State {
    hasError: boolean
}

class ErrorBoundry extends Component<Props,State> {
    
    constructor(props:Props) {
        super(props)
        this.state = {
             hasError: false
        }
    }
    
    
    static getDerivedStateFromError(error:Error) : State{

        console.log('error',error)
        return {
            hasError: true,
        }
    };

    componentDidCatch(error:Error,info:ErrorInfo){
        let log = {
            type:'error',
            error:error.toString(),
            info:info.toString(),
            route:window.location.href
        }
        
        fetch(`${process.env.REACT_APP_API_URL}`,{
            headers:{},
            body:JSON.stringify(log),
        }).then(async res => {
            let data = await res.json();
        }).catch(err => console.log(err))
    }

    render() {
        if(this.state.hasError){
            return (<h6>Something went wrong</h6> ) 
        }
            return (
                <div>
                {this.props.children}  
              </div>
            );
    }
}

export default ErrorBoundry;