var Giphy = React.createClass({

  getInitialState(){
    return {
      gifs: []
    }
  },

  componentDidMount(){
    var component = this;
    var theurl = "http://api.giphy.com/v1/gifs/search?q=freddie+mercury&api_key=dc6zaTOxFJmzC";
    fetch(theurl).then(function(response) {
      response.json().then(function(json){
        component.setState({gifs: json.data});
      });
    })
  },

  render() {
    return <div>
      {
        this.state.gifs.map(function(gif){
          return <img src={gif.images.fixed_height.url}/>
        })
      }
    </div>;
  }
});
