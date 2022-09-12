import React, {useEffect} from "react";
import {Filters, NavBar, ProductList} from "../../components";
import {useDispatch} from "react-redux";
import {getProduct} from "../../redux/actions/productActions";
import {Box} from "@mui/material";

export const Products = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProduct())
    }, [])

    return <Box sx={{display: 'flex'}}>
        <NavBar/>
        <Box component="main" sx={{flexGrow: 1, p: 3, paddingTop: 10}}>
            <Box component={"div"} sx={{display: 'flex'}} justifyContent={'center'}>
                <Filters/>
            </Box>
            <ProductList/>
        </Box>
    </Box>;
};
