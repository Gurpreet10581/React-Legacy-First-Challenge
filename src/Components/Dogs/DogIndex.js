import React, {Component}from 'react';

export default class DogIndex extends Component {

    constructor(props){
        super(props);
        this.state = {
            Img_url: "",
        };
    }

    fetchImg = () => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            this.setState({
                Img_url: json.message,
            });
        })
        .catch(function (err){
            console.log(err);
        });
    };

    componentDidMount(){
        this.fetchImg();
    }

    render(){

        return(
            <div>
            <img src={this.state.Img_url} />
            <hr />
            <button onClick={this.fetchImg}> Random Dog Pictures</button>
            </div>
        );
    }
}