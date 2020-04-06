import React, {Component} from 'react';
import './App.css';
import Parent from './components/parentToChild/parent'

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
                <Parent buttonClickEvent={this.changeButtonOnClickEvent.bind(this, 'new plc title')}
                       title={this.state.title}/>
            </div>
        );
    }
}

export default App;
