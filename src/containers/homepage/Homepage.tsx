import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';

import AppHeader from '../../containers/appHeader/AppHeader';
import Sidebar from '../sidebar/Sidebar';

class HomepageRaw extends React.PureComponent<any, any> {
    render(): React.ReactNode {
        return (
            <>
                <AppHeader />
                <Container fluid>
                    <Row>
                        <Col xs="12" md="4" xl="3">
                            <Sidebar />
                        </Col>
                        <Col />
                    </Row>
                </Container>
            </>
        );
    }
}

export default HomepageRaw;
