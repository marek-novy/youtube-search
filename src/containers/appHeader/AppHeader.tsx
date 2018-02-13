import 'react-block-ui/style.css';

import * as React from 'react';
import BlockUi from 'react-block-ui';
import { connect } from 'react-redux';

import { HeaderSubmitPayload, HeaderSubmitSearch } from './AppHeaderActions';
import { getHeaderStore, getIsLoading, getSearchValue } from './AppHeaderReducer';
import { SearchForm } from './AppHeaderSearchForm';

interface AppHeaderProps extends IDispatchToProps, MapStateToProps {}

export class AppHeaderRaw extends React.PureComponent<AppHeaderProps> {
    render() {
        const { isLoading, submitFormData } = this.props;
        return (
            <header className="main-header">
                <BlockUi tag="div" blocking={isLoading} message="Searching best videos for you.">
                    <SearchForm
                        handleSubmit={formData => {
                            console.log(formData);
                            submitFormData(formData);
                        }}
                    />
                </BlockUi> 
            </header>
        );
    }
}

interface MapStateToProps {
    isLoading: boolean;
    searchValue: string;
}

const mapStateToProps = (state): MapStateToProps => {
    const headerState = getHeaderStore(state);
    return {
        isLoading: getIsLoading(headerState),
        searchValue: getSearchValue(headerState),
    };
};

interface IDispatchToProps {
    submitFormData: (payload: HeaderSubmitPayload) => void;
}

const mapDispatchToProps = (dispatch): IDispatchToProps => {
    return {
        submitFormData: formData => dispatch(HeaderSubmitSearch(formData)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppHeaderRaw);
