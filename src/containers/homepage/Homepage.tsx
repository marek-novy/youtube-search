import * as React from 'react';

import  AppHeader  from '../../containers/appHeader/AppHeader';
import Sidebar from '../sidebar/Sidebar';

class HomepageRaw extends React.PureComponent<any, any> {
    render(): React.ReactNode {
        return (
            <>
                <AppHeader />
                <Sidebar />
            </>
        );
    }
}

export default HomepageRaw;
