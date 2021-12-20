import React from 'react'
import '../Css/Widgets.css';
import WidgetOptions from './WidgetOptions';
function Widgets() {
    return (
        <div className="widget">
            <div className="widget_header">
                <h5>Space's to follow</h5>
            </div>
           <WidgetOptions/>
            
        </div>
    )
}

export default Widgets
