import { Provider } from "react-redux";
import Home from "../../../components/Screens/Home/Home";

import { createMemoryHistory } from 'history';

import * as renderer from "react-test-renderer";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import { seats } from "../../../mock_data";

const middlewares = [thunk];

const mockStore = configureStore(middlewares);

const history = createMemoryHistory();

describe("<Home />", () => {
    it("should return booking form correctly", () => {
        let store = mockStore({
            seats: {
                loading: false,
                seats,
                seatsToChoose: 0,
                nextToEachOther: false,
                error: false,
                errorMessage: "",
            },
        });

        const tree = renderer
            .create(
                <Provider store={store}>
                    <Home history={history} />
                </Provider>
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it("should render booking form with error when its on store", () => {

        let store = mockStore({
            seats: {
                loading: false,
                seats,
                seatsToChoose: 0,
                nextToEachOther: false,
                error: true,
                errorMessage: "Nie można zarezerwować 0 biletów",
            },
        });

        const tree = renderer
            .create(
                <Provider store={store}>
                    <Home history={history} />
                </Provider>
            )
            .toJSON();

        expect(tree).toMatchSnapshot();

    });

});
