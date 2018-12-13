import React from 'react';

const Pagination = (props) => {
    let {current, total, skip, next, nextPage, previousPage, previous} = props;

    const display = () => {
        let array = [];
        for(var i=current;i<=skip;i++) {
            if(i<=total){
                array.push(`B${i} `);
            } else {
                break
            }
        }
        return array
    }

    return (
        <div className="pagination">
            <div style={{display:!previous?'none':'block'}}><i className="fa fa-chevron-left" onClick={() => previousPage()}/></div>
            {display()}
            <div style={{display:!next?'none':'block'}}><i className="fa fa-chevron-right" onClick={() => nextPage()}/></div>
        </div>
    )
}

export default Pagination