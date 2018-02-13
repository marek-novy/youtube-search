import * as React from 'react';

import  AppHeader  from '../../containers/appHeader/AppHeader';

class HomepageRaw extends React.PureComponent<any, any> {
    render(): React.ReactNode {
        return (
            <>
                <AppHeader />
                <div className="main-wrapper pt-4 pb-4">Hello</div>
            </>
        );
    }
}

export default HomepageRaw;
