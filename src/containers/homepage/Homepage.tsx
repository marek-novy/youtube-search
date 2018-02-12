import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { AppHeader } from '../../components/appHeader/AppHeader';

// import { connect } from 'react-redux';

class HomepageRaw extends React.Component<any, any> {
    render(): React.ReactNode {
        return (
            <>
                <AppHeader />
                <div className="main-wrapper pt-4 pb-4">
                    <Switch>
                        <Route path="/" component={() => <div>youtube</div>} />
                    </Switch>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state: any) => state;
const mapDispatchToProps = (dispatch: () => void) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(HomepageRaw);
