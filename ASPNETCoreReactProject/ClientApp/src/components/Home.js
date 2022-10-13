import React, { Component } from 'react';

class Square extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return (
            <button className="square" onClick={() => console.log("click")}>
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i} />;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        {/*<h1>Hello, world!</h1>*/}
        {/*<p>Welcome to your new single-page application, built with:</p>*/}
        {/*<ul>*/}
        {/*  <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>*/}
        {/*  <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>*/}
        {/*  <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>*/}
        {/*</ul>*/}
        {/*<p>To help you get started, we have also set up:</p>*/}
        {/*<ul>*/}
        {/*  <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>*/}
        {/*  <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>*/}
        {/*  <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>*/}
        {/*</ul>*/}
        {/*<p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>*/}
        <Game />
      </div>
    );
  }
}
