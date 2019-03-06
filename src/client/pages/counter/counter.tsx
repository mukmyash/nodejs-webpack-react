import * as React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

export type CounterProps = {
    Value: number
}

export type CounterEvents = {
    startAutoIncrement: () => void,
}

type CounterPropsAndEvents = CounterProps & CounterEvents;

export class Counter extends React.Component<CounterPropsAndEvents> {

    constructor(props: CounterPropsAndEvents) {
        super(props);
        props.startAutoIncrement();
    }

    render() {
        return (
            <div>
                <label>{this.props.Value}</label>
            </div>

        );
    }
}
