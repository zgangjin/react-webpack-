/**
 * Created by gangjinzhang on 2017/6/29.
 */
import React from 'react';
import ReactDOM from 'react-dom';

export default class ShoppingList extends React.Component {
    render(){
        return(
            <div className="shopping-list">
                <h1>hell {this.props.name}</h1>

            </div>
        );
    }
};
ReactDOM.render(<ShoppingList name="Reace"/> ,document.getElementById('app'));