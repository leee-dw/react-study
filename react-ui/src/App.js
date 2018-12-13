import React, { Component } from 'react';
import format from 'date-fns/format';
import AppTemplate from './components/AppTemplate/AppTemplate'
import Button from './components/Button'
import Header from './components/Header'
import HeaderNav from './components/HeaderNav'




class App extends Component {
  id = 2

  state = {
    tab: 'home',
    writeBox: false,
    posts: [
      {
        id: 2,
        text:
          '무엇을 생각하면 좋을까? 나도 잘 모르겠다. \n엔터를 했을 때도 새 줄이 먹히도록 설정했다.\n딱히 제한은 두지 않았다.',
        date: '2018-07-18 02:03:15',
      },
      {
        id: 1,
        text: '최근에 작성한게 위로 올라오니까 이건 옛날에 작성됐고 두번째다.',
        date: '2018-07-18 01:03:15',
      },
      {
        id: 0,
        text: '엄청 오래된건 그냥 날짜가 나타났으면 좋겠다.',
        date: '2018-07-01 01:03:15',
      },
    ]
  }

  handleSelectTab = tab => {
    this.setState({ tab });
  }


  handleToggleWriteBox = () => {
    this.setState({ writeBox: !this.state.writeBox })
  }



  render() {
    const {tab, posts, writeBox } = this.state
    return (
      <AppTemplate
        header={<Header 
          // left= {<HeaderNav tab={tab} onSelect={this.handleSelectTab} />}
          // right={<Button onClick={this.handleToggleWriteBox}>새 글 작성</Button>}
          />}
      >

      </AppTemplate>
    );
  }
}

export default App;
