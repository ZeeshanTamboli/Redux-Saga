import React, { Component } from 'react';
import store from './store';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid';
import { Provider } from 'react-redux';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Header />
                    <ImageGrid />
                </div>
            </Provider>
        );
    }
}

export default App;
