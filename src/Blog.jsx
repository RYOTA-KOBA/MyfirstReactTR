import React from 'react';
import Article from './Article';

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    } 

    countUp = () => {
        this.setState({
            count: this.state.count+1
        })
    };

    render() {
        return(
            <>
                <Article
                    title={"カウントアップボタン"}
                    count={this.state.count}
                    countUpFunc={()=>this.countUp()}
                />
            </>
        )
    }
}

export default Blog;