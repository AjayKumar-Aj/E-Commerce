/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername, makeApiCall } from './actions';
import { makeSelectUsername, fetchResponse } from './selectors';
import reducer from './reducer';
import saga from './saga';
import DatePicker from "react-datepicker";
import FindResult from 'components/FindResult';
import { LeftDate, RightDate, Login} from './style.js';


/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      
    };
    
    this.handleChange = this.handleChange.bind(this),
    this.makeApiCall = this.makeApiCall.bind(this);  
  }

  makeApiCall() {
    this.props.makeApi();
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  //makeApiCall() {
    //console.log('api');
  //}

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };
    console.log('response', this.props.response);
    return (
      <div>
      <Login>
      <button class="test" onClick={this.makeApiCall}>Test </button>
      <h1> {this.props.response.id} </h1>

        <LeftDate>
          
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
            />
        </LeftDate>

        <RightDate>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
            />
        </RightDate>
        <FindResult />
        
        
      </Login>
      
      </div>
      
      
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
  response: PropTypes.object,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    makeApi: evt => dispatch(makeApiCall()),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  response: fetchResponse(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
