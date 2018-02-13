import { Field } from 'formik';
import * as React from 'react';
import { Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';

interface SearchBarProps {
    onChange: (e: React.ChangeEvent<any>) => void;
    onBlur: (e: any) => void;
    value: string | undefined;
    name: string;
    placeholder?: string;
    [property: string]: any;
}

export const SearchBar = (props: SearchBarProps) => {
    const { name, onChange, onBlur, placeholder, value, isSubmitting, ...rest } = props;
    return (
        <InputGroup>
            <Field
                type="text"
                component={Input}
                name={name}
                id={name}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                value={value}
                {...rest}
            />
            <InputGroupAddon addonType="append">
                <Button type="submit" className="search__submit" disabled={isSubmitting}>
                    Search
                </Button>
            </InputGroupAddon>
        </InputGroup>
    );
};
