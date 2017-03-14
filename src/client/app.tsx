import { React, Component } from 'chen-react';

export interface AppProps {}

export interface AppState {}

export class App extends Component<AppProps, AppState> {

  public render() {
    return (
      <div>
        {this.props.children}
        example
      </div>
    );
  }
}
