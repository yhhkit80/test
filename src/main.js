import React from 'react';
import ReactDOM from 'react-dom';

var Avatar = React.createClass({
  render: function() {
    return (
      <div>
        <PagePic pagename={this.props.pagename} />
        <PageLink pagename={this.props.pagename} />
      </div>
    );
  }
});

var PagePic = React.createClass({
  render: function() {
          // <img src={'https://graph.facebook.com/' + this.props.pagename + '/picture'} />

    return (
      <img src={'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=775528468,1047269502&fm=58'} />
    );
  }
});

var PageLink = React.createClass({
  render: function() {
          // <a href={'https://www.facebook.com/' + this.props.pagename}>

    return (
      <a href={'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=775528468,1047269502&fm=58'}>
        {this.props.pagename}
      </a>
    );
  }
});
export default Avatar;
