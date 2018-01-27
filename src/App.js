import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
class App extends Component {
  render() {
    const main_props = this.props
    console.log(main_props.user.id)
    console.log(main_props.user.getUsername)
    console.log("TESSS")
    return (
      <div>
        <p>
          HomePAGE
        </p>
      </div>
    );
  }
}

export default inject("user")(observer(App))
