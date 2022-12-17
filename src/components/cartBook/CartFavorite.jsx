import React from 'react'
import "./style.css"
import Close from '../../assets/imgs/close.png'

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
import { updateBook } from '../store/action';
import { useStore } from '../store/hook';
// export const StoreContext = React.createContext(null);




const PostsData = [
    {
        "id": 112,
        "category": "News",
        "title": "The Hike",
        "text": "When Gemma Kline is reported missing after setting off on a solo hike in the remote Pennines, her sister, Sarah, is dumbfounded. ",
        "image": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1639377558i/57354801.jpg"
    },
    {
        "id": 122,
        "category": "News",
        "title": "The Secret Goldfish",
        "text": "It is a less and less well-kept secret that David Means is one of our best fiction writers. In the past few years he has won the Los Angeles Times Book Prize ",
        "image": "https://m.media-amazon.com/images/I/41gDzuw5RwL._AC_SY780_.jpg"
    },
    {
        "id": 172,
        "category": "News",
        "title": "The Sailor's Tale",
        "text": "Is it true that love never dies? Amelia, Tony, and their unlikely team must face their fears in order to solve the mystery of the Sailor's tale.",
        "image": "https://m.media-amazon.com/images/I/41aDXz7MJdS.jpg"
    },
    {
        "id": 192,
        "category": "News",
        "title": "A Runaway Tale",
        "text": "Zigg, having grown up in captivity, finally makes an escape. When other captors find him, he wonders whether he'll ever know what it's like to live outside of a cage.",
        "image": "https://m.media-amazon.com/images/I/41uY-5qa0jL._AC_SY1000_.jpg"
    }

]

const deleteFavorite = () => {
    alert("delete");
}

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
                        // .map(key => <div>asd</div>)
                        .map(key => <CardBook key={key} index={key} details={this.state.posts[key]} />)
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
        
        return (
            <header  className="CardBook-favorite-header">
                {/* <h5 className="CardBook-header--title">{category}</h5> */}
                <img src={image} alt="" height={300} width={246} style={{borderTopLeftRadius: "20px",borderTopRightRadius: "20px"}}/>
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
                <br />
                <div style={{display: "block",marginLeft: "auto",marginRight: "auto", width: "20%"}}>
                    <img src={Close} alt="" height={40} width={40} onClick={deleteFavorite} style={{cursor:"pointer"}}/>
                </div>
                

            </div>
        )
    }
}

const MyContext = React.createContext();


// import React from 'react'
// data-aos={"flip-left"}
function CardBook(props) {
    const [state, update] = useStore()
    const id = props.details.id
    // const { id, setID } = state
    // const [state, update] = useContext(Context)
    // console.log(state);
    const change = () => {
        update(updateBook(id))
        // alert(state.id)
    }
    return (
        <div>
            <>

                <article article className="CardBook" onClick={change}  >
                    <CardBookHeader category={props.details.category} image={props.details.image} />
                    <CardBookBody title={props.details.title} text={props.details.text} />
                </article >
            </>
        </div>
    )
}

// export { CardBook }
// class CardBook extends React.Component {
//     constructor() {
//         super();
//         this.data = 5;
//         this.state = ({
//             id: 0
//         })
//     }
//     componentDidMount() {
//         // or simply just AOS.init();
//         AOS.init({
//             // initialise with other settings
//             duration: 3000
//         });
//         this.setState({ id: this.props.details.id })
//         this.data = 6
//     }

//     detail = () => {

//         // console.log(this.state.id)
//         // alert(3)s
//         // <AboutBook id={this.state.id} />

//         alert(this.state.id);
//         // xem doan nay nha!!!
//         // <DescribeContent id={this.state.id} />
//     }
//     // detail = () => {
//     //     alert("Ad")
//     // }
//     render() {
//         // let value = this.context;
//         // console.log(value);
//         return (
//             <>
//                 {/* <div>

//                     {value}
//                 </div> */}
//                 <article article className="CardBook" data-aos={"flip-left"} onClick={this.detail} >
//                     <CardBookHeader category={this.props.details.category} image={this.props.details.image} />
//                     <CardBookBody title={this.props.details.title} text={this.props.details.text} />
//                 </article >
//             </>
//         )
//     }
// }
// CardBook.contextType = MyContext;

// export default Main;
export { Main, CardBook };