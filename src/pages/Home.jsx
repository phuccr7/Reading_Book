import React from 'react'
import Header from '../components/header/Header'
import Content from '../components/content/Content'
// require('./App.css');
import DescribeContent from '../components/content/DescribeContent'
import Footer from '../components/footer/Footer'
// import GlobalStyle from '../style/GlobalStyle'
function Home() {
  return (
    <div>
      <Header />
      <div className="bodyHome">
        <Content style={{ flex: 3 }} />
        <DescribeContent style={{ flex: 1 }} />


      </div>
      <Footer />
    </div>
  )
}



// bodyHome
// }
export default Home
