import React, {Component} from 'react';
import {connect} from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionType from '../../store/actions/index'

class Counter extends Component {
    state = {
        counter: 0
    }


    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr}/>
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter}/>
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}/>
                <CounterControl label="Add 5" clicked={this.props.onAdd}/>
                <CounterControl label="Subtract 5" clicked={this.props.onSub}/>
                <hr/>
                <button onClick={() => this.props.storeRes(this.props.ctr)}>Store Results</button>
                <ul>
                    {this.props.storedResults.map(strRes => (
                        <li key={strRes.id} onClick={() => this.props.delRes(strRes.id)}>{strRes.value}</li>
                    ))}

                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.results.res
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionType.increment()),
        onDecrementCounter: () => dispatch(actionType.decrement()),
        onAdd: () => dispatch(actionType.add(10)),
        onSub: () => dispatch(actionType.sub(8)),
        storeRes: (result) => dispatch(actionType.storeRes(result)),
        delRes: (id) => dispatch(actionType.deleteResult(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);