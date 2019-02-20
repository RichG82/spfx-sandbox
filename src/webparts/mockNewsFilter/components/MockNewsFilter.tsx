import * as React from 'react';
import styles from './MockNewsFilter.module.scss';
import { IMockNewsFilterProps } from './IMockNewsFilterProps';
import { escape } from '@microsoft/sp-lodash-subset';
import SearchBox from './SearchBox';
import FilterSection from './FilterSection';
import { observer } from 'mobx-react';
import MockStore from './MockStore';
import { Label } from 'office-ui-fabric-react/lib/Label';

@observer
export default class MockNewsFilter extends React.Component<IMockNewsFilterProps, {}> {
  private store: MockStore;
  constructor(props: IMockNewsFilterProps) {
    super(props);

    // new up a new Store, this will be passed to child components so they can all share state.
    this.store = new MockStore();
  }
  public render(): React.ReactElement<IMockNewsFilterProps> {
    return (
      <div className={styles.mockNewsFilter}>
        <h2>{this.props.title}</h2>
        {/* pass the current store to the child object */}
        <SearchBox store={this.store} />
        <div className={styles.filterSection}>

          {/* {...this.props} is the same as saying myProperty={this.props.myProperty} for each property in the object */}
          <FilterSection {...this.props} filterText={"Filter 1"} />
          <FilterSection {...this.props} filterText={"Filter 2"} />
        </div>
        <div className={styles.resultsSection}>
          <Label>There are {this.store.results.length} results.  This number is {this.store.evenOddText}.</Label>
          {this.store.results && this.store.isLoading == false && this.store.results.map(result => {
            return <div>{result.title}, {result.description}</div>;
          })}
          {this.store.isLoading && <Label>Loading...</Label>}
        </div>
      </div>
    );
  }
}
