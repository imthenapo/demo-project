import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';

import { Box, Button, Heading, TextInput } from 'grommet';

import styled, { css } from 'styled-components';

const StyledButton = styled(Button)`
  background: red;
  margin: 6px;
  ${props =>
    props.hasValue &&
    css`
      background: green;
    `};
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
    this.onUsernameInput = this.onUsernameInput.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }
  componentDidMount() {}

  onLogin() {}

  onUsernameInput(e) {
    const { target } = e;
    this.setState({ username: target.value });
  }

  render() {
    const { username } = this.state;
    return (
      <Box align='center' justify='center' full>
        <Helmet>
          <title>Demo Project</title>
        </Helmet>
        <Box>
          <Box pad='small' tag='header'>
            <Heading textAlign='center' margin='none' uppercase>
              <strong>Demo Project</strong>
            </Heading>
            <Box>Type your name and hit login</Box>
          </Box>

          <Box pad='small'>
            <TextInput value={ username } onChange={ this.onUsernameInput } />
            <StyledButton
              primary
              hasValue={ username }
              label='Start'
              onClick={ (username && this.onLogin) || null }
            />
          </Box>
        </Box>
      </Box>
    );
  }
}

Login.propTypes = {};

Login.defaultProps = {};

function mapStateToProps(dispatch) {
  return {};
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      // ...authActions, ...generalActions
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
