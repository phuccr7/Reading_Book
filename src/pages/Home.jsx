import React, { useState } from 'react'
import Header from '../components/header/Header'
import Content from '../components/content/Content'
// require('./App.css');
import DescribeContent from '../components/content/DescribeContent'
import Footer from '../components/footer/Footer'
import { CardBook } from '../components/cartBook/CartBook'

import { useStore } from '../components/store/hook'

// const MyContext = React.createContext();
// import GlobalStyle from '../style/GlobalStyle'
function Home() {

  // const [state, update] = useStore()
  const [book, setBook] = useState(10);


  function test() {
    alert("sd")
  }
  return (
    <div>

      {/* <MyContext.Provider value={"test"}> */}
      {/* {/* <CardBook /> */}
      {/* <MyContext.Consumer>



          {value => <CardBook />}
        </MyContext.Consumer> */}

      <Header />
      <div className="bodyHome">
        <Content style={{ flex: 3 }} setBook={setBook} />
        <DescribeContent style={{ flex: 1 }} book={book} />
      </div>
      {/* </MyContext.Provider> */}
      {/* <Footer /> */}
    </div>
  )
}



// bodyHome
// }
export default Home
