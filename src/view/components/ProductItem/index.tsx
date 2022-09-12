import React, {useState, FC} from "react";
import {Box, Card, CardContent, CardMedia, Grid, Modal, Typography} from "@mui/material";
import {ProductItemData} from "../../../init/models/products";

import styles from "./styles";

export const ProductItem: FC<ProductItemData> = ({
                                                            hours,
                                                            description,
                                                            logo,
                                                            review,
                                                            name,
                                                            type,
                                                        }) => {
    const [modalShow, setModalShow] = useState(false);

    const workHoursLayout = () => {
        const date = new Date();

        const result = (opens_at: string, closes_at: string, status: string) =>
            (<Box component={'div'} textAlign={"center"}>
                <Typography variant="h6" color="info.main" component="p">opens_at: {opens_at} </Typography>
                <Typography variant="h6" color="info.main" component="p">closes_at: {closes_at} </Typography>
                <Typography variant="h5" mt={1} color={'warning.main'} component="p">We are {status}!</Typography>
            </Box>)

        switch (date.getDay()) {
            case 1:
                return result(hours.monday.opens_at, hours.monday.closes_at, hours.monday.is_closed ? "open now" : 'closed, sorry')
            case 2:
                return result(hours.tuesday.opens_at, hours.tuesday.closes_at, hours.tuesday.is_closed ? "open now" : 'closed, sorry')
            case 3:
                return result(hours.wednesday.opens_at, hours.wednesday.closes_at, hours.wednesday.is_closed ? "open now" : 'closed, sorry')
            case 4:
                return result(hours.thursday.opens_at, hours.thursday.closes_at, hours.thursday.is_closed ? "open now" : 'closed, sorry')
            case 5:
                return result(hours.friday.opens_at, hours.friday.closes_at, hours.friday.is_closed ? "open now" : 'closed, sorry')
            case 6:
                return result(hours.saturday.opens_at, hours.saturday.closes_at, hours.saturday.is_closed ? "open now" : 'closed, sorry')
            case 7:
                return result(hours.sunday.opens_at, hours.sunday.closes_at, hours.sunday.is_closed ? "open now" : 'closed, sorry')
        }
    }

    return (
        <Grid item sm={6} md={4} lg={3} xl={2}>
            <Card variant="outlined" sx={{height: '100%'}} onClick={() => setModalShow(true)}>
                <CardMedia
                    component="img"
                    height="200"
                    src={logo} 
                    alt={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{name}</Typography>
                    <Typography gutterBottom variant="h6" component="div">{type}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={styles.cardDescription}>
                        {description}
                    </Typography>
                </CardContent>
            </Card>
            <Modal
                open={modalShow}
                onClose={() => setModalShow(false)}
            >
                <Card variant="outlined" sx={styles.modalContainer}>
                    <CardMedia
                        component="img"
                        height="100%"
                        src={logo}
                        alt={name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">{review}</Typography>
                        {workHoursLayout()}
                    </CardContent>
                </Card>
            </Modal>
        </Grid>
    );
};
