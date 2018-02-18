// tslint:disable:max-line-length
import 'react-block-ui/style.css';

import * as React from 'react';
import BlockUi from 'react-block-ui';
import { GoogleLogin } from 'react-google-login';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

import { HomepageGoogleLogged } from '../homepage/HomepageActions';
import { getGoogleData, getHomepageStore, getIsLogged } from '../homepage/HomepageReducer';
import { HeaderSubmitPayload, HeaderSubmitSearch } from './AppHeaderActions';
import { getHeaderStore, getIsLoading, getSearchValue } from './AppHeaderReducer';
import { SearchForm } from './AppHeaderSearchForm';

interface AppHeaderProps extends IDispatchToProps, MapStateToProps {
    isLogged: boolean;
}

export class AppHeaderRaw extends React.PureComponent<AppHeaderProps> {
    responseGoogle = response => {
        const { logGoogle } = this.props;
        if (response.error) {
            console.error('Google Auth:', response.error);
        } else {
            logGoogle(response);
        }
    };

    render() {
        const { isLoading, submitFormData, googleData, isLogged } = this.props;
        let expiredToken = false;

        if (googleData && isLogged) {
            const { expires_at } = googleData.Zi;
            if (expires_at - Date.now() > 1000 * 60 * 1) {
                expiredToken = true;
            }
        }

        return (
            <header className="main-header">
                <BlockUi tag="div" blocking={isLoading} message="Searching best videos for you.">
                    <Container fluid>
                        <Row className="align-items-center">
                            <Col xs="3">
                                <Link to="/">
                                    <h1>
                                        <span>You</span>Tube SEARCH
                                    </h1>
                                </Link>
                            </Col>
                            <Col>
                                <SearchForm
                                    handleSubmit={formData => {
                                        submitFormData(formData);
                                    }}
                                />
                            </Col>
                            <Col>
                                {/* It injects script tag with client gapi.
                                 Too late. I could have used it for api calls. */}
                                <GoogleLogin
                                    clientId="409942485049-6qa7as2dbab7au7se5o8msjna54e5qqg.apps.googleusercontent.com"
                                    buttonText={!expiredToken ? 'Google Login' : 'Logged in'}
                                    scope="https://www.googleapis.com/auth/youtube"
                                    onSuccess={this.responseGoogle}
                                    onFailure={this.responseGoogle}
                                />
                            </Col>
                        </Row>
                    </Container>
                </BlockUi>
            </header>
        );
    }
}

interface MapStateToProps {
    isLoading: boolean;
    searchValue: string;
    googleData: any;
    isLogged: boolean;
}

const mapStateToProps = (state): MapStateToProps => {
    const headerState = getHeaderStore(state);
    const homepageState = getHomepageStore(state);
    return {
        isLoading: getIsLoading(headerState),
        searchValue: getSearchValue(headerState),
        googleData: getGoogleData(homepageState),
        isLogged: getIsLogged(homepageState),
    };
};

interface IDispatchToProps {
    submitFormData: (payload: HeaderSubmitPayload) => void;
    logGoogle: (payload: any) => void;
}

const mapDispatchToProps = (dispatch): IDispatchToProps => {
    return {
        submitFormData: formData => dispatch(HeaderSubmitSearch(formData)),
        logGoogle: response => dispatch(HomepageGoogleLogged(response)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppHeaderRaw);
