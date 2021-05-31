import Booking from '../../../components/Screens/Booking/Booking';
import { Provider } from "react-redux";

import * as renderer from "react-test-renderer";
import { createMemoryHistory } from 'history';

import { seats } from '../../../mock_data';

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];

const mockStore = configureStore(middlewares);

const history = createMemoryHistory();

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

describe("<Booking />", () => {

    it("should render correctly given seats data from store", () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <Booking history={history} />
                </Provider>
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

})