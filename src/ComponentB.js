import React from "react";

class ComponentB extends React.Component {

    constructor(props) {
        console.log('B_contstructor');
        super(props)
        this.state = {
            b: 'bbb'
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log('B_getDerivedStateFromProps');

        return null;
    }
    render() {
        console.log('B_render');
        return (
            <div  >
                <h1>  ComponentB{this.state.b},name: {this.props.name}</h1>
            </div>
        );
    }
    componentDidMount() {
        console.log('B_componentDidMount');
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('B_shouldComponentUpdate');

        if (nextProps.name === this.props.name) {
            return false;
        }
        return true;

    }
    getSnapshotBeforeUpdate() {
        console.log('B_getSnapshotBeforeUpdate');
        return null;

    }
    componentDidUpdate() {
        console.log('B_componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('B_componentWillUnmount');
    }

}


export default ComponentB;