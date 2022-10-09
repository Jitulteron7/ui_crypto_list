import React, { useEffect } from "react";
import axios from "axios";
import Pagination from "../../components/Pagination"
import { Link } from "react-router-dom"
import classes from "./home.module.css";
import Table from "../../components/boxes"
import Tab from "../../components/tabs";

const Home = () => {
    const [data, setData] = React.useState([]);
    const [PageSize, setPageSize] = React.useState(10);
    const [currentPage, setCurrentPage] = React.useState(1);



    useEffect(() => {

        async function fetchData() {
            try {
                const res = await axios.get('https://supermind-staging.vercel.app/api/test/listing');
                setData(res.data)
            }
            catch (e) {
                console.log(e, "error");
            }
        }

        fetchData()
        return () => {
            console.log("This will be logged on unmount");
        }
    }, [])

    const [currentTableData, setcurrentTableData] = React.useState([]);

    useEffect(() => {

        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        setcurrentTableData(data.slice(firstPageIndex, lastPageIndex));
        return () => {
            console.log("Pagination");
        }

    }, [data, currentPage])


    return (
        <>
            <div className={classes.container}>
                <div style={{ margin: "20px auto", textAlign: "center" }}><h1 ></h1></div>
                <div className={classes.tab_container}>
                    <Tab title={'All'} tab={true}/>
                    <Tab title={'defi'}/>
                    <Tab title={'innovation-zone'}/>
                    <Tab title={'NFT'}/>
                    <Tab title={'fan_token'}/>
                    <Tab title={'Launchpad'}/>
                    <Tab title={'bnbchain'}/>
                    <Tab title={'Layer1_Layer2'}/>
                    <Tab title={'Layer1_Layer2'}/>
                </div>
                <div className={classes.table_container}>
                <Table currentTableData={currentTableData}/>
                </div>
                <div className={classes.pagination}>
                    <Pagination

                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        PageSize={PageSize}
                        totSize={data.length}
                        setPageSize={setPageSize}
                    />
                    {console.log(data)}
                </div>
            </div>
        </>)
}

/*
 const [data, setData] = React.useState([]);
    const [PageSize, setPageSize] = React.useState(15);
    const [currentPage, setCurrentPage] = React.useState(1);
    */
export default Home;