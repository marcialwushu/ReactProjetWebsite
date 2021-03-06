import React from 'react';
import './App.css';
import { Layout,Header, HeaderRow, Content, Textfield, Navigation, Drawer } from 'react-mdl';
import Main from './components/main';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header title="Title" scroll>
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            
        </Content>
    </Layout>
</div>
  );
}

export default App;
