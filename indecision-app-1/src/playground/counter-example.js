/*
let count = 0;
//const someId = 'myidhere'

const addOne = () => {
    //count  = count +1;OR
    count++;
    //console.log('addOne', count);
    renderCounterApp();
};

const minusOne = () => {
    count--;
    //console.log('minusOne', count);
    renderCounterApp();
};

const reset = () => {
    //console.log('reset');
    count = 0;
    renderCounterApp();
};
//console.log(templateTwo);
//Challenge
//Make button with -1 , and function it 
//Make a reset button "reset"

const appRoot = document.getElementById('app');
//ReactDOM.render(template, appRoot);

const renderCounterApp = () => {
  const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick= {addOne} >+1</button>
        <button onClick= {minusOne}>-1</button>
        <button onClick= {reset}>reset</button>
    </div>
);  

ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
*/
//*****************************************************************




class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {

        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);
        
        if (!isNaN (count)) {
            this.setState(() => ({ count }));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count){ 
            //const json = JSON.stringify(this.state.count);
            localStorage.setItem('count', this.state.count);
        }
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1 
            };
        });
    } 
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1 
            };
        });
    } 
    handleReset() {
        this.setState(() => {
            return {
                count:0
           };
        });
        /*this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        })*/
    } 
    render() {
        return (
            <div>
                <h1>Count:  {this.state.count}</h1>
                <button onClick= {this.handleAddOne}>+1</button>
                <button onClick= {this.handleMinusOne}>-1</button>
                <button onClick= {this.handleReset}>Reset</button>
            </div>
        );
    }
}

//Counter.defaultProps = {
 //   count: 0
//};

ReactDOM.render(<Counter /> , document.getElementById('app'));