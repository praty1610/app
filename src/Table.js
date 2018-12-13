import React, { PureComponent } from 'react';

class Table extends PureComponent {
    constructor() {
        super() 
        this.state ={ 
            rows: null,
            columns: [],
            rowSpaces: null,
            columnSpaces: null
        }
    }

    displayRows = () => {
        let { rows, columns, rowSpaces, columnSpaces} = this.state;
        let array = [];
        for(var i=0;i<rows;i++) {
            array.push(
                <div className="row" style={{margin:rowSpaces}}>
                    {this.displayColumns(i)}
                </div>
            )
        }
        return array;
    }

    displayColumns = (index) => {
        let { rows, columns, rowSpaces, columnSpaces} = this.state;
        let array = [];
        for(var i=0;i<columns[index];i++) {
            array.push(
                <div className="column" style={{margin: columnSpaces}}>
                
                </div>
            )
        }
        return array;
    }

    render() {
        return(
            <React.Fragment>
                <div>
                    <label htmlFor="rows">Rows:</label>
                    <input type="text" name="rows" placeholder="Rows" value={this.state.rows} onChange={(e) => this.setState({rows: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="columns">Columns:</label>
                    <input type="text" name="columns" placeholder="Columns" value={this.state.columns.join(',')} onChange={(e) => this.setState({columns: e.target.value.split(',')})}/>
                </div>
                <div>
                    <label htmlFor="spacesRows">Spaces between Rows:</label>
                    <input type="text" name="spacesRows" placeholder="spaces between rows" value={this.state.rowSpaces} onChange={(e) => this.setState({rowSpaces: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="spaceColumns">Spaces between Columns::</label>
                    <input type="text" name="spaceColumns" placeholder="spaces between columns" value={this.state.columnSpaces} onChange={(e) => this.setState({columnSpaces: e.target.value})}/>
                </div> 
                <h1>Rows and Columns</h1>
                {this.displayRows()}
            </React.Fragment>
        )
    }
}

export default Table