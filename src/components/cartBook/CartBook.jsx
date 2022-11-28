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
import AboutBook from '../aboutBook/AboutBook';
import DescribeContent from '../content/DescribeContent';




const PostsData = [
    {
        "id": 1252,
        "category": "News",
        "title": "CNN Acquire BEME",
        "text": "CNN purchased Casey Neistat's Beme app for $25million.",
        "image": "https://inthienhang.com/wp-content/uploads/2020/03/mau-bia-sach-dep.jpg"
    },
    {
        "id": 1252,
        "category": "News",
        "title": "CNN Acquire BEME",
        "text": "CNN purchased Casey Neistat's Beme app for $25million.",
        "image": "https://inthienhang.com/wp-content/uploads/2020/03/mau-bia-sach-dep.jpg"
    },
    {
        "id": 1252,
        "category": "News",
        "title": "CNN Acquire BEME",
        "text": "CNN purchased Casey Neistat's Beme app for $25million.",
        "image": "https://inthienhang.com/wp-content/uploads/2020/03/mau-bia-sach-dep.jpg"
    },
    {
        "id": 1252,
        "category": "News",
        "title": "CNN Acquire BEME",
        "text": "CNN purchased Casey Neistat's Beme app for $25million.",
        "image": "https://inthienhang.com/wp-content/uploads/2020/03/mau-bia-sach-dep.jpg"
    },
    {
        "id": 1252,
        "category": "News",
        "title": "CNN Acquire BEME",
        "text": "CNN purchased Casey Neistat's Beme app for $25million.",
        "image": "https://inthienhang.com/wp-content/uploads/2020/03/mau-bia-sach-dep.jpg"
    },
    {
        "id": 1252,
        "category": "News",
        "title": "CNN Acquire BEME",
        "text": "CNN purchased Casey Neistat's Beme app for $25million.",
        "image": "https://inthienhang.com/wp-content/uploads/2020/03/mau-bia-sach-dep.jpg"
    },
    {
        "id": 1252,
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
    constructor() {
        super();
        this.data = 5;
        this.state = ({
            id: 0
        })
    }
    componentDidMount() {
        // or simply just AOS.init();
        AOS.init({
            // initialise with other settings
            duration: 3000
        });
        this.setState({ id: this.props.details.id })
        this.data = 6
    }

    detail = () => {

        // console.log(this.state.id)
        // alert(3)s
        // <AboutBook id={this.state.id} />

        alert(this.state.id);
        <DescribeContent id={this.state.id} />
    }
    // detail = () => {
    //     alert("Ad")
    // }
    render() {
        return (
            <article className="CardBook" data-aos={"flip-left"} onClick={this.detail}>
                <CardBookHeader category={this.props.details.category} image={this.props.details.image} />
                <CardBookBody title={this.props.details.title} text={this.props.details.text} />
            </article>
        )
    }
}

export default Main;