import { SearchBar } from 'components/searchBar/SearchBar';
import { Formik, FormikProps } from 'formik';
import * as React from 'react';
import { Form } from 'reactstrap';

export interface SearchFormData {
    searchInput: string;
}

class SearchFormInner extends React.PureComponent<FormikProps<SearchFormData>> {
    render() {
        const { handleSubmit, handleChange, handleBlur, values } = this.props;
        return (
            <Form onSubmit={handleSubmit}>
                <SearchBar name="searchInput" onChange={handleChange} onBlur={handleBlur} value={values.searchInput} />
            </Form>
        );
    }
}

interface SearchFormProps {
    handleSubmit: (values: SearchFormData) => void;
    formData?: SearchFormData;
}

export const SearchForm: React.SFC<SearchFormProps> = props => {
    const { handleSubmit } = props;
    return <Formik initialValues={{ searchInput: '' }} component={SearchFormInner} onSubmit={handleSubmit} />;
};
