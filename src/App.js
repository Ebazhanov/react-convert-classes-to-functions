import React, {Component} from 'react';
import './App.css';
import Child from './components/parentToChild/child'

class App extends Component {

    state = {
        title: 'placeholder title'
    };

    changeButtonOnClickEvent = (newTitle) => {
        this.setState({title: newTitle})
    };

    render() {
        return (
            <div className="App">
                <Child buttonClickEvent={this.changeButtonOnClickEvent.bind(this, 'new plc title')}
                       title={this.state.title}/>
            </div>
        );
    }
}

export default App;
