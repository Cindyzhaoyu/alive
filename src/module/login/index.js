import React from 'react';
import './index.less';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: '',
      code: '',
      password: '',
      type: 1
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  changeTab = tyopes => {
    this.setState({
      type: tyopes
    });
  };

  render() {
    const { mobile, code, password, type } = this.state;

    return (
      <div className="login-wrap">
        <div className="login-type-tab">
          <div
            className={+type === 1 ? 'item on' : 'item'}
            onClick={e => this.changeTab(1)}
          >
            手机快捷登录
          </div>
          <div
            className={+type === 2 ? 'item on' : 'item'}
            onClick={e => this.changeTab(2)}
          >
            帐号密码登录
          </div>
        </div>
        {+type === 1 ? (
          <div className="login-normal">
            <div className="mobile-panel">
              <input
                type="text"
                name="mobile"
                className="z-mobile"
                placeholder="请输入手机号"
                value={mobile}
                onChange={this.handleChange}
              />
            </div>
            <div className="password-panel">
              <input
                type="password"
                name="password"
                className="z-password"
                placeholder="请输入密码"
                value={password}
                onChange={this.handleChange}
              />
            </div>
          </div>
        ) : (
          <div className="login-normal">
            <div className="mobile-panel">
              <input
                type="text"
                name="mobile"
                className="z-mobile"
                placeholder="请输入手机号"
                value={mobile}
                onChange={this.handleChange}
              />
            </div>
            <div className="code-panel">
              <input
                type="text"
                name="code"
                className="z-code"
                placeholder="请输入验证码"
                value={code}
                onChange={this.handleChange}
              />
              <span className="send-code">发送验证码</span>
            </div>
          </div>
        )}

        <div className="btn-login">
          <a className="login">立即登录</a>
        </div>
      </div>
    );
  }
}

export default Login;
