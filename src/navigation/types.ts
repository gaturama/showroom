import { Car } from "./car";

export type RootStackParamList = {
    Login: undefined;
    Register: undefined;
    Home: undefined;
    Profile: undefined;
    CarDetails: {
        car: Car;
    };
    Favorites: undefined;
    Compare: undefined;
    History: undefined;
};