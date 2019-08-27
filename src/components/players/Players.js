import React, { Component } from 'react';
import axios from 'axios';



class Players extends Component {
    componentDidMount() {
        axios({
            method: 'get',
            url: 'https://api.mysportsfeeds.com/v1.2/pull/nfl/2018-regular/player_gamelogs.json?player=russell-wilson',
            // params: {"fordate": "20180909"},
            headers: {"Authorization": "Basic " + btoa('cecfb47c-28cb-46b0-bfae-be7dc7' + ":" + 'codingdojo')}
        })
        .then(res=>{
            console.log(res.data);
        })
        .catch(err => console.log(err));
}


render() {
    return (
        <h1>Hello</h1>
    );
}
}


export default Players;