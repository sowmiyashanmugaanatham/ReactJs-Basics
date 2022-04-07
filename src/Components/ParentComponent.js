import  React, {Component} from 'react'
//import RegComponent from './RegComponent'
//import PureComponent from './PureComponent'
import MemoComponent from './MemoComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name:'charu'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name:'Charu'
        })
    }, 2000)
}

render() {
    console.log('************Parent Component render**************')
    return(
        <div>
            ParentComponent
            <MemoComponent name={this.state.name} />
            {/*<RegComponent name={this.state.name} /> */}
           {/*<PureComponent name={this.state.name} /> */}
        </div>
    )
}
}
export default ParentComponent