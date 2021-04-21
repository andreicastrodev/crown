import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import CollectionPage from "./collection.component";
import withSpinner from "../../components/with-spinner/with-spinner.component";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selector";

const mapState = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapState),
  withSpinner
)(CollectionPage);

export default CollectionPageContainer;
