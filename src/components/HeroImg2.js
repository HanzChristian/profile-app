import React, { Component } from 'react';
import "./HeroImg2Styles.css";

class HeroImg2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeIn: false
        };
    }

    componentDidMount() {
        this.setState({ fadeIn: true });
    }

    render() {
        const { heading, imageUrl } = this.props;
        const { fadeIn } = this.state;

        return (
            <div className={`mask3 ${fadeIn ? 'fade-in' : ''}`}>
                <div className='hero-img' style={{ backgroundImage: `url(${imageUrl})` }}>
                    <div className='heading'>
                        <h1>{heading}</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeroImg2;
