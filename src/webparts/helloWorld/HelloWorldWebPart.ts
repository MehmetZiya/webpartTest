import { Version } from '@microsoft/sp-core-library'
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from '@microsoft/sp-property-pane'
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base'
import { escape } from '@microsoft/sp-lodash-subset'

import styles from './HelloWorldWebPart.module.scss'
import * as strings from 'HelloWorldWebPartStrings'

export interface IHelloWorldWebPartProps {
  description: string
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {
  public render(): void {
    this.domElement.innerHTML = `
      <div class="${styles.helloWorld}">
        <div class="${styles.container}">
          <div class="${styles.row}">
            <div class="${styles.column}">
              <div class="${styles.buttonGroup}">
              <p class="${styles.searchHead}">Search by Department</p>
                <button class="${styles.btnSale}">Sales</button>
                <button class="${styles.btnHr}">HR</button>
                <button class="${styles.btnMrkt}">Marketing</button>
                <button class="${styles.btnIt}">IT</button>
                <button class="${styles.btnAcc}">Account</button>
              </div>
            </div>

            <div class="${styles.column}">
              <div class="${styles.searchField}">
              <p class="${styles.searchHead}">Search by Keyword</p>
              <input type="text" class="${styles.searchInput}"></input>
              </div>
            </div>

            <div class="${styles.column}">
              <div class="${styles.searchField}">
              <p class="${styles.searchHead}">Search by Metadata</p>

              <select class="${styles.selectField}" id="cars">
                <option value="Malmo">Malmo</option>
                <option value="Goteborg">Goteborg</option>
                <option value="Stockholm">Stockholm</option>
                <option value="Halmstad">Halmstad</option>
                <option value="Kalmar">Kalmar</option>
                <option value="Helsingborg">Helsingborg</option>
              </select>
              </div>
            </div>
          </div>
        </div>
      </div>`
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0')
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription,
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel,
                }),
              ],
            },
          ],
        },
      ],
    }
  }
}
