import React, {Component} from 'react'
import EditableTable from './AddAirports';
class Private extends Component {
    render(){
        return(
            <div className="private">
                <EditableTable/>
            </div>
        )
    }
}
export default Private