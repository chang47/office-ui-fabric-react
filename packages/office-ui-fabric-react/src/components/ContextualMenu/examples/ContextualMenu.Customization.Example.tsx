import * as React from 'react';
import { DirectionalHint, ContextualMenuItemType } from 'office-ui-fabric-react/lib/ContextualMenu';
import { DefaultButton, IconButton, IButton } from 'office-ui-fabric-react/lib/Button';
import { FocusZoneDirection, FocusZone } from 'office-ui-fabric-react/lib/FocusZone';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import './ContextualMenuExample.scss';
import { SwatchColorPicker } from 'office-ui-fabric-react/lib/SwatchColorPicker';

export class ContextualMenuCustomizationExample extends React.Component<{}, {}> {
  public render() {
    return (
      <DefaultButton
        className='ContextualMenuButton3'
        text='Click for ContextualMenu'
        menuProps={
          {
            shouldFocusOnMount: true,
            className: 'ms-ContextualMenu-customizationExample',
            arrowDirection: FocusZoneDirection.vertical,
            items:
              [
                {
                  key: 'next',
                  name: 'next',
                  onRender: this._renderDoubleFocus
                }
              ]
          }
        }

      />
    );
  }

  @autobind
  private _renderCharmMenuItem(item: any, dismissMenu: () => void) {
    return (
      <IconButton
        iconProps={ { iconName: item.name } }
        className='ms-ContextualMenu-customizationExample-icon ms-ContextualMenu-link'
        data-is-focusable={ true }
        onClick={ dismissMenu }
      />
    );
  }

  private _renderDoubleFocus(item: any) {
    return (
      <div>
        <SwatchColorPicker
          doNotContainWithinFocusZone={ false }
          columnCount={ 5 }
          cellShape={ 'circle' }
          colorCells={
            [
              { id: 'a', label: 'green', color: '#00ff00' },
              { id: 'b', label: 'orange', color: '#ffa500' },
              { id: 'c', label: 'blue', color: '#0000ff' },
              { id: 'd', label: 'red', color: '#ff0000' },
              { id: 'e', label: 'white', color: '#ffffff' },
              { id: 'aa', label: 'green', color: '#00ff00' },
              { id: 'bb', label: 'orange', color: '#ffa500' },
              { id: 'cc', label: 'blue', color: '#0000ff' },
              { id: 'dd', label: 'red', color: '#ff0000' },
              { id: 'ee', label: 'white', color: '#ffffff' }
            ]
          }
        />
        <SwatchColorPicker
          doNotContainWithinFocusZone={ false }
          columnCount={ 5 }
          cellShape={ 'square' }
          colorCells={
            [
              { id: 'f', label: 'green', color: '#00ff00' },
              { id: 'g', label: 'orange', color: '#ffa500' },
              { id: 'h', label: 'blue', color: '#0000ff' },
              { id: 'i', label: 'red', color: '#ff0000' },
              { id: 'j', label: 'white', color: '#ffffff' },
              { id: 'ff', label: 'green', color: '#00ff00' },
              { id: 'gg', label: 'orange', color: '#ffa500' },
              { id: 'hh', label: 'blue', color: '#0000ff' },
              { id: 'ii', label: 'red', color: '#ff0000' },
              { id: 'jj', label: 'white', color: '#ffffff' }
            ]
          }
        />
        <DefaultButton />
        <DefaultButton />
      </div>
    )
  }

  private _renderCategoriesList(item: any) {
    return (
      <ul className='ms-ContextualMenu-customizationExample-categoriesList'>
        <li className='ms-ContextualMenu-item'>
          { item.categoryList.map((category: any) =>
            <button className='ms-ContextualMenu-link' role='menuitem'>
              <div>
                <span
                  className='ms-ContextualMenu-icon ms-ContextualMenu-customizationExample-categorySwatch'
                  style={ { backgroundColor: category.color } }
                />
                <span className='ms-ContextualMenu-itemText'>
                  { category.name }
                </span>
              </div>
            </button>
          ) }
        </li>
      </ul>
    );
  }
}
