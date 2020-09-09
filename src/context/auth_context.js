import createDataContext from './create_data_context';

const authReducer = (state, action) => {

    switch(action.type){
        default:
            return state;
    }
};

// Action Functions defined here

export const { Context, Provider } = createDataContext(
    authReducer,
    {},
    { isSignedIn: true }
);