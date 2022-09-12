import React, {useEffect, FC} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {authStateSelector} from "../../../init/store/selectors";
import {useNavigate} from "react-router-dom";
import {userSignIn, userSignUp} from "../../../init/store/actions/userActions";
import {SubmitHandler, useForm} from "react-hook-form";
import {Avatar, Button, TextField, Link, Grid, Box, Typography, Container} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import {routes} from "../../../init/constants/routes";
import {UserData} from "../../../init/models/user";

interface SingInProp {
    singUpPage?: boolean;
}

export const SignIn: FC<SingInProp> = ({singUpPage}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm<UserData>();
    const isAuthenticated = useSelector(authStateSelector, shallowEqual);

    useEffect(() => {
        isAuthenticated && navigate(routes.products, {replace: true});
    }, [isAuthenticated])

    const onSubmit: SubmitHandler<UserData> = (data) => {
        singUpPage ? dispatch(userSignUp(data)) : dispatch(userSignIn(data));
        navigate(routes.products)
    }

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign {singUpPage ? 'up' : 'in'}
                </Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{mt: 1}}>
                    <TextField
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email Address"
                        autoComplete="email"
                        autoFocus
                        helperText={errors?.email ? errors.email.message : null}
                        {...register("email", {required: "Required field"})}
                        error={!!errors?.email}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        helperText={errors?.email ? errors.email.message : null}
                        {...register("password", {required: "Required field"})}
                        error={!!errors?.password}
                    />
                    <Grid container justifyContent={'center'}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Sign {singUpPage ? 'Up' : 'In'}
                        </Button>
                        <Grid item>
                            <Link href={singUpPage ? routes.signIn : routes.singUp} variant="body2">
                                {singUpPage ? "Do you have an account? Sign In" : "Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}