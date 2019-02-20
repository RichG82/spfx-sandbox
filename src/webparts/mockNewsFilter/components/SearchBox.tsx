import * as React from 'react';
import styles from './MockNewsFilter.module.scss';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import {DefaultButton} from 'office-ui-fabric-react/lib/Button';
import { observer } from 'mobx-react';
import MockStore from './MockStore';


export interface ISearchBoxProps {
    store: MockStore;
}

@observer
export default class SearchBox extends React.Component<ISearchBoxProps, {}> {
    public render() {
        return (
            <div className={styles.searchBoxContainer}>
                <TextField className={styles.searchBox}/>
                <PrimaryButton text={"Search"} className={styles.searchButton} onClick={() => this.props.store.getResults()}/>
                <DefaultButton text={"Reset"} onClick={() => this.props.store.clearResults()}/>
            </div>
        );
    }
}
