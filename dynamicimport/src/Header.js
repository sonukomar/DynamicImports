import React from "react";

class Header extends React.Component {
  state = {
    DynamicComponent: null
  };
  handleOnClick = async () => {
    const DynamicComponent = await import("./DyanmicComponent");

    this.setState({
      DynamicComponent: DynamicComponent.default
    });
  };

  render() {
    const { DynamicComponent } = this.state;

    return (
      <header className="header">
        <div onClick={this.handleOnClick}>Load GitHUb!</div>
        <nav>{DynamicComponent && <DynamicComponent />}</nav>
      </header>
    );
  }
}

export default Header;
