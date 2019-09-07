import React, { Component } from 'react'
import FE from './FE';
import DS from './DS';
import GM from './GM';
import IF from './IF';
import Spacing from './Spacing';

export default class Major extends Component {
    render() {
        return (
           <div>
                <Spacing />
                <FE />
              {/*
<Spacing />
                <GM />
                <Spacing />
                <DS />
                <Spacing />
                <IF />
              */}  
            </div>
        )
    }
}
