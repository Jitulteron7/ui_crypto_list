import React from "react";
import Pagination from 'react-bootstrap/Pagination';

function Pagi(props) {
    const { totSize, currentPage, setCurrentPage, PageSize, setPageSize } = props;
    const [data, setData] = React.useState([])
    const [count, setCount] = React.useState(1)
    React.useEffect(() => {
        let res = []

        function dataFunction() {
            let start = (currentPage - 1) * PageSize;
            let end = start + PageSize;
            for (let i = start; i <= end; i++) {
                res.push(i);
            }
            console.log('running')
        }
        dataFunction();
        setData(res);
        // setCount(1);
        return () => {
            console.log("pagination done")
        }
    }, [])

    const nextIs = (e) => {
        e.preventDefault()
        if (currentPage != totSize) {
            // setCount(count+1);
            setCurrentPage(currentPage + 1)
        }

    }

    const prevnextIs = (e) => {
        e.preventDefault()
        if (currentPage != 1) {
            setCurrentPage(currentPage - 1)
            // setCount(count-1);
        }
    }
    return (
        <Pagination>
            {/* <Pagination.First /> */}
            <Pagination.Prev disabled={currentPage == 1 ? true : false} onClick={prevnextIs} />
            {data.map((item, idx) => {
                if (item == currentPage) {
                    return (<Pagination.Item active>{item}</Pagination.Item>)
                }
                return (<Pagination.Item onClick={(e) => { setCurrentPage(idx + 1) }} >{item}</Pagination.Item>)
            })}
            {/* <Pagination.Item onClick={(e) => { setCurrentPage(currentPage + 1) }} >{currentPage}</Pagination.Item> */}
            {/* <Pagination.Item active>{12}</Pagination.Item> */}
            {/* {PageSize > 10 ?
                <>
                    <Pagination.Ellipsis />
                    <Pagination.Item>{PageSize}</Pagination.Item>
                </> : <></>
            } */}

            <Pagination.Next disabled={currentPage == totSize ? true : false} onClick={nextIs} />
            {/* <Pagination.Last /> */}
        </Pagination>
    );
}

export default Pagi;