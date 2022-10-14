import React, { Component } from 'react';

function Square(props) {

    //constructor(props) {
    //    super(props);
    //    this.state = {
    //        value: null,
    //    };
    //}

    /*render() {*/
        return (
            <button
                className="square"
                onClick={props.onClick}
            >
                {props.value}
            </button>
        );
    /*}*/
}

class Board extends React.Component {

    //constructor(props) {
    //    super(props);
    //    this.state = {
    //        squares: Array(9).fill(null),
    //        xIsNext: true,
    //    };
    //}

    //handleClick(i) {
    //    const squares = this.state.squares.slice();

    //    if (calculateWinner(squares) || squares[i]) {
    //        return;
    //    }

    //    squares[i] = this.state.xIsNext ? "X" : "O";
    //    this.setState({
    //        squares: squares,
    //        xIsNext: !this.state.xIsNext,
    //    });
    //}

    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {

        //const winner = calculateWinner(this.state.squares);
        //let status;
        
        //if (winner) {
        //    status = "Winner: " + winner;
        //}
        //else {
        //    status = 'Next player: ' + (this.state.xIsNext ? "X" : "O");
        //}

        return (
            <div>
                {/*<div className="status">{status}</div>*/}
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

    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
        }
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    };


    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                "Go to move #" + move :
                "Go to game start";
            return (
                <li key={move }>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = "Winner: " + winner;
        }
        else {
            status = 'Next player: ' + (this.state.xIsNext ? "X" : "O");
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i) }
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
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

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}