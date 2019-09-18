import React from "react";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

// import "./styles.css";


class ComponentA extends React.Component {
    onChangeHanlder = (e) => {
        this.setState({
            name: e.target.value
        })

        console.log(this.state.name)
    }

    constructor(props) {
        console.log('A_contstructor');
        super(props);
        this.state = {
            a: 'asdf',
            name: 'ss'
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log('A_getDerivedStateFromProps');
        console.log(state.name)

        return null;
    }
    render() {

        console.log('A_render');
        return (
            <div  >
                <input onBlur={this.onChangeHanlder}></input>
                <h1>  ComponentA{this.state.a}</h1>
                <ComponentB name={this.state.name} />
                <ComponentC/>
            </div>
        );
    }
    componentDidMount() {
        // this.setState({
        //     name: 'componentDidMount'
        // })
        console.log('A_componentDidMount');
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('A_shouldComponentUpdate');
        return true;
    }
    getSnapshotBeforeUpdate() {
        console.log('A_getSnapshotBeforeUpdate');
        return null;
    }
    componentDidUpdate() {

        console.log('A_componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('A_componentWillUnmount');
    }

}


export default ComponentA;