import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import styled, { keyframes } from 'styled-components';

import {
  Box,
  Form,
  FormField,
  Button,
  Heading,
  Text,
  Menu,
  Anchor,
  TextInput,
  Notification,
  Toast,
} from 'grommet';

import { Sync, Actions } from 'grommet-icons';
import { Header } from 'components';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
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
            <Button primary label='Start' />
          </Box>
        </Box>
      </Box>
    );
  }
}

Home.propTypes = {};

Home.defaultProps = {};

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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
