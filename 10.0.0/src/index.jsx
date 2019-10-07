import { h, render, createContext, Component } from 'preact';
import { observable, toJS } from "mobx";
import { observer } from "mobx-react";


class Store {
    @observable
    count = 0

    increment() {
        this.count = this.count + 1;
    }
}
const Context = createContext(null);

@observer
class Counter extends Component {
    static contextType = Context
    render() {
        return <button onClick={() => this.context.increment()}>clicks: {this.context.count}</button>;
    }
}

@observer
class Test {
    static contextType = Context
    render() {
        const raw = toJS(this.context.count);
        return <div>
            <Counter />
            <div>raw is: {raw}</div>
        </div>;
    }
}

class App {
    store = new Store();
    render() {
        return (
            <Context.Provider value={this.store}>
                <Test />
            </Context.Provider>
        )
    }
}

const app = document.createElement('div');
app.id = 'app';
document.body.appendChild(app);
render(<App />, app);