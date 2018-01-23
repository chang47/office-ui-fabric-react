import * as React from 'react';
import {
  BaseComponent,
  getId,
  toMatrix,
  classNamesFunction,
  getNativeProps,
  htmlElementProperties
} from '../../Utilities';
import { FocusZone } from '../../FocusZone';
import { IGrid, IGridProps, IGridStyleProps, IGridStyles } from './Grid.types';

const getClassNames = classNamesFunction<IGridStyleProps, IGridStyles>();

export class GridBase extends BaseComponent<IGridProps, {}> implements IGrid {

  private _id: string;

  constructor(props: IGridProps) {
    super(props);
    this._id = getId();
  }

  public render() {
    let {
      items,
      columnCount,
      onRenderItem,
      getStyles,
      positionInSet,
      setSize
    } = this.props;

    const htmlProps = getNativeProps(this.props, htmlElementProperties, ['data', 'onBlur']);

    const classNames = getClassNames(getStyles!, { theme: this.props.theme! });

    // Array to store the cells in the correct row index
    let rowsOfItems: any[][] = toMatrix(items, columnCount);

    let content = (
      <table
        aria-posinset={ positionInSet }
        aria-setsize={ setSize }
        {...htmlProps}
        id={ this._id }
        role={ 'grid' }
        className={ classNames.root }
      >
        <tbody>
          {
            rowsOfItems.map((rows: any[], rowIndex) => {
              return (
                <tr
                  role={ 'row' }
                  key={ this._id + '-' + rowIndex + '-row' }
                >
                  { rows.map((cell, cellIndex) => {
                    return (
                      <td
                        role={ 'presentation' }
                        key={ this._id + '-' + cellIndex + '-cell' }
                        className={ classNames.tableCell }
                      >
                        { onRenderItem(cell, cellIndex) }
                      </td>
                    );
                  }) }
                </tr>
              );
            })
          }
        </tbody>
      </table >
    );

    // Create the table/grid
    return (
      this.props.doNotContainWithinFocusZone ? content : (
        <FocusZone
          isCircularNavigation={ this.props.shouldFocusCircularNavigate }
          className={ classNames.focusedContainer }
          onBlur={ this.props.onBlur }
        >
          { content }
        </FocusZone>
      ));
  }
}