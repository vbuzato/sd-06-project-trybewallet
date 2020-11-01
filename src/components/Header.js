import React from 'react';
import trybeLogo from '../images/trybeLogo.png';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { userLogin } = this.props;
    return (
      <header>
        <img src={ trybeLogo } alt="trybe-logo" />
        <div className="email-field">
          Email:
          <span
            data-testid="email-field"
          >
            { userLogin }
          </span>
        </div>
        <div className="total-field">
          Despesa Total:
          <span
            data-testid="total-field"
          >
            0
          </span>
        </div>
        <div className="currency-field">
          <span
            data-testid="header-currency-field"
          >
            BRL
          </span>
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  const mappedProps = {
    userLogin: state.user.email,
  };
  return mappedProps;
}

export default connect(mapStateToProps)(Header);
