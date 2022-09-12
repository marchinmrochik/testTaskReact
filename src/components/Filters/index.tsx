import React, {useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getProductTypesSelector} from "../../redux/selectors";
import {FilteredProduct} from "../../redux/actions/productActions";
import {useMediaQuery, InputLabel, OutlinedInput, MenuItem, Checkbox, ListItemText, FormControl, useTheme} from "@mui/material";
import Select, {SelectChangeEvent} from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250
        }
    }
};

export const Filters = () => {
    const productTypes = useSelector(getProductTypesSelector, shallowEqual);
    const [personName, setPersonName] = useState<string[]>([]);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const dispatch = useDispatch();

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: {value}
        } = event;
        setPersonName(typeof value === "string" ? value.split(",") : value);
    };

    const handleSetFilter = (product: string) => dispatch(FilteredProduct({product: product}))

    return (
        <FormControl sx={{m: 1, width: matches ? 'calc(100% - 16px)' : '30%'}}>
            <InputLabel id="multiple-checkbox-label">Type</InputLabel>
            <Select
                labelId="multiple-checkbox-label"
                id="multiple-checkbox"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Type"/>}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
            >
                {productTypes?.map((name) => (
                    <MenuItem key={name} value={name} onClick={() => handleSetFilter(name)}>
                        <Checkbox checked={personName.indexOf(name) > -1}/>
                        <ListItemText primary={name}/>
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};