import BookingSuccess from '../../../components/Screens/BookingSuccess/BookingSuccess';
import { Provider } from "react-redux";

import * as renderer from "react-test-renderer";

import { bookedSeats } from '../../../mock_data';

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];

const mockStore = configureStore(middlewares);

let store = mockStore({
    booking: {
        bookedSeats
    }
});

describe("<BookingSuccess />", () => {

    it("should render correctly given seats data from store", () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <BookingSuccess />
                </Provider>
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

})