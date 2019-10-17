import React from 'react';
import './App.css';

class App extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      search: '',
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(e) {
    e.preventDefault();
    if (this.state.clicked) {
      // submit form
    } else {
      this.setState({clicked: true});
    }
  }

  handleSearch(e) {
    this.setState({search: e.target.value});
  }

  render() {
    return(
      <div>
        {this.state.clicked ? 
        <div>
          <form>
            <input onChange={this.handleSearch} type="text"/>
          </form>
          <Dropdown search={this.state.search}/>
        </div>
          : null}
        <Button clicked={this.state.clicked} handleButtonClick={this.handleButtonClick}/>
      </div>
    );
  }
}

const Button = ({ clicked, handleButtonClick }) => {
  return (
    <button onClick={handleButtonClick} id={clicked ? 'clicked' : 'initial'}>Quote in 60 Seconds</button>
  );
};

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [
        {
          address: '111 house',
        },
        {
          address: '111 house',
        },
        {
          address: '111 house',
        },
        {
          address: '111 house',
        },
        {
          address: '111 house',
        },
      ],
    };
  }

  // api request to fire 

  render() {
    const list = this.state.results.map((house) => <p>{house.address}</p>)

    return(
      <div>
        {this.props.search}
        {list}
      </div>
    );
  }
}

export default App;
