/*7:
--if statements
--ternary operators
--logical and operators*/
// JSX - Javascript XML
/*
const User = {
    name: 'Anjali',
    age: 18,
    location: 'Rivonia'
}
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } 
}
const templateTwo =(
    <div>
        <h1>{User.name ? User.name : 'Anonymous'}</h1>
        {(User.age && User.age >= 18) && <p>Age: {User.age}</p>}
        {getLocation(User.location)}
    </div>
);*/

console.log('App.js is running!');

const app ={
    title:'Indecision App',
    subtitle:'Put your life in the hands of a computer',
    options:[]
}

const onFormSubmit = (e) => {
    e.preventDefault();

    //console.log('form submitted!');

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const removeAll = () => {
    app.options = [];
    render();
};



const appRoot = document.getElementById('app');

//const numbers = [55, 101, 1000];

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    //console.log(randomNum);
    alert(option);
};

const render = () => {
    const template = (
        <div> 
            <h1> {app.title} </h1> 
            {app.subtitle && <p>{app.subtitle}</p>} 
            <p>{app.options.length > 0 ? 'Here are your options': 'No Options'} </p> 
           
            <button disabled={app.options.length === 0} onClick = {onMakeDecision}> What should I do?</button>

            <button onClick = {removeAll}> Remove All</button>
            
            {/*
               // [<p key="1"> a</p>, <p key="2"> b</p>, <p key="3">c </p>,]
               numbers.map((number) => {
                   return <p key={number}>Number: {number}</p>;
               })
            */}
            
            <ol>
                {
                    app.options.map((option) => {
                        return <li key = {option}>{option} </li>
                    })
                }
            </ol>
            
            <form onSubmit={onFormSubmit}> 
                <input type= "text" name="option"/>
                <button>Add Option</button>
    
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();