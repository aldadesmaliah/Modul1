// Button Component (Class Component)
class MyButton extends Component {
    handleButtonClick = () => {
        alert(this.props.message);
    }

    render() {
        return (
            <button onClick={this.handleButtonClick} style={{ margin: "10px" }}>
                {this.props.children}
            </button>
        );
    }
}

// App Component (Class Component)
class MyApp extends Component {
    render() {
        return (
            <div>
                <h1>Learn React</h1>
                <MyButton message="Learn React">React</MyButton>
                <MyButton message="Learn JavaScript">JavaScript</MyButton>
            </div>
        );
    }
}