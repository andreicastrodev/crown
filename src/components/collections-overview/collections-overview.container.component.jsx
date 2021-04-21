import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";
import withSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";

const mapState = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapState),
  withSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
