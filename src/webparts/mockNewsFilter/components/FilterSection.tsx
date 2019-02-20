import * as React from 'react';
import styles from './MockNewsFilter.module.scss';
import { DropdownMenuItemType, Dropdown } from 'office-ui-fabric-react';
import { observer } from 'mobx-react';

export interface IFilterSectionProps {
    filterText: string;
}

@observer
export default class FilterSection extends React.Component<IFilterSectionProps, {}> {
    public render() {
        return <Dropdown
            placeholder={this.props.filterText}
            label={this.props.filterText}
            options={[
                { key: 'Header', text: 'Actions', itemType: DropdownMenuItemType.Header },
                { key: 'A', text: 'Option a', title: 'I am option a.' },
                { key: 'B', text: 'Option b' },
                { key: 'C', text: 'Option c', disabled: true },
                { key: 'D', text: 'Option d' },
                { key: 'E', text: 'Option e' },
                { key: 'divider_2', text: '-', itemType: DropdownMenuItemType.Divider },
                { key: 'Header2', text: 'People', itemType: DropdownMenuItemType.Header },
                { key: 'F', text: 'Option f' },
                { key: 'G', text: 'Option g' },
                { key: 'H', text: 'Option h' },
                { key: 'I', text: 'Option i' },
                { key: 'J', text: 'Option j' }
            ]}
        />;
    }
}