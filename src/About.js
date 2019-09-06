import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class About extends Component {
    render() {
        return (
            <div>
                <div class="d-flex flex-column justify-content-around mb-3">

                    <div class="p-2">
                        <div class="d-flex flex-row justify-content-around">
                            <div>Space</div>
                            <div>Logo</div>
                            <div>register</div>
                        </div>
                    </div>

                    <div class="d-flex flex-row justify-content-between">
                        <div class="d-flex flex-column justify-content-between">
                            <div>Saka</div>
                            <div>About</div>
                            <div>FAQs</div>
                        </div>
                        <div>About us</div>
                        <div class="d-flex flex-column justify-content-between">
                            <div>Space</div>
                            <div>Space</div>
                            <div>
                            <div class="d-flex flex-column justify-content-between">
                                <div>Where</div>
                                <div>SIT</div> 
                            </div>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex align-items-end flex-column mb-3">
                        <div class="mt-auto p-2 bd-highlight">Facebook</div>
                    </div>
                
                </div>                

            </div>
        )
    }
}
