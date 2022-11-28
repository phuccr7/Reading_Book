import React from 'react'
import "./style.css"

// function CartBook() {
//     return (
//         <div>CartBook</div>
//     )
// }

// export default CartBook


import AOS from 'aos';
import 'aos/dist/aos.css';




const PostsData = [
    {
        "category": "News",
        "title": "CNN Acquire BEME",
        "text": "CNN purchased Casey Neistat's Beme app for $25million.",
        "image": "https://inthienhang.com/wp-content/uploads/2020/03/mau-bia-sach-dep.jpg"
    },
    {
        "category": "News",
        "title": "CNN Acquire BEME",
        "text": "CNN purchased Casey Neistat's Beme app for $25million.",
        "image": "https://inthienhang.com/wp-content/uploads/2020/03/mau-bia-sach-dep.jpg"
    },
    {
        "category": "News",
        "title": "CNN Acquire BEME",
        "text": "CNN purchased Casey Neistat's Beme app for $25million.",
        "image": "https://inthienhang.com/wp-content/uploads/2020/03/mau-bia-sach-dep.jpg"
    },
    {
        "category": "News",
        "title": "CNN Acquire BEME",
        "text": "CNN purchased Casey Neistat's Beme app for $25million.",
        "image": "https://inthienhang.com/wp-content/uploads/2020/03/mau-bia-sach-dep.jpg"
    },
    {
        "category": "News",
        "title": "CNN Acquire BEME",
        "text": "CNN purchased Casey Neistat's Beme app for $25million.",
        "image": "https://inthienhang.com/wp-content/uploads/2020/03/mau-bia-sach-dep.jpg"
    },
    {
        "category": "News",
        "title": "CNN Acquire BEME",
        "text": "CNN purchased Casey Neistat's Beme app for $25million.",
        "image": "https://inthienhang.com/wp-content/uploads/2020/03/mau-bia-sach-dep.jpg"
    },
    {
        "category": "News",
        "title": "CNN Acquire BEME",
        "text": "CNN purchased Casey Neistat's Beme app for $25million.",
        "image": "https://inthienhang.com/wp-content/uploads/2020/03/mau-bia-sach-dep.jpg"
    },
    {
        "category": "News",
        "title": "CNN Acquire BEME",
        "text": "CNN purchased Casey Neistat's Beme app for $25million.",
        "image": "https://inthienhang.com/wp-content/uploads/2020/03/mau-bia-sach-dep.jpg"
    },
    // {
    //     "category": "News",
    //     "title": "CNN Acquire BEME",
    //     "text": "CNN purchased Casey Neistat's Beme app for $25million.",
    //     "image": "https://inthienhang.com/wp-content/uploads/2020/03/mau-bia-sach-dep.jpg"
    // },
    // {
    //     "category": "News",
    //     "title": "CNN Acquire BEME",
    //     "text": "CNN purchased Casey Neistat's Beme app for $25million.",
    //     "image": "https://inthienhang.com/wp-content/uploads/2020/03/mau-bia-sach-dep.jpg"
    // },

]


// Start App

class Main extends React.Component {
    constructor() {
        super();

        this.state = {
            posts: {}
        }
    }
    componentWillMount() {
        this.setState({
            posts: PostsData
        });
    }


    render() {
        return <div>
            {/* <header className="app-header"></header> */}

            <div className="app-card-list" id="app-CardBook-list">
                {
                    Object
                        .keys(this.state.posts)
                        .map(key => <CardBook key={key} index={key} details={this.state.posts[key]} />)
                    // .map(key => <div>asd</div>)
                }
            </div>
        </div>
    }
}




class Button extends React.Component {
    render() {
        return (
            <button className="button button-primary">
                <i className="fa fa-chevron-right"></i> Find out more
            </button>
        )
    }
}


class CardBookHeader extends React.Component {
    // componentDidMount() {
    //     // or simply just AOS.init();
    //     AOS.init({
    //         // initialise with other settings
    //         duration: 3000
    //     });
    // }
    render() {
        const { image, category } = this.props;
        var style = {
            backgroundImage: 'url(' + image + ')',
        };
        return (
            <header style={style} className="CardBook-header">
                {/* <h5 className="CardBook-header--title">{category}</h5> */}
            </header>
        )
    }
}


class CardBookBody extends React.Component {
    render() {
        return (
            <div className="CardBook-body">
                <p className="date">March 20 2015</p>

                <h5>{this.props.title}</h5>

                <p className="body-content">{this.props.text}</p>

                <Button />
            </div>
        )
    }
}


class CardBook extends React.Component {
    componentDidMount() {
        // or simply just AOS.init();
        AOS.init({
            // initialise with other settings
            duration: 3000
        });
    }
    render() {
        return (
            <article className="CardBook" data-aos={"flip-left"}>
                <CardBookHeader category={this.props.details.category} image={this.props.details.image} />
                <CardBookBody title={this.props.details.title} text={this.props.details.text} />
            </article>
        )
    }
}

export default Main;