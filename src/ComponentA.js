import React from "react";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";


export default function () {
    return (
        <div>
            <ComponentB name={this.state.name} />
            <ComponentC />
        </div>
    )
}
