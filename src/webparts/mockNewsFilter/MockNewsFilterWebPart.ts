import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'MockNewsFilterWebPartStrings';
import MockNewsFilter from './components/MockNewsFilter';
import { IMockNewsFilterProps } from './components/IMockNewsFilterProps';

export interface IMockNewsFilterWebPartProps {
  title: string;
}

export default class MockNewsFilterWebPart extends BaseClientSideWebPart<IMockNewsFilterWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IMockNewsFilterProps > = React.createElement(
      MockNewsFilter,
      {
        title: this.properties.title
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: "Configuration"
          },
          groups: [
            {
              groupName: "Configuration Settings",
              groupFields: [
                PropertyPaneTextField('title', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
