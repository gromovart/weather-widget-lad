import React, {Component} from 'react';
import '../Wrapper/Wrapper.css'
export default class Wrapper extends Component {

    render() {
        return (
            <div className = 'Wrapper'>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}